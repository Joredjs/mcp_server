import { ITool } from "./interfaces.js";
import { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

const greetingCb: ToolCallback<any> = (args, extra) => {
	const { name } = args;
	return {
		content: [
			{
				type: "text",
				text: `Hello, ${name || "guest"}, welcome to this MCP server!`,
			},
		],
	};
};

const greetingTool: ITool = {
	name: "sayHello",
	description: "Provides a friendly greeting message to the user.",
	paramsSchema: { name: z.string() },
	cb: greetingCb,
};

export { greetingTool };
