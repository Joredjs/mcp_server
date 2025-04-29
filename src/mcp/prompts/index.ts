import { IPrompt } from "./interfaces.js";
import { capitalCityPrompt } from "./propmpt.capitalCity.js";
import { generateEmailPrompt } from "./propmpt.generateEmail.js";
import { loremIpsumPrompt } from "./propmpt.loremipsum.js";
import { greetingPrompt } from "./propmpt.greeting.js";

export default [
	capitalCityPrompt,
	generateEmailPrompt,
	greetingPrompt,
	loremIpsumPrompt,
] as IPrompt[];
