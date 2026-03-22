import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { toFetchResponse, toReqRes } from "fetch-to-node";
import { pipeline } from "@xenova/transformers";
import * as lancedb from "@lancedb/lancedb";
import { z } from "zod";
import path from "path";
import fs from "fs";

// --- GLOBAL INSTANCES (Cached across warm starts) ---
let embedder;
let table;

async function getResources() {
    if (!embedder) {
        // Initializes the local embedding model
        embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    }
    
    if (!table) {
        // Netlify Functions execute from a specific root. 
        // We resolve the path to the 'mt5-vectors' folder created during the build.
        const baseDir = process.env.LAMBDA_TASK_ROOT || process.cwd();
        const vectorPath = path.resolve(baseDir, "mt5-vectors");

        // Safety check to ensure the index actually exists
        if (!fs.existsSync(vectorPath)) {
            throw new Error(`Vector index not found at ${vectorPath}. Ensure 'npm run build' created it.`);
        }

        const db = await lancedb.connect(vectorPath);
        table = await db.openTable("mt5_docs");
    }
    return { embedder, table };
}

// --- DEFINE THE SERVER ---
const server = new McpServer({
    name: "metatrader-mcp-netlify",
    version: "2.1.0",
});

// --- REGISTER TOOLS ---
server.tool(
    "search_mt5_sdk",
    {
        query: z.string().describe("The natural language question about MetaTrader 5 API functions, parameters, or logic."),
    },
    async ({ query }) => {
        try {
            const { embedder, table } = await getResources();
            
            // Generate embedding for the user's query
            const output = await embedder(query, { pooling: 'mean', normalize: true });
            const queryVector = Array.from(output.data);

            // Perform the semantic search
            const results = await table.search(queryVector).limit(5).execute();

            if (results.length === 0) {
                return {
                    content: [{ type: "text", text: "I couldn't find any specific documentation matching that query." }]
                };
            }

            // Format the output for the AI agent
            const formattedResults = results.map(r => 
                `[FILE: ${r.fileName}]\n${r.text}\n---`
            ).join("\n\n");

            return {
                content: [{ type: "text", text: formattedResults }]
            };
        } catch (error) {
            return {
                content: [{ type: "text", text: `Search Error: ${error.message}` }],
                isError: true
            };
        }
    }
);

// --- NETLIFY HANDLER ---
export default async (req) => {
    try {
        // MCP usually communicates via POST
        if (req.method !== "POST") {
            return new Response("Method Not Allowed. Use POST for MCP requests.", { status: 405 });
        }

        const body = await req.json();
        
        // Convert the Fetch API request to Node.js req/res for the MCP Transport
        const { req: nodeReq, res: nodeRes } = toReqRes(req);
        
        const transport = new StreamableHTTPServerTransport();
        await server.connect(transport);
        
        // Process the MCP request
        await transport.handleRequest(nodeReq, nodeRes, body);
        
        // Return the response back to Netlify's Fetch-based environment
        return toFetchResponse(nodeRes);
    } catch (error) {
        console.error("Critical MCP Handler Error:", error);
        return new Response(JSON.stringify({ 
            error: "Internal Server Error", 
            details: error.message 
        }), { 
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};

// Netlify Edge-compatible path configuration
export const config = { path: "/mcp" };