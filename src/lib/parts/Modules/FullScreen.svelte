<script lang="ts">
    import { onMount } from 'svelte';
    import { register } from 'swiper/element/bundle';
    register();

    import { fade } from 'svelte/transition';
	import IconClose from '$lib/parts/Svgs/IconClose.svelte';

    import { closeFullscreen, fullScreenContent, fullScreenType, resetFullscreen } from '$stores/fullscreen.js';
    export let content = $fullScreenContent;
    export let type = $fullScreenType;
    export let fullscreen = '';

    // CLOSE WHEN 'ESCAPE' PRESSED
    onMount(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeFullscreen()
        });
    });

    $: console.log('type', type)
    $: console.log('content', content)
    
</script>


    <div class="fullscreen" transition:fade={{ duration: 100 }} data-module="fullscreen">

        <div class="fl-center container">
            <button class="btn_clean" on:click={closeFullscreen}>
                <IconClose />
            </button>  

            {#if type === 'image'}
                <div class="image_container">
                    <div class="body txt-center">{#if content.caption }{@html content.caption}{/if}</div>
                    <img src="{content.sourceUrl}" alt="{content.altText}">
                </div>


            {:else if type === 'video'}
                {@html content}

            {:else if type === 'slide'}
                <swiper-container 
                    spaceBetween={30}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    init={true}
                    navigation={true}
                    pagination={true}
                    loop={false}

                >
                    {#if content.nodes}
                        {#each content.nodes as img }
                            <swiper-slide class="swiper-slide">
                                <div class="body">{@html img.caption}</div>
                                <img src="{img.sourceUrl}" alt="{img.altText}">
                            </swiper-slide>
                        {/each}
                    {:else}
                        {#each content as src }
                            <swiper-slide class="swiper-slide">
                                <div class="body">{#if src.caption }{@html src.caption}{/if}</div>
                                <img src="{src.sourceUrl}" alt="{src.altText}">
                            </swiper-slide>
                        {/each}
                    {/if}
                </swiper-container >
                
            {/if}
        </div>

    </div>


<style lang="scss"> 
    .fullscreen {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba($white, .99);
        z-index: 10;
    }

    .container {
        height: 100%;
    } 

    .image_container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    button {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 99;
        color: white;
    }
    .btn_clean {
        width: 30px;
        height: 30px;
    }

    swiper-container {
        width: 100%;
        display: flex;
        align-items: center;
    }
    .swiper-slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        gap: 60px;
        text-align: center;
        max-height: 80vh;
        margin-top: - 10vh;

        .body {
            opacity: 0;
            transition: opacity .3s;
            transition-delay: 200ms;
            transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        }
    }
    :global(.swiper-slide-active .body) {
        opacity: 1 !important;
    }

    img {
        object-fit: contain;
        aspect-ratio: 5/4;
        max-height: 75vh;
    }



    swiper-container {
        --swiper-theme-color: #ababab;
        --swiper-navigation-size: 22px;
        --swiper-navigation-color: $gray;
        --swiper-navigation-top-offset: auto;
        --swiper-navigation-sides-offset: 13vw;
        --swiper-pagination-color: black;
        --swiper-pagination-bullet-border-radius: 6px;
        --swiper-pagination-bullet-horizontal-gap: 4px;
        --swiper-pagination-bullet-vertical-gap: 4px;
        --swiper-pagination-bullet-size: 10px;
        --swiper-pagination-bullet-width: 10px;
        --swiper-pagination-bullet-height: 10px;
        --swiper-pagination-bullet-opacity: 1;
        --swiper-pagination-bullet-inactive-color: #bdbdbd;
        --swiper-pagination-bullet-inactive-opacity: 1;
        --swiper-pagination-bottom: 0rem;
        --swiper-preloader-color: var(--swiper-theme-color);
    }

    swiper-container {
        overflow: visible;
    }
    swiper-container::part(container) {
        overflow: visible;
    }

    swiper-container::part(bullet) {
        /* styles */
    }

    swiper-container::part(bullet-active) {
        /* styles */
    }

    swiper-container::part(pagination) {
        position: fixed;
        bottom: 5vh;
    }

    swiper-container::part(button-prev),
    swiper-container::part(button-next) {
        z-index: 999;
        bottom: 5vh;
        position: fixed;
    }

</style>