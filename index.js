import express from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { z } from "zod";

const app = express();
const PORT = process.env.PORT || 10000;

/**
 * 1. Initialize the MCP Server
 */
const server = new McpServer({
    name: "metatrader-mcp-render",
    version: "1.0.0",
});

/**
 * 2. Register Your Tools
 */
server.tool(
    "echo",
    { message: z.string() },
    async ({ message }) => {
        return {
            content: [{ type: "text", text: `Echo: ${message}` }]
        };
    }
);

/**
 * 3. Define SSE Routes
 * We store transports in a Map to handle multiple sessions (if needed)
 */
const transports = new Map();

app.get("/sse", async (req, res) => {
    // SSEServerTransport handles the special headers for SSE automatically
    const transport = new SSEServerTransport("/messages", res);
    transports.set(transport.sessionId, transport);
    
    console.log(`[MCP] New session started: ${transport.sessionId}`);

    // Clean up when the connection closes
    res.on("close", () => {
        transports.delete(transport.sessionId);
        console.log(`[MCP] Session closed: ${transport.sessionId}`);
    });

    await server.connect(transport);
});

app.post("/messages", express.json(), async (req, res) => {
    const sessionId = req.query.sessionId;
    const transport = transports.get(sessionId);

    if (!transport) {
        return res.status(404).send("Session not found");
    }

    // Pass the message from the client to the MCP transport
    await transport.handlePostMessage(req, res, req.body);
});

/**
 * 4. Start the Express Server
 */
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Express MCP Server running on port ${PORT}`);
    console.log(`🔗 SSE endpoint: http://localhost:${PORT}/sse`);
});