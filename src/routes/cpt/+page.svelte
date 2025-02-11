<script lang="ts">
    import { page } from "$app/stores";
    import BlockProject from "$lib/parts/Blocks/BlockProject.svelte";
	import { fade } from 'svelte/transition';
    
    export let data: {
        page: Promise<void>;
        cpt: Promise<void>;
    }
    $: ({cpt, taxonomie} = data)
    
    let filters = [];

    const filter = (e) => {
        console.log('get that filter', e)
        filters = [e.target.innerText]
    }

    $: visibleCpt = filters.length > 0 ?
        cpt.nodes.filter( cpt => {
			return filters.includes(cpt.informationsProjet.savoirFaire?.nodes[0].name) || filters.includes(cpt.informationsProjet.secteur?.nodes[0].name)
		}) : cpt.nodes;

</script>

<div class="container">

    <h1>{page.title}</h1>

    <div class="grid">

        <div class="s_4column">
            <div class="filters">

                <p class="filter">
                    <strong>taxonomie</strong>
                    {#each taxonomie.nodes as t }
                        <span on:click={ (e) => filter(e) } class:active={filters.includes(t.name)}>{t.name}</span>
                    {/each}
                </p>



            </div>
        </div>

        <div class="s_8column">
            {#each visibleCpt as cpt }
                <BlockProject {cpt}/>
            {:else}
                <p in:fade={{ delay: 200, duration: 200 }}>Aucun résultat</p>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    .filter {
        display: flex;
        flex-direction: column;
        gap: 10px;

        span {
            cursor: pointer;
        }
        .active {
            font-weight: bold;
            position: relative;
            left: 10px;
        }
    }
</style>