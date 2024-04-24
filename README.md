# create-svelte

Everything you need to build a Svelte + Headless Wordpress, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

* node 18 minimum

1. Clone the repo
2. Install a WP instance somewhere
2. Duplicate .env.EXAMPLE and add yours params
3. ```npm install```
4. ```npm run dev -- --open```
5. 

## Developing

* Sass is ready to run
* Routes for posts and pages


## Headless WP

* Plugin recommended : WPGraphQL, WPGraphQL for ACF, Advanced Custom Fields PRO, Classic Editor

* Classic Editor : because the API may not work if you change the Wesite URL. Gutenberg is working throuh th API...

* Yoast SEO is OK, juste check the SEO component (very much inspired by https://github.com/rodneylab/sveltekit-seo. Thanks to him)

* Forms are bluit in Svelte. No need to use CF7 or anything. 


## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
