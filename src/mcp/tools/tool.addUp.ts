import { ITool } from "./interfaces.js";
import { z } from "zod";

const addTool: ITool = {
	name: "addUp",
	description: "Calculates the sum of two numbers.",
	paramsSchema: { a: z.number(), b: z.number() },
	cb: async (args: any, extra) => {
		const { a, b } = args;
		return {
			content: [
				{
					type: "text",
					text: `The sum of ${a} and ${b} is ${a + b}.`,
				},
			],
		};
	},
};

export {addTool}
