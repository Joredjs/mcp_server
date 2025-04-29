import prompts from "./prompts/index.js";
import resources from "./resources/index.js";
import server from "./server.js";
import tools from "./tools/index.js";

function registerTools() {
	for (const tool of tools) {
		try {
			server.tool(
				tool.name,
				tool.description,
				tool.paramsSchema,
				async (args: any, extra) => tool.cb(args, extra)
			);
		} catch (error) {
			console.error(`Error registering tool ${tool.name}:`, error);
		}
	}
}

function registerStaticResources() {
	for (const resource of resources.static) {
		try {
			server.resource(
				resource.name,
				resource.uri,
				resource.metadata,
				async (uri, args) => resource.cb(uri, args)
			);
		} catch (error) {
			console.error(
				`Error registering static resource ${resource.name}:`,
				error
			);
		}
	}
}

function registerDynamicResources() {
	for (const resource of resources.dynamic) {
		try {
			server.resource(
				resource.name,
				resource.template,
				resource.metadata,
				async (uri, args, extra) => resource.cb(uri, args, extra)
			);
		} catch (error) {
			console.error(
				`Error registering dynamic resource ${resource.name}:`,
				error
			);
		}
	}
}

function registerPrompts() {
	for (const prompt of Object.values(prompts)) {
		try {
			server.prompt(
				prompt.name,
				prompt.description,
				prompt.argsSchema,
				async (args: any, extra) => prompt.cb(args, extra)
			);
		} catch (error) {
			console.error(`Error registering prompt ${prompt.name}:`, error);
		}
	}
}

registerTools();
registerStaticResources();
registerDynamicResources();
registerPrompts();

export default server;
