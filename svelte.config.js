const sveltePreprocess = require("svelte-preprocess");

const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
	preprocess: sveltePreprocess({
		scss: {
			includePaths: ["src"]
		},
		postcss: {
			plugins: [require("autoprefixer")({cascade: false}), postcssPresetEnv({ stage: 3 })]
		}
	})
};
