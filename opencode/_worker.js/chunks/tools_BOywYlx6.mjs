globalThis.process ??= {}; globalThis.process.env ??= {};
async function getMod() {
						return import('./tools_B6b68PRa.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

export { defaultMod as default };
