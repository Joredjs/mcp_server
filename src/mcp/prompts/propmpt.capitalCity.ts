import { z } from "zod";
import { IPrompt } from "./interfaces.js";

export const capitalCityPrompt: IPrompt = {
	name: "capital city prompt",
	description: "Return the capital city of an specified country",
	argsSchema: {
		country: z.string(),
	},
	cb: async (args, extra) => {
		const { country } = args;
		return {
			description: "Response with the capital city of an specified country",
			messages: [
				{
					role: "user",
					content: {
						type: "text",
						text: `Which is the capital city of ${country}?`,
					},
				},
			],
		};
	},
};
