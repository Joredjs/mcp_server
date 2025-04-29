import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export default new McpServer({
	name: "first-mcp-server",
	description: "A simple MCP server for testing purposes.",
	version: "0.0.1",
	capabilities: {
		resources: {},
		tools: {},
		prompts: {},
	},
});
