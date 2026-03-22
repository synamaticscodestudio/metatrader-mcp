import { pipeline } from "@xenova/transformers";
import * as lancedb from "@lancedb/lancedb";
import fs from "fs/promises";
import path from "path";

const DATA_DIR = "./data";
const DB_PATH = "./mt5-vectors";

async function buildIndex() {
    console.log("🚀 Starting Large-Scale Vector Indexing...");
    
    // Use a small, fast model
    const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    
    // Ensure clean state
    if (await fs.access(DB_PATH).then(() => true).catch(() => false)) {
        await fs.rm(DB_PATH, { recursive: true });
    }

    const db = await lancedb.connect(DB_PATH);
    const files = (await fs.readdir(DATA_DIR)).filter(f => f.endsWith('.md'));
    const data = [];

    // Process in batches to avoid memory overflow
    const BATCH_SIZE = 100;
    for (let i = 0; i < files.length; i += BATCH_SIZE) {
        const batch = files.slice(i, i + BATCH_SIZE);
        console.log(`Processing batch ${i / BATCH_SIZE + 1} of ${Math.ceil(files.length / BATCH_SIZE)}...`);

        await Promise.all(batch.map(async (file) => {
            const content = await fs.readFile(path.join(DATA_DIR, file), 'utf-8');
            // Split by headers or large chunks
            const chunks = content.split(/(?=\n#{1,2} )/g).filter(c => c.length > 20);
            
            for (const chunk of chunks) {
                const output = await embedder(chunk, { pooling: 'mean', normalize: true });
                data.push({
                    vector: Array.from(output.data),
                    text: chunk.substring(0, 5000), // Keep text manageable
                    fileName: file
                });
            }
        }));
    }

    await db.createTable('mt5_docs', data);
    console.log(`✅ Success! Indexed ${data.length} chunks from ${files.length} files.`);
}

buildIndex();