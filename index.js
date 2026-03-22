import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { pipeline } from "@xenova/transformers";
import * as lancedb from "@lancedb/lancedb";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";

// --- CONFIGURATION ---
const DATA_DIR = "./data";
const DB_PATH = "./mt5-vectors";

// 1. Initialize the Embedding Pipeline (Local Model)
// This model is small (~30MB) and runs fast on CPUs
const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

async function getEmbedding(text) {
    const output = await embedder(text, { pooling: 'mean', normalize: true });
    return Array.from(output.data);
}

// 2. Intelligent Chunking Logic
function splitByHeaders(content) {
    // Splits by Markdown headers (# or ## or ###)
    const sections = content.split(/(?=\n#{1,3} )/g);
    return sections.filter(s => s.trim().length > 50); 
}

// 3. Database & Indexing Setup
const db = await lancedb.connect(DB_PATH);
let table;

async function initDB() {
    try {
        const files = (await fs.readdir(DATA_DIR)).filter(f => f.endsWith('.md'));
        const data = [];

        process.stderr.write(`🔄 Indexing ${files.length} MetaTrader doc files...\n`);
        
        for (const file of files) {
            const content = await fs.readFile(path.join(DATA_DIR, file), 'utf-8');
            const chunks = splitByHeaders(content);

            for (const chunk of chunks) {
                const vector = await getEmbedding(chunk);
                data.push({ 
                    vector, 
                    text: chunk, 
                    fileName: file,
                    title: chunk.split('\n')[0].replace(/#/g, '').trim() || file
                });
            }
        }

        // Create or overwrite the table with our vectorized data
        table = await db.createTable('mt5_docs', data, { writeMode: 'overwrite' });
        process.stderr.write(`✅ Vector DB Ready with ${data.length} semantic chunks.\n`);
    } catch (error) {
        process.stderr.write(`❌ Indexing failed: ${error.message}\n`);
    }
}

// 4. Initialize the MCP Server
const server = new McpServer({
    name: "metatrader-mcp-pro",
    version: "2.0.0",
});

// 5. Register the Search Tool (Modern Syntax)
server.tool(
    "search_mt5_sdk",
    {
        query: z.string().describe("The natural language question about MetaTrader 5 API, functions, or logic."),
    },
    async ({ query }) => {
        try {
            const queryVector = await getEmbedding(query);
            
            // Perform vector similarity search
            const results = await table
                .search(queryVector)
                .limit(5)
                .execute();

            if (results.length === 0) {
                return {
                    content: [{ type: "text", text: "No relevant documentation found for that query." }]
                };
            }

            const formattedResults = results.map(r => 
                `[Source: ${r.fileName}]\nSection: ${r.title}\n${r.text}\n---`
            ).join("\n\n");

            return {
                content: [{ type: "text", text: formattedResults }]
            };
        } catch (error) {
            return {
                content: [{ type: "text", text: `Error performing search: ${error.message}` }],
                isError: true
            };
        }
    }
);

// 6. Start the Server using Stdio (Standard for Claude Desktop/Cursor)
async function main() {
    await initDB(); // Index files on startup
    const transport = new StdioServerTransport();
    await server.connect(transport);
}

main().catch((error) => {
    process.stderr.write(`Fatal error: ${error.message}\n`);
    process.exit(1);
});