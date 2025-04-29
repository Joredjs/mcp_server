import { IPrompt } from "./interfaces.js";
import { z } from "zod";

export const greetingPrompt: IPrompt = {
	name: "greeting prompt",
	description: "This prompt will provide a greeting message",
	argsSchema: {
		customerId:z.string(),
	},
	cb: async (args, extra) => {
		const { customerName: customerId } = args;
		return {
			description: "Response with a friendly welcome message for an specified customer",
			messages: [
				{
					role: "user",
					content: {
						type: "text",
						text: `Use the 'profile data dynamic resource' for obtain the customer information for ${customerId}`,
					},
				},
			],
		};
	},
};
