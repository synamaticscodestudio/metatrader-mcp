import express from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { pipeline } from "@xenova/transformers";
import * as lancedb from "@lancedb/lancedb";
import { z } from "zod";
import path from "path";

const app = express();
const PORT = process.env.PORT || 10000;

// --- GLOBAL RESOURCE CACHE ---
let embedder = null;
let table = null;

/**
 * Helper to initialize heavy resources (Embedder & Vector DB)
 */
async function getResources() {
    if (!embedder) {
        console.log("⏳ Loading Embedding Model...");
        embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    }
    
    if (!table) {
        console.log("⏳ Connecting to LanceDB...");
        const baseDir = process.cwd();
        const vectorPath = path.resolve(baseDir, "mt5-vectors");
        const db = await lancedb.connect(vectorPath);
        table = await db.openTable("mt5_docs");
    }
    return { embedder, table };
}

/**
 * 1. Initialize the MCP Server
 */
const server = new McpServer({
    name: "metatrader-mcp-render",
    version: "2.3.0",
});

/**
 * 2. Register Tools
 */

// Liveness Check Tool
server.registerTool(
    "echo",
    {
        description: "Simple liveness test that echoes back a message.",
        inputSchema: z.object({
            message: z.string().describe("The message to echo back")
        })
    },
    async ({ message }) => {
        return {
            content: [{ type: "text", text: `Echo: ${message}` }]
        };
    }
);

// MT5 SDK Semantic Search Tool
server.registerTool(
    "search_sdk",
    {
        description: "Searches the MetaTrader 5 SDK documentation using natural language. Useful for finding API functions, parameters, and trading logic.",
        inputSchema: z.object({
            query: z.string().describe("The technical question or keyword to search for in the SDK docs")
        }),
    },
    async ({ query }) => {
        try {
            const { embedder, table } = await getResources();
            
            // 1. Generate Query Vector
            const output = await embedder(query, { pooling: 'mean', normalize: true });
            const queryVector = Array.from(output.data);
            // Use .toArray() instead of .execute() to get a standard JS Array
            const results = await table
                .search(queryVector)
                .limit(5)
                .toArray(); // This is the key change

            // Now .map() will work perfectly
            const text = results.map(r => `[FILE: ${r.fileName}]\n${r.text}\n---`).join("\n\n");

            return { content: [{ type: "text", text }] };
        } catch (err) {
            console.error("Search Tool Error:", err);
            return { 
                content: [{ type: "text", text: `Search Error: ${err.message}` }],
                isError: true 
            };
        }
    }
);

/**
 * 3. Define SSE Routes for Render/Remote Deployment
 */
const transports = new Map();

app.get("/sse", async (req, res) => {
    console.log("🔌 New SSE Connection Request");
    
    // 1. Create the transport
    const transport = new SSEServerTransport("/messages", res);
    
    // 2. IMPORTANT: Do not use 'await server.connect(transport)' 
    // instead, use the server's own 'connect' method via the transport handler
    // or simply use the server to handle the transport's lifecycle:
    await server.connect(transport);
    
    // 3. Manage the session
    transports.set(transport.sessionId, transport);
    
    console.log(`✅ Session started: ${transport.sessionId}`);

    res.on("close", async () => {
        console.log(`❌ Session closed: ${transport.sessionId}`);
        transports.delete(transport.sessionId);
        // Clean up the connection so the server is "free" again
        await transport.close();
    });
});

app.post("/messages", express.json(), async (req, res) => {
    const sessionId = req.query.sessionId;
    const transport = transports.get(sessionId);

    if (!transport) {
        return res.status(404).send("Session not found");
    }

    await transport.handlePostMessage(req, res, req.body);
});

// Root route for health checking
app.get("/", (req, res) => {
    res.send("<h1>MT5 MCP Server is Active</h1><p>Connect to <code>/sse</code></p>");
});

/**
 * 4. Start the Express Server
 */
app.listen(PORT, "0.0.0.0", async () => {
    console.log(`🚀 MCP Server listening on port ${PORT}`);
    // Optional: Warm up resources on start to avoid delay on first tool call
    try {
        await getResources();
    } catch (e) {
        console.error("Failed to pre-load resources:", e.message);
    }
});