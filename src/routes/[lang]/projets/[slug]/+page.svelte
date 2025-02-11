<script lang="ts">
    import Arrow from '$lib/parts/Svgs/Arrow.svelte';
    import NotFound from '$lib/parts/Navigations/NotFound.svelte';
    import Image from "$lib/parts/Elements/Image.svelte";
    import IconArrowDown from '$lib/parts/Svgs/IconArrowDown.svelte';
    import { onMount } from 'svelte';

    export let data: { projet: Promise<void>; }
    $: ({projet, prevPage, nextPage} = data)


    // MEDIAS FOR FULLSCREEN 
    import { fullscreen, fullScreenType } from '$stores/fullscreen.js';


    // PARRALAX
    let parallax = false;

    onMount(() => {

        const godown_icon = document.querySelector('.godown_icon');

        let didScroll;
        let lastScrollTop = 0;
        let delta = 20;

        const documentIsScrolling = function () {
            didScroll = true;

            // Handle menu
            setInterval(function() {
                if (didScroll) {
                    handleScrollForMenu();
                    didScroll = false;
                }
            }, 250);

        }

        const handleScrollForMenu = function () {
            var st = window.scrollY;

            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            
            if( st < 50 ) {
                //console.log('documentIsScrolling BACKTOTHETOP');
                godown_icon.classList.remove('out');
            }
            else {
                //console.log('documentIsScrolling DOWN');
                godown_icon.classList.add('out');
            } 

            lastScrollTop = st;
        }

        document.addEventListener("scroll", documentIsScrolling, false);

    });


</script>


<div class="template template-projet mb-xxlarge" data-template="projet">

    <div class="">
        {#if projet}

            <article class="grid" data-id="{projet.id}" data-dbid={projet.databaseId}>

                <div class="s_12column m_6column project_texts">

                    <div class="texts_inner">

                        <div class="sticky">

                            <div class="project_action">
                                <a href="/fr/projets" class="link">Retour à la liste des projets</a>
                            </div>

                            <div class="project_title">
                                <h1 class="h2 mb-medium">{projet.title}</h1>
                            </div>

                            <div class="m_hide projet_media_item" data-design="full" data-ratio="verticale">

                                <Image 
                                    node={projet.featuredImage.node} 
                                    {parallax} 
                                    includeThis={true}
                                    on:imageClicked={ () => {
                                        $fullscreen = true;
                                        $fullScreenType = 'image';
                                    }}
                                />

                            </div>

                            <div class="project_metadata">

                                <p>
                                    <span>Date</span>
                                    <span class="caption">{@html projet.informationsProjet.meta_date}</span>
                                </p>

                                {#if projet.informationsProjet.tax_secteur}
                                    {#each projet.informationsProjet.tax_secteur.nodes as node}
                                        <p>
                                            <span>Secteur</span>
                                            <span class="caption">{node.name}</span>
                                        </p>
                                    {/each}
                                {/if}
                                
                                {#if projet.informationsProjet.tax_savoirfaire}
                                    {#each projet.informationsProjet.tax_savoirfaire.nodes as node}
                                        <p>
                                            <span>Savoir Faire</span>
                                            <span class="caption">{node.name}</span>
                                        </p>
                                    {/each}
                                {/if}

                                {#if projet.informationsProjet.tax_materiau}
                                    {#each projet.informationsProjet.tax_materiau.nodes as node}
                                        <p>
                                            <span>Materiaux</span>
                                            <span class="caption">{node.name}</span>
                                        </p>
                                    {/each}
                                {/if}
                            </div>

                            <div class="project_content">
                                {@html projet.content}
                            </div>

                            <div class="s_hide m_show project_navigation fl-justify">
                                {#if prevPage }
                                    <a href="{prevPage.node.uri}" class="link fl-vcenter gap-xs"><Arrow left={true} /> {prevPage.node.title}</a>
                                {/if}
                                {#if nextPage }
                                    <a href="{nextPage.node.uri}" class="link fl-vcenter gap-xs">{nextPage.node.title} <Arrow /> </a>
                                {/if}
                            </div>
                        </div>

                    </div>
                </div>


                <div class="s_12column m_6column project_medias">

                        <div class="s_hide m_show projet_media_item" data-design="full" data-ratio="verticale">

                            <div class="media_outer">
                                <Image 
                                    node={projet.featuredImage?.node} 
                                    {parallax} 
                                    fullscreened={true}
                                    hoverTarget={true}
                                    on:imageClicked={ () => {
                                        $fullscreen = true;
                                        $fullScreenType = 'slide';
                                    }}
                                />

                                <div class="godown_icon">
                                    <IconArrowDown />
                                </div>

                            </div>
                        
                        </div>

                        {#if projet.informationsProjet.visuels }
                            {#each projet.informationsProjet.visuels as v}
                                
                                <div class="projet_media_item" data-design="{v.design}" data-ratio="{v.ratio}">

                                    {#each v.visuel.nodes as node}

                                        <div class="media_outer">
                                            <Image 
                                                node={node}
                                                {parallax} 
                                                fullscreened={true}
                                                includeThis={true}
                                                hoverTarget={true}
                                                on:imageClicked={ () => {
                                                    $fullscreen = true;
                                                    $fullScreenType = 'slide';
                                                }}
                                            />
                                        </div> 

                                    {/each}

                                </div>

                            {/each}
                        {/if}

                </div>

            </article>

            <div class="container m_hide project_navigation fl-justify">
                {#if prevPage }
                    <a href="{prevPage.node.uri}" class="link fl-vcenter gap-xs"><Arrow left={true} /> {prevPage.node.title}</a>
                {/if}
                {#if nextPage }
                    <a href="{nextPage.node.uri}" class="link fl-vcenter gap-xs">{nextPage.node.title} <Arrow /> </a>
                {/if}
            </div>

        {:else}
            <NotFound />

        {/if}
        
    </div>

</div>


<style lang="scss">

    .template {
        margin-bottom: $space-xxl * 2;
    }
    .grid {
        gap: 0;
    }
    .project_texts {

        padding-top: $space-xl;
        position: relative;
        display: flex;
        justify-content: flex-end;

        @include min(desktop) {
            padding-right: $space-xl;
            padding-left: calc( calc( 100vw - $max-width ) / 2 );
        }
        @include max(desktop) {
            padding-right: $space-xl;
            padding-left: 5vw;
        }
        @include max(bigtablet) {
            padding-right: $gutter;
            padding-left: $gutter;
        }        
        @include max(tablet) {
            padding-right: 0;
            padding-left: 0;
        }

    }
    .texts_inner {
        width: 100%;
        padding-left: calc( 100% - $max-width ) / 2;
    }
    .sticky {
        top: 100px;
    }

    .project_action {
        @include min(tablet) {
            margin-bottom: $space-xxl;

        }
        @include max(tablet) {
            padding-right: $space-m;
            padding-left: $space-m;
            margin-bottom: $space-l;
        }
    }
    .project_title {
        @include max(tablet) {
            padding-right: $space-m;
            padding-left: $space-m;
        }
    }

    .project_metadata {
        margin-bottom: $space-xxl;
        @include max(tablet) {
            padding-right: $space-m;
            padding-left: $space-m;
        }
        p {
            border-top: 1px solid;
            padding: $space-s 0;
            margin: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    .project_content {
        margin-bottom: $space-xxl;
        @include max(tablet) {
            padding-right: $space-m;
            padding-left: $space-m;
        }
    }

    .projet_media_item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: $space-xl;
        &.s_hide {
            @include max(tablet) {
                display: none;
            } 
        }
        &.m_hide {
            @include min(tablet) {
                display: none;
            } 
        }
    }

    .media_outer {
        position: relative;
    }

    .godown_icon {
        position: fixed;
        bottom: 65px;
        left: 50%;
        right: 0;
        text-align: center;
        transition: opacity .3s;
        animation-name: movingArrow;
        animation-duration: .5s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;

        @include max(bigtablet) {
            display: none;
        }
    }

    :global(.godown_icon.out) {
        opacity: 0;
    }

    @keyframes movingArrow {
        from {
            bottom: 65px;
        }
        to {
            bottom: 70px;
        }
    }

    :global(.godown_icon.out) {
        opacity: 0;
    }
    

    [data-design="couple"] {
        gap: $space-l;

        @include min(tablet) {
            height: 75vh;
        }        
        @include max(tablet) {
            height: 40vh;
        }
        .media_outer:first-child {
            align-self: flex-start;
            flex: 0 0 calc(50% - 20px);
        }
        .media_outer:last-child {
            align-self: flex-end;
            flex: 0 0 calc(50% - 20px);
        }
    }
    [data-design="left"] {
        padding-right: $space-xl;    
    }
    [data-design="right"] {
        padding-left: $space-xl;    
    }

</style>