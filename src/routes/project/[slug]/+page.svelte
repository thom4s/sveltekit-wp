
<script lang="ts">

    export let data: {
        projet: Promise<void>;
    }
    $: ({page} = data)
    $: console.log('projet: ', page)

</script>



<div class="container">
    {#if page}

        <h1>{page.title}</h1>
        <div>{@html page.content}</div>

        {#if page.informationsProjet.secteur}
            {#each page.informationsProjet.secteur.nodes as node}
                <p>{node.name}</p>
            {/each}
        {/if}
        
        {#if page.informationsProjet.savoirFaire}
            {#each page.informationsProjet.savoirFaire.nodes as node}
                <p>{node.name}</p>
            {/each}
        {/if}

    {:else}
        <p>No content</p>
    {/if}
</div>