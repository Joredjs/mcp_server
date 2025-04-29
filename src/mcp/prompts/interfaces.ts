import { ZodOptional, ZodType, ZodTypeDef } from "zod";
import { PromptCallback } from "@modelcontextprotocol/sdk/server/mcp.js";

export interface IPrompt {
	name: string;
	description: string;
	argsSchema: {
		[k: string]:
			| ZodType<string, ZodTypeDef, string>
			| ZodOptional<ZodType<string, ZodTypeDef, string>>;
	};
	// argsSchema:PromptArgsRawShape
	cb: PromptCallback<any>;
}
