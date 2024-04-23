<script lang="ts">
    import SEO from '$lib/SEO/index.svelte';
    import { website } from '$lib/config/website.js'

    import BlockPost from "$lib/parts/BlockPost.svelte";

    export let data: {
        posts: Promise<void>;
    }
    $: ({posts} = data)
    $: console.log(posts)

    /*
     * SEO STUFFS
     */
    $: title = 'Actualités'
	$: metadescription = 'Toutes les actualités';

	$: breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
        {
			name: 'Actualités',
			slug: '/posts',
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

    <h1>Les News</h1>

    {#each posts.nodes as post }
        <BlockPost {post} type="posts"/>
    {/each}

</div>

