import { ReadResourceCallback, ReadResourceTemplateCallback, ResourceMetadata, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";

export interface IDynamicResource {
	name: string;
	template: ResourceTemplate;
	metadata: ResourceMetadata;
	cb: ReadResourceTemplateCallback;
}

export interface IStaticResource {
	name: string;
	uri: string;
	metadata: ResourceMetadata;
	cb: ReadResourceCallback;
}

export interface IResources {
	static: IStaticResource[];
	dynamic: IDynamicResource[];
}