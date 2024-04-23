import adapter from '@sveltejs/adapter-auto';
import preprocessor from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor({
		scss: {
			prependData: `
				@import './src/lib/scss/config/variables.scss';
				@import './src/lib/scss/config/mixins.scss';
				@import './src/lib/scss/config/responsive.scss';
			`
		}
	}),	
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			$assets: 'src/assets',
			$fetchs: 'src/lib/fetchs',
			$actions: 'src/lib/actions',
			$helpers: 'src/lib/helpers',
			$stores: 'src/lib/stores'
		}
	}
};

export default config;
