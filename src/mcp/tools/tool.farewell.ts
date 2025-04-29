import { ITool } from "./interfaces.js";
import { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

const farewellCb: ToolCallback<any> = (args, extra) => {
	const { name } = args;
	return {
		content: [
			{
				type: "text",
				text: `Thank you for using this MCP server, ${
					name || "guest"
				}! We hope to see you again soon.`,
			},
		],
	};
};

const farewellTool:ITool = {
	name: "sayGoodbye",
	description: "Provides a friendly farewell message to the user.",
	paramsSchema: { name: z.string() },
	cb: farewellCb,
}

export { farewellTool };
