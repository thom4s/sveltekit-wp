<script>
    import Image from "$lib/parts/Elements/Image.svelte";

    import Arrow from '../Svgs/Arrow.svelte';
	import { fade } from 'svelte/transition';

    export let projet = {};
    export const type = '';    

</script>


<article class="block_projet" transition:fade={{ duration: 200 }}>
    <a class="fl-justify gap-m block_link" href="{projet.uri}">

        <div class="block_txt fl-column-space">
            {#if projet.informationsProjet?.tax_client }
                {#each projet.informationsProjet.tax_client?.nodes as node}
                    <div class="caption">{node.name}</div>
                {/each}
            {/if}

            <h3 class="block_title h3 no-margin fl-vcenter gap-s">
                {projet.title}
                <Arrow />
            </h3>

            <div class="bloc_metadata fl-justify">
                {#if projet.informationsProjet?.meta_date }
                    <!-- <span class="caption">{projet.informationsProjet.meta_date}</span> -->
                {/if}

                {#if projet.informationsProjet?.tax_secteur }
                    {#each projet.informationsProjet.tax_secteur.nodes as node}
                        <span class="caption">{node.name}</span>
                    {/each}
                {/if}

                {#if projet.informationsProjet?.tax_savoirfaire }
                    {#each projet.informationsProjet.tax_savoirfaire.nodes as node}
                        <span class="caption">{node.name}</span>
                    {/each}
                {/if}

                {#if projet.informationsProjet?.tax_materiau }
                    {#each projet.informationsProjet.tax_materiau.nodes as node}
                        <span class="caption">{node.name}</span>
                    {/each}
                {/if}
                
            </div>
        </div>
        {#if projet.featuredImage}
            <div class="block_media">   
                <Image node={projet.featuredImage.node} />
            </div>
        {/if}
        
    </a>
</article>


<style lang="scss">
    .block_projet {
        border-top: 1px solid black;
        padding-top: $space-s;

        &:hover {
            .block_title {
                font-style: italic;
            }
            :global(img) {
                transform: scale(1.06);
            }
        }
    }
    .block_link {
        @include max(tablet) {
            flex-direction: column;
            gap: $space-xs;
        }
    }
    .block_txt {
        @include min(tablet) {
            flex: 0 0 78%;
        }
    }
    .block_media {
        overflow: hidden;
        @include min(tablet) {
            flex: 0 0 20%;
        }
    }
    .block_title {
        @include max(tablet) {
            padding: $space-s 0;
        } 
    }
    .block_link {
        text-decoration: none;
        color: inherit;
    }
</style>