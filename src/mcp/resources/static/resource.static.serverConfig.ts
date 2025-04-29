import { IStaticResource } from "../interfaces.js";
import { ReadResourceCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import { readFileSync } from 'node:fs';

const configCb: ReadResourceCallback = async (uri, extra) => {

	const fileContent = readFileSync('files/server_config.ini', "utf-8");

	return {
		contents: [
			{
				uri: uri.href,
				text: `This is the server configuration: \n${fileContent}`,
			},
		],
	};
};

const serverConfigStaticResource: IStaticResource = {
	name: "server config",
	uri: "server://config",
	metadata: {
		name: "config static resource",
		description: "Obtain the server configuration",
		version: "0.0.1",
	},
	cb: configCb,
};

export { serverConfigStaticResource as configStaticResource };
