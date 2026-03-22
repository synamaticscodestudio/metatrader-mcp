import { pipeline } from "@xenova/transformers";
import * as lancedb from "@lancedb/lancedb";
import fs from "fs/promises";
import path from "path";

const DATA_DIR = "./data";
const DB_PATH = "./mt5-vectors";

async function buildIndex() {
    console.log("🚀 Starting Vector Index Build...");
    const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    const db = await lancedb.connect(DB_PATH);
    
    const files = (await fs.readdir(DATA_DIR)).filter(f => f.endsWith('.md'));
    const data = [];

    for (const file of files) {
        const content = await fs.readFile(path.join(DATA_DIR, file), 'utf-8');
        // Simple header-based split logic
        const chunks = content.split(/(?=\n#{1,3} )/g).filter(s => s.trim().length > 20);

        for (const chunk of chunks) {
            const output = await embedder(chunk, { pooling: 'mean', normalize: true });
            data.push({ 
                vector: Array.from(output.data), 
                text: chunk, 
                fileName: file 
            });
        }
    }

    await db.createTable('mt5_docs', data, { writeMode: 'overwrite' });
    console.log(`✅ Indexed ${data.length} chunks into LanceDB.`);
}

buildIndex().catch(err => {
    console.error(err);
    process.exit(1);
});