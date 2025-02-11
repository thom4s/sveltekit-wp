<script>
    import Image from "$lib/parts/Elements/Image.svelte";
    import Arrow from '../Svgs/Arrow.svelte';
	import { fade } from 'svelte/transition';

    export let project = {};
    export const type = '';    
</script>


<article class="block bloc_projet" transition:fade={{ duration: 200 }}>
    <a class="fl-column-space gap-xs" href="{project.uri}">

        <div class="fl-column-space gap-s">
            {#if project.informationsProjet?.tax_client }
                {#each project.informationsProjet.tax_client?.nodes as node}
                    <div class="caption">{node.name}</div>
                {/each}
            {/if}

            <h3 class="h3 no-margin fl-vcenter gap-s">
                {project.title}
                <Arrow />
            </h3>

            <div class="bloc_metadata fl-justify">
                {#if project.informationsProjet?.meta_date }
                    <!-- <span class="caption">{project.informationsProjet.meta_date}</span> -->
                {/if}

                {#if project.informationsProjet?.tax_secteur }
                    {#each project.informationsProjet.tax_secteur.nodes as node}
                        <span class="caption">{node.name}</span>
                    {/each}
                {/if}

                {#if project.informationsProjet?.tax_savoirfaire }
                    {#each project.informationsProjet.tax_savoirfaire.nodes as node}
                        <span class="caption">{node.name}</span>
                    {/each}
                {/if}

                {#if project.informationsProjet?.tax_materiau }
                    {#each project.informationsProjet.tax_materiau.nodes as node}
                        <span class="caption">{node.name}</span>
                    {/each}
                {/if}
                
            </div>
        </div>

        {#if project.featuredImage}
            <div class="bloc_media">   

                <Image 
                    node={project.featuredImage.node}
                    ratio={ project.informationsProjet?.ratioFeaturedimg[0]}
                />

            </div>
        {/if}
        
    </a>
</article>


<style lang="scss">

    .bloc_projet:hover {
        .h3 {
            font-style: italic;
        }
        :global(img) {
            transform: scale(1.06);
        }
    }

    .bloc_media {
        overflow: hidden;
        img {
            //aspect-ratio: 4/5;
            width: 100%;
        }
    }
    :global(.swiper-slide.project.even) {
        img {
            aspect-ratio: 5/4;
        }
    }
    a {
        text-decoration: none;
        color: inherit;
    }
</style>