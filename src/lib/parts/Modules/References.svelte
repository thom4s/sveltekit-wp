<script>
    import Marqueeck from '@arisbh/marqueeck'; // https://marqueeck.vercel.app/docs/props
    import Image from "$lib/parts/Elements/Image.svelte";

    export const titre = '';
    export let ligneLogos = [];

    const options1 = {
        direction: "right",
        speed: 30,
        onHover: "none"
    };
    const options2 = {
        direction: "left",
        speed: 50,
        onHover: "none"
    };
</script>


<section class="module" data-module="references">
    <!-- <h2>{titre}</h2> -->

    {#if ligneLogos && ligneLogos?.length > 0}
        <div class="logos">
            {#each ligneLogos as ligne, i }
                <div class="marquee-container">
                    <Marqueeck options={ (i & 1) ? { direction: "right" } : { direction: "left" } } class="marquee-line" {options1} >
                        {#each ligne.logos.nodes as logo }
                            <Image node={logo} />
                        {/each}
                    </Marqueeck>
                </div>
            {/each}
        </div>
    {/if}
</section>


<style lang="scss">
    .module {
        margin:  $space-wide 0;
        overflow: hidden;
    }
    .marquee-line {
        display: flex;
        gap: 20px;
    }
    .marquee-container {
        border-top: 1px solid $dark-font;
        padding: $space-s 0;
        &:last-child {
            border-bottom: 1px solid $dark-font;
        }
    }

</style>