<script>
	import BlockProject from '$lib/parts/Blocks/BlockProject.svelte';
	import { onMount } from 'svelte';
    import { register } from 'swiper/element/bundle';

    export let titre = '';
    export let label = '';
    export let link = '';
    export let pages = [];

    let swiperContainer;

    onMount(() => {
        register();

        if (swiperContainer) swiperContainer.initialize();
    });

</script>


<section class="module mod_pushprojets">

    <div class="module_title container fl-justify gap-s">
        <div class="fl-center gap-s">
            <h2 class="h2 no-margin">{titre}</h2>
            <div class="swiper-navigation fl-vcenter">
                <div class="swiper-button-prev-out">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 26.377L10 16.377L20 6.377" stroke="black" stroke-linecap="square"/>
                    </svg>                    
                </div>
                <div class="swiper-button-next-out">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6.62305L22 16.623L12 26.623" stroke="black" stroke-linecap="square"/>
                    </svg>    
                </div>
            </div>
        </div>

        <a class="link on-desktop" href="{link?.nodes[0]?.uri}">{label}</a>
    </div>

    {#if pages && pages.length > 0}
        <swiper-container
            bind:this={swiperContainer}
            navigation={{
                nextEl: '.swiper-button-next-out',
                prevEl: '.swiper-button-prev-out'
            }}
            space-between="30"
            slides-per-view="auto"
            speed="500"
            direction="horizontal"
            init={false}
        >

            {#each pages as projet, i}
                <swiper-slide class="swiper-slide project" class:even={i & 1}>
                    <BlockProject {projet} />
                </swiper-slide>
            {/each}

        </swiper-container>
    {/if}
    <div class="container mt-medium">
        <a class="link on-mobile" href="{link?.nodes[0]?.uri}">{label}</a>
    </div>

</section>


<style lang="scss">
    .module {
        margin-top:  $space-wide;
        margin-bottom:  $space-wide;
    }
    .swiper-button-prev-out, .swiper-button-next-out {
        cursor: pointer;
        transition: 0.3s;
        &.swiper-button-disabled {
            opacity: 0.5;
        }

        @include max(mobile) {
           display: none;
        }
    }

    .swiper-slide {
        transition: width .2s;

        @include max(desktop) {
            width: 29%;
        }
        @include max(bigtablet) {
            width: 30%;
        }
        @include max(tablet) {
            width: 80%;
        }
        @include min(desktop) {
            width: calc( calc( $max-width - $space-m * 3) / 4);
        }
        
        &:first-child {
            margin-left: 5vw;
            @include min(desktop) {
                margin-left: calc( calc( 100% - $max-width) / 2 );
            }
        }
        &:last-child {
            margin-right: 5vw;
            @include min(desktop) {
                margin-right: calc( calc( 100% - $max-width) / 2 );
            }
        }
    }
    .module_title {
        border-bottom: 1px solid;
        padding-bottom: 30px;
        margin-bottom: 30px;
        align-items: flex-end;
        @include max(tablet) {
            margin-left: 5vw;
            width: 95%;
        }
    }
</style>