import { ITool } from "./interfaces.js";
import { addTool } from "./tool.addUp.js";
import { farewellTool } from "./tool.farewell.js";
import { greetingTool } from "./tool.greeting.js";

export default  [addTool, farewellTool, greetingTool] as ITool[];
