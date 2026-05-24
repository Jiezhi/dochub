globalThis.process ??= {}; globalThis.process.env ??= {};
async function getMod() {
						return import('./custom-tools_C1gPWJeg.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

export { defaultMod as default };
