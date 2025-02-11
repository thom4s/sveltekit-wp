<script>
    import { onMount, tick } from 'svelte';
    import { fullscreen, fullScreenContent, fullScreenType } from '$stores/fullscreen.js';

    import SocialLinks from '../Navigations/SocialLinks.svelte';
    import Image from "../Elements/Image.svelte";
    import Video from '../Elements/Video.svelte';

    import { fade } from 'svelte/transition';
    import { register } from 'swiper/element/bundle';
    register();

    export let module = false;
    export let post = {};
    export let type = '';

    let swiperContainer;
    let prevButton;
    let nextButton;

    onMount(async () => {
        register();

        await tick();

        if (swiperContainer) swiperContainer.initialize();
    });
</script>

<article class="block_post" class:module={module} transition:fade={{ duration: 200 }}>

    <div class="block_inner fl-justify gap-l">

        <div class="half media">
            <div class="bloc_media">

                {#if post.informationsNews?.video}

                    <Video 
                        videoId={post.informationsNews?.video}
                        plateforme={post.informationsNews?.plateforme}
                    />

                {:else if post.informationsNews?.galery }
                    <div class="slider-container">

                        <swiper-container
                            bind:this={swiperContainer}
                            space-between="0" 
                            slides-per-view="auto"
                            navigation={{
                                nextEl: nextButton,
                                prevEl: prevButton
                            }}
                            pagination={false}
                            loop="true"
                            init={false}
                        >
                            {#each post.informationsNews?.galery.nodes as node }
                                <swiper-slide class="swiper-slide">
                                    <Image 
                                        node={node} 
                                        hoverTarget={true}
                                        ratio="horizontale"
                                        on:imageClicked={ () => {
                                            $fullscreen = true;
                                            $fullScreenType = 'slide';
                                            $fullScreenContent = post.informationsNews?.galery;
                                        }}/>
                                </swiper-slide>
                            {/each}
                        </swiper-container >
                        <div bind:this={prevButton} class="swiper-button-prev-out fl-center">
                            <svg width="24" height="24" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 26.377L10 16.377L20 6.377" stroke="black" stroke-linecap="square"/>
                            </svg>                    
                        </div>
                        <div bind:this={nextButton} class="swiper-button-next-out fl-center">
                            <svg width="24" height="24" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6.62305L22 16.623L12 26.623" stroke="black" stroke-linecap="square"/>
                            </svg>    
                        </div>
                    </div>

                {:else}
 
                    <Image 
                        node={post.featuredImage?.node} 
                        hoverTarget={true}
                        ratio="horizontale"
                        on:imageClicked={ () => {
                            $fullscreen = true;
                            $fullScreenType = 'image';
                            $fullScreenContent = {
                                sourceUrl: post.featuredImage?.node.sourceUrl, 
                                caption: post.featuredImage?.node.caption,
                                altText: post.featuredImage?.node.altText
                            };
                        }}/>
                {/if}
            </div>
        </div>

        <div class="half texts">

            <div class="bloc_texts ">

                <div class="fl-justify fl-vtop text_upper">  
                    <div class="caption bloc_date">{post.informationsNews?.date}</div>
                    <div class="caption bloc_place">{@html post.informationsNews?.lieu}</div>
                </div>
                
                <div class="fl-column-start gap-s text_center">  
                    <h3 class="mb-small" class:h2={module}>{@html post.title}</h3>

                    {#if post.content }
                        <div class="body">{@html post.content}</div>
                    {/if}
                    
                    {#if module }
                        {#if post.informationsNews?.lien }
                            <a class="link" href="{post.informationsNews?.lien}">
                                {post.informationsNews?.labelDuLien}
                            </a>
                        {/if}
                    {/if}
                </div>


                <div class="text_lower">
                    {#if module }
                        <div class="fl-justify vbot gap-s">
                            <p class="caption txt-left">Retrouvez tous nos événements sur nos réseaux sociaux</p>
                            <SocialLinks />
                        </div>

                    {:else}
                        {#if post.informationsNews?.lien }
                            <a class="link" href="{post.informationsNews?.lien}">
                                {post.informationsNews?.labelDuLien}
                            </a>
                        {/if}
                    {/if}
                </div>
                
            </div>
        </div>

    </div>

</article>


<style lang="scss"> 

    .block_post {

        &:not(.module):nth-child(odd) .half.texts {
            @include min(tablet) {
                order: -1;
            }
        }
        .half.texts {
            @include max(tablet) {
                order: -1;
            }
        }
        &:nth-child(2n) {
            .grid {
                grid-auto-flow: dense;
                direction: rtl;
            }
        }
        .half.media {
            @include min(tablet) {
                width: 50%;
                flex: 1 1 50%;
            }
        }
        .half.texts {
            @include min(tablet) {
                width: 50%;
                flex: 1 1 50%;
            }
        }

        .bloc_texts {
            direction: ltr;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            gap: 30px;
        }
        .bloc_media {
            width: 100%;
            height: 100%;
            img {
                width: inherit;
                height: inherit;
                aspect-ratio: 5/4;
            }

            .slider-container {
                position: relative;
                z-index: 0;
                &:hover :where(.swiper-button-prev-out, .swiper-button-next-out) {
                    opacity: 1;
                }
            }

            // SLIDER NAVIGATION

            .swiper-button-prev-out, .swiper-button-next-out {
                cursor: pointer;
                transition-duration: 0.4s;
                transition-property: opacity;
                position: absolute;
                z-index: 1;
                background-color: $light-bg;
                border-radius: 50%;
                width: 35px;
                aspect-ratio: 1/1;
                opacity: 0;
                top: 50%;
                transform: translateY(-50%);
                &.swiper-button-disabled {
                    opacity: 0.5;
                }
            }

            .swiper-button-prev-out {
                left: 16px;
            }
            .swiper-button-next-out {
                right: 16px;
            }


            // SLIDER PAGINATION

            --swiper-pagination-color: #F8F7F4;
            --swiper-pagination-bullet-size: 8px;
            --swiper-pagination-bullet-width: 8px;
            --swiper-pagination-bullet-height: 8px;
            --swiper-pagination-bullet-inactive-color: #F8F7F4;
            --swiper-pagination-bullet-inactive-opacity: 0.5;
            --swiper-pagination-bullet-opacity: 1;
            --swiper-pagination-bullet-horizontal-gap: 3px;
            --swiper-pagination-bottom: 15px
            
        }
    }

    .text_lower,
    .text_upper {
        min-height: 100px;
        flex: 0 0 auto;
    }
    .text_lower {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .block_inner {
        @include max(tablet) {
            flex-direction: column;
        }
    }

    .link {
        align-self: flex-start;
    }

    .bloc_place {
        text-align: right;
    }

</style>