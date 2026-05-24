globalThis.process ??= {}; globalThis.process.env ??= {};
async function getMod() {
						return import('./web_08yut_FV.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

export { defaultMod as default };
