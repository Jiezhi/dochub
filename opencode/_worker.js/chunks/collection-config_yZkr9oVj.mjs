globalThis.process ??= {}; globalThis.process.env ??= {};
let userCollections;
			try {
				userCollections = (await import('./content.config_BjO0AIuE.mjs')).collections;
			} catch {}
			const collections = userCollections;

export { collections };
