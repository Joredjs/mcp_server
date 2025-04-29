import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import server from "./mcp/index.js";

async function main() {
	try {
		const transport = new StdioServerTransport();
		await server.connect(transport);
		console.info("Server connected");
	} catch (error) {
		console.error("Error connecting server:", error);
	}
}

main().catch((error) => {
	console.error("Error:", error);
	process.exit(1);
});
