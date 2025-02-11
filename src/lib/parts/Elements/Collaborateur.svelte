<script>
    import Image from "$lib/parts/Elements/Image.svelte";
	import IconArrowRight from "../Svgs/IconArrowRight.svelte";

    export let collab = {}
    let open = false;
</script>

<div class="item item-collaborateur grid" class:open={open}>

    <button class="action btn_clean" on:click={ () => open = !open }>
        <span class="icon_outer">
            <IconArrowRight />
        </span>
    </button>

    <div class="mod_media s_3column m_1column">
        <div class="square">
            <div class="inner">
                <Image 
                    node={collab.photo?.node} 
                />
            </div>
        </div>
    </div>
    <div class="mod_title s_7column m_2column">
        <p class="mb-xxsmall">{collab.name}</p>
        <p class="no-margin caption">{collab.job}</p>
    </div>
    <div class="mod_details s_12column m_3column">
        <div class="details_wrapper"> 
            <p>{@html collab.details}</p>
        </div>
    </div>

</div>


<style lang="scss">
    .item {
        border-top: 1px solid;
        padding-top: $space-m;
        align-items: flex-start;
        position: relative;
    }
    .mod_media {
        .inner {
            border-radius: 50%;
            overflow: hidden;
        }
    }
    .action {
        position: absolute;
        z-index: 1;
        right: 10px;
        top: 30px;
    }
    .mod_details {
        position: relative;

        @include min(tablet) {
            padding-right: $gutter * 2;
        }
    }
    
    .icon_outer {
        display: inline-block;
        transform: rotate(90deg);
        transition: transform .3s;
    
        .open & {
            transform: rotate(-90deg);
        }
    }

    .details_wrapper {
        max-height: 110px;
        overflow: hidden;
        transition: max-height .3s;
        
        .open & {
            max-height: 100vh;
            padding-bottom: $space-m;
        }
    }
</style>