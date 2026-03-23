import express from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { pipeline } from "@xenova/transformers";
import * as lancedb from "@lancedb/lancedb";
import { z } from "zod";
import path from "path";

const app = express();
const PORT = process.env.PORT || 10000;

// --- SHARED HEAVY RESOURCES (Global Singleton) ---
let embedder = null;
let table = null;

/**
 * Ensures heavy AI models and DB connections are only loaded once
 * and shared across all active MCP sessions.
 */
async function getSharedResources() {
    if (!embedder) {
        console.log("⏳ Loading Embedding Model (Xenova/all-MiniLM-L6-v2)...");
        embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    }
    
    if (!table) {
        console.log("⏳ Connecting to LanceDB Index...");
        const vectorPath = path.resolve(process.cwd(), "mt5-vectors");
        const db = await lancedb.connect(vectorPath);
        table = await db.openTable("mt5_docs");
    }
    return { embedder, table };
}

/**
 * Tool Registry Factory
 * Attaches the MT5 Search and Echo tools to a specific server instance.
 */
function registerMT5Tools(serverInstance) {
    // 1. Semantic Search Tool
    serverInstance.registerTool(
        "search_mt5_sdk",
        {
            description: "Searches the MetaTrader 5 SDK documentation. Use this to find MQL5 functions, trading logic, and technical parameters.",
            inputSchema: z.object({
                query: z.string().describe("The natural language question or keyword to search for.")
            }),
        },
        async ({ query }) => {
            try {
                const { embedder, table } = await getSharedResources();
                
                // Generate embedding for the query
                const output = await embedder(query, { pooling: 'mean', normalize: true });
                const queryVector = Array.from(output.data);
                
                // Perform Vector Search (.toArray() ensures compatibility with .map)
                const results = await table.search(queryVector).limit(5).toArray();
                
                if (results.length === 0) {
                    return { content: [{ type: "text", text: "No relevant documentation found." }] };
                }

                const text = results.map(r => `[FILE: ${r.fileName}]\n${r.text}\n---`).join("\n\n");
                return { content: [{ type: "text", text }] };
            } catch (err) {
                console.error("Search Tool Error:", err);
                return { content: [{ type: "text", text: `Search Error: ${err.message}` }], isError: true };
            }
        }
    );

    // 2. Echo/Ping Tool
    serverInstance.registerTool(
        "echo",
        {
            description: "Simple connection test.",
            inputSchema: z.object({ message: z.string() })
        },
        async ({ message }) => ({
            content: [{ type: "text", text: `Echo: ${message}` }]
        })
    );
}

// --- SESSION MANAGEMENT ---
const sessions = new Map();

/**
 * SSE Endpoint: Creates a new isolated MCP server for every client connection.
 */
app.get("/sse", async (req, res) => {
    const sessionId = Math.random().toString(36).substring(7);
    console.log(`🔌 New Connection: Session ${sessionId}`);

    // Create a dedicated server instance for this client
    const personalServer = new McpServer({
        name: `mt5-worker-${sessionId}`,
        version: "2.4.0",
    });

    // Register tools to this specific worker
    registerMT5Tools(personalServer);

    // Initialize the SSE transport
    const transport = new SSEServerTransport("/messages", res);
    
    // Connect the worker to the transport
    await personalServer.connect(transport);
    
    // Store session for routing POST messages
    sessions.set(transport.sessionId, { personalServer, transport });

    // Clean up when client disconnects
    res.on("close", () => {
        sessions.delete(transport.sessionId);
        console.log(`❌ Session ${transport.sessionId} disconnected.`);
    });
});

/**
 * Messages Endpoint: Routes incoming JSON-RPC calls to the correct session.
 */
app.post("/messages", express.json(), async (req, res) => {
    const sessionId = req.query.sessionId;
    const session = sessions.get(sessionId);

    if (!session) {
        return res.status(404).send("Session not found or expired.");
    }

    await session.transport.handlePostMessage(req, res, req.body);
});

// Simple Health Check
app.get("/", (req, res) => {
    res.send(`<h1>MT5 MCP Cluster</h1><p>Active Connections: ${sessions.size}</p>`);
});

/**
 * Start Express Server
 */
app.listen(PORT, "0.0.0.0", async () => {
    console.log(`📡 Render Deployment Live on port ${PORT}`);
    // Pre-warm resources so the first user doesn't wait
    try {
        await getSharedResources();
        console.log("✅ AI Model and Vector DB ready.");
    } catch (e) {
        console.error("❌ Pre-warm failed:", e.message);
    }
});