
<script lang="ts">
    import SEO from '$lib/SEO/index.svelte';
    import { website } from '$lib/config/website.js'

    export let data: {
        homepage: Promise<void>;
    }
    $: ({homepage} = data)
    $: console.log('homepage: ', homepage)

    /*
     * SEO STUFFS
     */
	let title = 'Accueil';
	let metadescription = 'Get in touch with Rodneylab, the developer of Climate SvelteKit Starter.';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
	];
	const seoProps = {
		breadcrumbs,
		title,
		metadescription,
		slug: '',
		datePublished: '2021-07-07T14:19:33.000+0100',
		lastUpdated: '2021-07-07T14:19:33.000+0100',
	};

</script>

<SEO {...seoProps} />

<div class="container">
    <h1>{homepage.title}</h1>
    <div>{@html homepage.content}</div>
</div>

