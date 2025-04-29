import { IResources } from "./interfaces.js";
import dynamicResources from "./dynamic/index.js";
import staticResources from "./static/index.js";

export default {
	static: staticResources,
	dynamic: dynamicResources,
} as IResources;
