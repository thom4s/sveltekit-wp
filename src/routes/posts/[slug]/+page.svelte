<script lang="ts">
    import SEO from '$lib/SEO/index.svelte';
    import { website } from '$lib/config/website.js'


    export let data: {
        post: Promise<void>;
    }
    $: ({post} = data)
    $: console.log('post: ', post)

    /*
     * SEO STUFFS
     */
    $: title = post.title
	$: metadescription = post.excerpt;

	$: breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
        {
			name: 'Actualités',
			slug: '/posts',
		},
        {
            name: post.title,
            slug: post.slug
        }
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

    <h1>{post.title}</h1>
    <div>Auteur : {@html post.author.node.name}</div>

    {#if post.featuredImage}
        <img src="{post.featuredImage.node.sourceUrl}" srcset={post.featuredImage.node.srcSet} sizes="{post.featuredImage.node.sizes}" alt="{post.featuredImage.node.altText}" />
    {/if}

    <div>{@html post.content}</div>

</div>
