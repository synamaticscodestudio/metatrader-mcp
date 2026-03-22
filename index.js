import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { pipeline } from "@xenova/transformers";
import * as lancedb from "@lancedb/lancedb";
import { express } from "express"; // Recommended for easier SSE routing
import { z } from "zod";
import path from "path";

// --- CONFIGURATION ---
const app = express();
const PORT = process.env.PORT || 10000;
const DB_PATH = path.resolve(process.cwd(), "mt5-vectors");

// --- GLOBAL INSTANCES ---
let embedder;
let table;

async function initResources() {
    console.log("🚀 Initializing MT5 MCP Resources...");
    
    // 1. Load Embedding Model
    embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    
    // 2. Connect to LanceDB (Pre-indexed folder must exist)
    const db = await lancedb.connect(DB_PATH);
    table = await db.openTable("mt5_docs");
    
    console.log("✅ Resources Loaded & Vector DB Connected.");
}

// --- DEFINE MCP SERVER ---
const server = new McpServer({
    name: "metatrader-mcp-render",
    version: "2.3.0",
});

// Register the Search Tool
server.tool(
    "search_mt5_sdk",
    { query: z.string().describe("Natural language query for MT5 SDK docs") },
    async ({ query }) => {
        const output = await embedder(query, { pooling: 'mean', normalize: true });
        const queryVector = Array.from(output.data);

        const results = await table.search(queryVector).limit(5).execute();
        
        const formatted = results.map(r => 
            `[FILE: ${r.fileName}]\n${r.text}\n---`
        ).join("\n\n");

        return { content: [{ type: "text", text: formatted }] };
    }
);

// --- HTTP & SSE ROUTES ---
let transport = null;

// 1. The SSE connection endpoint
app.get("/sse", async (req, res) => {
    console.log("🔌 New SSE connection request");
    transport = new SSEServerTransport("/messages", res);
    await server.connect(transport);
});

// 2. The message handling endpoint (POST)
app.post("/messages", async (req, res) => {
    if (!transport) {
        return res.status(400).send("No active SSE connection");
    }
    await transport.handlePostMessage(req, res);
});

// 3. Health check for Render
app.get("/", (req, res) => {
    res.send("MT5 MCP Server is Running via SSE. Connect to /sse");
});

// --- START SERVER ---
async function start() {
    await initResources();
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`📡 MCP Server listening on port ${PORT}`);
        console.log(`🔗 SSE Endpoint: http://0.0.0.0:${PORT}/sse`);
    });
}

start().catch(err => {
    console.error("❌ Fatal Startup Error:", err);
    process.exit(1);
});
