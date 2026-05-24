globalThis.process ??= {}; globalThis.process.env ??= {};
async function getMod() {
						return import('./plugins_874y_b61.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

export { defaultMod as default };
