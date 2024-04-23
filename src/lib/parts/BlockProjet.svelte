<script>
	import { fade } from 'svelte/transition';

    export let projet = {};
    export let type = '';
    
</script>


<article class="block" transition:fade={{ duration: 200 }}>
    <h2>{projet.title}</h2>
    <div>{@html projet.excerpt}</div>

    <p>
        {#if projet.informationsProjet.secteur }
            {#each projet.informationsProjet.secteur.nodes as node}
                <span>{node.name}</span>
            {/each}
        {/if}
        <span> - </span>
        {#if projet.informationsProjet.savoirFaire }
            {#each projet.informationsProjet.savoirFaire.nodes as node}
                <span>{node.name}</span>
            {/each}
        {/if}
    </p>
    <a href="/projets/{projet.slug}">En savoir plus</a>
</article>