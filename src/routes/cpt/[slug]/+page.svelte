
<script lang="ts">
    import SEO from '$lib/SEO/index.svelte';

    export let data: {
        projet: Promise<void>;
    }
    $: ({projet} = data)
    $: console.log('projet: ', projet)


    /*
     * SEO STUFFS
     */
    $: title = projet.title;
	$: metadescription = projet.excerpt;

	const breadcrumbs = [
		{
			name: 'Home',
			slug: '',
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
    {#if projet}

        <h1>{projet.title}</h1>
        <div>{@html projet.content}</div>

        {#if projet.informationsProjet.secteur}
            {#each projet.informationsProjet.secteur.nodes as node}
                <p>{node.name}</p>
            {/each}
        {/if}
        
        {#if projet.informationsProjet.savoirFaire}
            {#each projet.informationsProjet.savoirFaire.nodes as node}
                <p>{node.name}</p>
            {/each}
        {/if}

    {:else}
        <p>No content</p>
    {/if}
</div>