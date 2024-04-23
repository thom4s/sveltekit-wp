<script lang="ts">
    import SEO from '$lib/SEO/index.svelte';
    import { website } from '$lib/config/website.js'

    export let data: {
        page: Promise<void>;
    }
    $: ({page} = data)

    /*
     * SEO STUFFS
     */
    $: title = page.title;
	$: metadescription = page.excerpt;

	$: breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
        {
			name: page.title,
			slug: page.slug,
		},
	];

	$: seoProps = {
		breadcrumbs,
		title,
		metadescription,
		slug: '',
		datePublished: '2021-07-07T14:19:33.000+0100',
		lastUpdated: '2021-07-07T14:19:33.000+0100',
	};
    // END SEO STUFFS


</script>

<SEO {...seoProps} />


<div class="container">
    {#if page}
        <h1>{page.title}</h1>
        <div>{@html page.content}</div>
    {:else}
        <p>No content</p>
    {/if}
</div>