import { IPrompt } from "./interfaces.js";

export const loremIpsumPrompt: IPrompt = {
	name: "lorem ipsum prompt",
	description: "This prompt will return a lorem ipsum text",
	argsSchema: {},
	cb: async (args, extra) => {
		return {
			description: "Response with a Lorem ipsum text",
			messages: [
				{
					role: "user",
					content: {
						type: "text",
						text: `Generate a Lorem Ipsum text with 2 paragraphs.`,
					},
				},
			],
		};
	},
};
