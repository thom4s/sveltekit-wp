<script lang="ts">

    import FlexibleLayouts from '$lib/parts/FlexibleLayouts.svelte';
    export let contenusFlexibles = [];
    export let swiped = false; 
    export let smallContact = false;

    import { register } from 'swiper/element/bundle';
    register();
</script>



{#if swiped} 

    <swiper-container 
        space-between="0" 
        slides-per-view="auto" 
        speed="500" 
        direction="vertical"
        sticky="true"
        mousewheel="true"
    >

        {#each contenusFlexibles as layout}
            {#if layout && layout.__typename }
                <swiper-slide class="swiper-slide">
                    <FlexibleLayouts {layout} {smallContact} />
                </swiper-slide>
            {/if}
        {/each}

    </swiper-container >

{:else}

    {#each contenusFlexibles as layout}
        {#if layout && layout.__typename }
            <FlexibleLayouts {layout} {smallContact} />
        {/if}
    {/each}

{/if}





<style lang="scss">

    swiper-container {
        height: 80vh;
    }
    .swiper-slide {
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: gray;
        padding: 20px;
    }
</style>