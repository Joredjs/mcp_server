import { IStaticResource } from "../interfaces.js";
import { ReadResourceCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import { readFileSync } from "node:fs";

const configCb: ReadResourceCallback = async (uri, extra) => {
	const fileContent = readFileSync("files/saleshandbook.pdf", "utf-8");

	return {
		contents: [
			{
				uri: uri.href,
				text: fileContent,
			},
		],
	};
};

const getPdfStaticResource: IStaticResource = {
	name: "server pdf file",
	uri: "server://pdf",
	metadata: {
		name: "get pdf static resource",
		description: "Obtain a pdf file",
		version: "0.0.1",
	},
	cb: configCb,
};

export { getPdfStaticResource };
