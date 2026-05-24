globalThis.process ??= {}; globalThis.process.env ??= {};
async function getMod() {
						return import('./config_DT0Fsc8l.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

export { defaultMod as default };
