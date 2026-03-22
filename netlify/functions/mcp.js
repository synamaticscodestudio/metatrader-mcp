import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { toFetchResponse, toReqRes } from "fetch-to-node";
import { pipeline } from "@xenova/transformers";
import * as lancedb from "@lancedb/lancedb";
import { z } from "zod";
import path from "path";

// --- GLOBAL INSTANCES (Cached across warm starts) ---
let embedder;
let table;

async function getResources() {
    if (!embedder) {
        embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    }
    if (!table) {
        const db = await lancedb.connect("./mt5-vectors");
        table = await db.openTable("mt5_docs");
    }
    return { embedder, table };
}

// --- DEFINE THE SERVER ---
const server = new McpServer({
    name: "metatrader-mcp-netlify",
    version: "2.0.0",
});

server.tool(
    "search_mt5_sdk",
    { query: z.string() },
    async ({ query }) => {
        const { embedder, table } = await getResources();
        const output = await embedder(query, { pooling: 'mean', normalize: true });
        const queryVector = Array.from(output.data);

        const results = await table.search(queryVector).limit(5).execute();
        const text = results.map(r => `[${r.fileName}] ${r.text}`).join("\n\n");

        return { content: [{ type: "text", text }] };
    }
);

// --- NETLIFY HANDLER ---
export default async (req) => {
    try {
        if (req.method !== "POST") {
            return new Response("Method Not Allowed", { status: 405 });
        }

        const body = await req.json();
        const { req: nodeReq, res: nodeRes } = toReqRes(req);
        
        const transport = new StreamableHTTPServerTransport();
        await server.connect(transport);
        
        // Handle the incoming MCP request
        await transport.handleRequest(nodeReq, nodeRes, body);
        
        return toFetchResponse(nodeRes);
    } catch (error) {
        console.error("MCP Error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
};

export const config = { path: "/mcp" };