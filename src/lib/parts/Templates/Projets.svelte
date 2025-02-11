<script lang="ts">
    import BlockProject from "$lib/parts/Blocks/BlockProject.svelte";
	import PushContact from "$lib/parts/Modules/PushContact.svelte";
    import IconFilters from '$lib/parts/Svgs/IconFilters.svelte';
    import IconArrowRight from '$lib/parts/Svgs/IconArrowRight.svelte';

    import { afterUpdate, beforeUpdate } from "svelte";
    import { Masonry } from "svelte-bricks";
    import { fly } from "svelte/transition";

    let [minColWidth, maxColWidth, gap] = [340, 450, 30]
    let width, height

    export let page = {};
    export let projets = [];
    export let savoirfaires = [];
    export let secteurs = [];

    let allItems, grid, loading = true;

    
    // MENU MOBILE
    let menuIsVisible = false;

    // FILTERS
    let filters = [];
    let filtersSecteur = [], filtersSavoirfaire = [], filterSecteur = true, filterSavoirfaire = true, tax = '';

    const filter = (e, tax) => {
        loading = true;

        setTimeout( () => {
            if( tax === 'secteur' ) {
                filtersSecteur = [e.target.getAttribute('data-term')];
            }
            else if ( tax === 'savoirfaire') {
                filtersSavoirfaire = [e.target.getAttribute('data-term')];
            }
        }, 300)

        setTimeout( () => {
            loading = false;
        }, 600)

        menuIsVisible = false;
    }
    const reset = (e, tax) => {
        loading = true;

        setTimeout( () => {
            if( tax === 'secteur' ) {
                filtersSecteur = [];
            }
            else if ( tax === 'savoirfaire') {
                filtersSavoirfaire = [];
            }
        }, 300)

        setTimeout( () => {
            loading = false;
        }, 600)

        menuIsVisible = false
    }

    $: visibleProjets = filtersSavoirfaire.length !== 0 || filtersSecteur.length !== 0 ?
        projets.nodes.filter( project => {

            if(filtersSavoirfaire.length !== 0 && filtersSecteur.length !== 0 ) {
                return filtersSavoirfaire.includes(project.informationsProjet.tax_savoirfaire?.nodes[0].name) && filtersSecteur.includes(project.informationsProjet.tax_secteur?.nodes[0].name)
            }
            else if(filtersSavoirfaire.length !== 0 && filtersSecteur.length === 0 ) {
                return filtersSavoirfaire.includes(project.informationsProjet.tax_savoirfaire?.nodes[0].name)
            }
            else if(filtersSecteur.length !== 0 && filtersSavoirfaire.length === 0 ) {
                return filtersSecteur.includes(project.informationsProjet.tax_secteur?.nodes[0].name)
            }

		}) : projets.nodes;

0
    // MASONRY 
    afterUpdate ( () => {
        setTimeout( () => {
            loading = false;
        }, 600)
    }) 


</script>


    <h1 class="visualy-hidden">{page.title}</h1>
    <!-- <div>{@html page.content}</div> -->

    <div class="grid container filtersContainer" class:menuIsVisible>

        <div class="btn_outer s_12column">
            <button class="btn_clean fl-vcenter gap-s" on:click={ () => menuIsVisible = true }>
                <span class="icon"><IconFilters /></span>
                <span class="caption">Afficher les filtres</span>
            </button>
        </div>

        <div class="menuOverlay s_12column" class:menuIsVisible>

            <div class="btn_outer">
                <button class="btn_clean fl-vcenter gap-s" on:click={ () => menuIsVisible = false }>
                    <span class="icon"><IconFilters /></span>
                    <span class="caption">Masquer les filtres</span>
                </button>
            </div>

            <div class="filters sticky">

                <div bind:this={filterSecteur} class="filterGroup mb-small" class:open={filterSecteur}>
                    <span 
                        class="caption filterLabel" 
                        on:click={ () => {
                            filterSecteur = !filterSecteur
                        }}
                    >
                        Filtrer par secteur <IconArrowRight />
                    </span>

                    {#if filterSecteur }
                        <div transition:fly={{ duration: 200 }}>
                            <button on:click={ e => reset(e, 'secteur') } data-term="" class="caption filterItem" class:active={ filtersSecteur.length === 0}>Tous les secteurs</button>
                            {#each secteurs.nodes as t }
                                <button on:click={ (e) => { loading = true; filter(e, 'secteur'); } } data-term="{t.name}" class="caption filterItem" class:active={filtersSecteur.includes(t.name)}>{t.name}</button>
                            {/each}
                        </div>
                    {/if}
                </div>

                <div bind:this={filterSavoirfaire} class="filterGroup" class:open={filterSavoirfaire}>
                    <span 
                        class="caption filterLabel"
                        on:click={ () => {
                            filterSavoirfaire = !filterSavoirfaire
                        }}
                    >
                        Filtrer par savoir-faire 
                        <IconArrowRight />
                    </span>

                    {#if filterSavoirfaire }
                    <div transition:fly={{ duration: 200 }}>
                            <button on:click={ e => reset(e, 'savoirfaire' ) } data-term="" class="caption filterItem" class:active={ filtersSavoirfaire.length === 0}>Tous les savoir-faire</button>
                            {#each savoirfaires.nodes as t }
                                <button on:click={ (e) => { loading = true; filter(e, 'savoirfaire'); } } data-term="{t.name}" class="caption filterItem" class:active={filtersSavoirfaire.includes(t.name)}>{t.name}</button>
                            {/each}
                        </div>
                    {/if}
                </div>

            </div>
        </div>

    </div>

    <div class="grid container">

        <div class="s_12column ">
            <div class:loading={loading}>
                <Masonry
                    items={visibleProjets}
                    {minColWidth}
                    {maxColWidth}
                    {gap}
                    let:item={project}
                    bind:masonryWidth={width}
                    bind:masonryHeight={height}
                    >
                        <BlockProject {project}/>
                </Masonry>
            </div>
        </div>
    </div>

    <PushContact />




<style lang="scss">

    :global(div.masonry) {
        justify-content: flex-start;
    }
    :global(div.masonry div.col) {
        row-gap: $space-xl !important;
    }

    .container {
        @include min(tablet) {
            margin-top: $space-l + 5;
        }
        @include max(tablet) {
            margin-top: $space-m;
        }
        
    }

    .masonry {
        grid-auto-rows: 20px;
        grid-row-gap: 0;
        transition: opacity .1s ease-in-out;
        opacity: 1;

        &.loading {
            opacity: 0.2;
        }
    }
    
    .sticky {
        position: sticky;
        top: $space-xxl * 2;
    }


    // PROJECT FILTERS

    .filtersContainer {
        position: relative;
        z-index: 1;
        margin-top: $space-xl;
        
        &.menuIsVisible {
            z-index: 10;
        }

        @include max(bigtablet) {
            border-bottom: 1px solid black;
            column-gap: 0;
        }
    }
    .menuOverlay {

        @include max(bigtablet) {
            right: auto;
            left: 0;
            transform: translateX(-110vw);
            padding: $space-m;

            &.menuIsVisible {
                transform: translateX(0);
            }
        }
    }
    .filterLabel {
        display: flex;
        gap: 10px;

        @include min(bigtablet) {
            display: none;
        }
    }
    :global(.filterLabel svg) {
        width: 10px;
        height: 10px;
    }
    :global(.filterLabel span) {
        transform: rotate(-90deg);
    }
    :global(.open .filterLabel span) {
        transform: rotate(90deg);
    }
    .filterItem {
        font-family: inherit;
        background: none;
        border: 1px solid $gray;
        padding: 7px 15px 7px 15px;
        border-radius: 20px;
        font-weight: 300;
        cursor: pointer;
        transition: border .3s;

        &:hover {
            border-color: $black;
        }
        &.active {
            background-color: black;
            color: $beige;
            font-weight: 450;
        }
    }

    .filterGroup {
        display: flex;
        justify-content: center;
        gap: 15px;

        @include max(bigtablet) {
            flex-direction: column;
            align-items: flex-start;
            margin-top: $gutter;
        }

        & > div {
            display: flex;
            justify-content: center;
            gap: 15px; 
            @include max(bigtablet) {
                flex-direction: column;
                align-items: flex-start;
            }
        }


        span {
            cursor: pointer;
        }
    }

    .btn_outer {
        @include max(bigtablet) {
            width: 100%;
            margin-bottom: $space-m;
            & > * {
                flex: 0 0 auto;
            }
        }
        @include min(bigtablet) {
            display: none;
        }

    }
    .icon {
        flex: 0 0 32px;
        width: 32px;
        height: 32px;
    }
</style>