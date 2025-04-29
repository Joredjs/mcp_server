import { z } from "zod";
import { IPrompt } from "./interfaces.js";

export const generateEmailPrompt: IPrompt = {
	name: "generate email prompt",
	description: "Generate an email boyd with an specified tone and topic",
	argsSchema: {
		tone: z.string(),
		topic: z.string(),
	},
	cb: async (args, extra) => {
		const { tone, topic } = args;
		return {
			description: "Generate an email body with an specified tone for an specified topic",
			messages: [
				{
					role: "user",
					content: {
						type: "text",
						text: `Generate an email body with ${tone} tone`,
					},
				},
				{
					role: "assistant",
					content: {
						type: "text",
						text: `I'll help you with that! Do you have an specific topic to use in the email body?`,
					},
				},
				{
					role: "user",
					content: {
						type: "text",
						text: `Yes, the topic for the email body must be ${topic}`,
					},
				}
			],
		};
	},
};
