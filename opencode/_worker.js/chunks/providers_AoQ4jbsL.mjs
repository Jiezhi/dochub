globalThis.process ??= {}; globalThis.process.env ??= {};
async function getMod() {
						return import('./providers__Ai8-v8i.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

export { defaultMod as default };
