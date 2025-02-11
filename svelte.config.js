import adapter from '@sveltejs/adapter-auto';
import preprocessor from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor({
		scss: {
			prependData: `
				@use './src/lib/assets/styles/global/colors.scss' as *;
				@use './src/lib/assets/styles/global/generic.scss' as *;
				@use './src/lib/assets/styles/global/mixins.scss' as *;
				@use './src/lib/assets/styles/global/typography.scss' as *;
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
