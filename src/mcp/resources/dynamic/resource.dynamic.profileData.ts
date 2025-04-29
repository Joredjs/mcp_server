import {
	ReadResourceTemplateCallback,
	ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { IDynamicResource } from "../interfaces.js";
import { readFileSync } from "node:fs";

const profileDataCb: ReadResourceTemplateCallback = async (
	uri,
	args,
	extra
) => {
	let returnText = "";
	const { userId: customerId } = args;
	try {
		const fileContent = readFileSync(`files/customers/${customerId}.json`, "utf-8");
		returnText = `This is the profile data for user ${customerId}: \n\n ${fileContent}`;
	} catch (error) {
		console.error(`Error reading file:`, error);
		returnText = `There is no profile data for user ${customerId}`;
	}

	return {
		contents: [
			{
				uri: uri.href,
				text: returnText,
			},
		],
	};
};

const profileDataDynamicResource: IDynamicResource = {
	name: "profileData",
	template: new ResourceTemplate("server://profile/{userId}", {
		list: undefined,
	}),
	metadata: {
		name: "profile data dynamic resource",
		description: "Obtain the profile data of a customer",
		version: "0.0.1",
	},
	cb: profileDataCb,
};

export { profileDataDynamicResource };
