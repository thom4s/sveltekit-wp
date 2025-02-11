
<script>
    import BlockTVT from '$lib/parts/Blocks/BlockTVT.svelte';
    import FlexibleLayouts from '$lib/parts/FlexibleLayouts.svelte';

    export let chapo = '';
    export let visuel = '';
    export let design = 'left';
    export let flexibleContents = '';
    export const position = '';

</script>


    <section id="r0" class="fl-column-space fl-center">

        <BlockTVT visuel={visuel} texte={chapo} ratio="verticale" {design} /> 
  
    </section>

    {#if flexibleContents }
        {#each flexibleContents as layout, i}
            {#if layout && layout.__typename }
                <FlexibleLayouts {layout} />
            {/if}
        {/each}
    {/if}
<style lang="scss">

    section {
        &:first-child {
            min-height: calc(100vh - 120px);
        }
    }

</style>