
<script lang="ts">
    import Flexibles from "$lib/parts/Flexibles.svelte";
	import PushContact from "$lib/parts/Modules/PushContact.svelte";
    import IconArrowDown from '$lib/parts/Svgs/IconArrowDown.svelte';
    import { onMount } from "svelte";

    export let data: {
        page: Promise<void>;
    }
    $: ({page} = data)

    let godown_icon;

    onMount(() => {

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

            if( !godown_icon ) return;

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


<div class="template-home">


    <div class="godown_icon" bind:this={godown_icon}>
        <IconArrowDown />
    </div>

    {#if page.contenusFlexibles?.contenusFlexibles }
        <Flexibles contenusFlexibles={page.contenusFlexibles?.contenusFlexibles}/>
    {/if}

</div>


<PushContact />


<style lang="scss">
    .godown_icon {
        position: fixed;
        height: 60px;
        z-index: 99;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity .5s;
        opacity: 1;

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
            bottom: 0;
        }
        to {
            bottom: 8px;
        }
    }

</style>