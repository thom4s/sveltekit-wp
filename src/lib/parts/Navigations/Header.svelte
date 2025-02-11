<script>
    import SvgBurger from "$lib/assets/svg/SvgBurger.svelte";
    import { menusStore } from "$lib/config/website";
    import LangSwitcher from "$lib/parts/LangSwitcher.svelte";
    import { page } from '$app/stores';
    import { onMount } from "svelte";
    import Logo from "$lib/parts/Elements/Logo.svelte";
    import Menu from "$lib/parts/Elements/Menu.svelte";
    import IconClose from '$lib/parts/Svgs/IconClose.svelte';

    $: ( {menuItemsPrimary} = $menusStore)
    $: pathname = $page.url.pathname + '/';

  // VARIABLES

  onMount(() => {


    const masthead = document.getElementById('masthead');

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
            
            if( st < 150 ) {
                //console.log('documentIsScrolling BACKTOTHETOP');
                masthead.classList.remove('out');
                masthead.classList.add('at-top');
            }
            else if (st > lastScrollTop ){
                //console.log('documentIsScrolling DOWN');
                masthead.classList.add('out');
                masthead.classList.remove('at-top');
            } 
            else {
                //console.log('documentIsScrolling UP');
                masthead.classList.remove('out');
                masthead.classList.remove('at-top');
            }

            lastScrollTop = st;
        }

        document.addEventListener("scroll", documentIsScrolling, false);

    });


    // MENU MOBILE

    let menuIsVisible = false;

    const handleMobileMenu = () => {
        console.log('handleMobileMenu')
        menuIsVisible = !menuIsVisible;
    }

</script>


<svelte:head>
    {#if menuIsVisible}
        <style>
            body {
                overflow: hidden;
            }
        </style>
    {/if}
</svelte:head>	

<header id="masthead" class="at-top" class:home={$page.url.pathname === '/fr' || $page.url.pathname === '/en'}>

    <div class="mobileContainer">

        <Logo />
        
        <button on:click={() => {
            handleMobileMenu();
        }}>
            <SvgBurger />
        </button>

    </div>

    <div class="menusContainer menuOverlay" class:menuIsVisible>

        <div class="container" >

            <div class="logo_group">

                <Logo 
                    on:logoClicked={ () => menuIsVisible = false } />
            
                <button on:click={ () => menuIsVisible = false } 
                    class="btn_clean menus_close_btn">
                    <IconClose />
                </button>

            </div>

            <div class="menus_group fl-right gap-m">

                <Menu 
                    menuItems={menuItemsPrimary} 
                    on:menuItemClicked={ () => menuIsVisible = false } />

                <LangSwitcher />

                <nav class="cta">
                    <a href="/fr/contact" class="btn dark" on:click={ () => menuIsVisible = false }>Contact</a>
                </nav>
            </div>

        </div>
    </div>
</header>



<style lang="scss">

    header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        transform: translateY(0);
        background-color: $gray-light;
        z-index: 9;
        transition: transform .2s;
        max-width: 100vw;

        @include min(large) {
            padding: 32px 0;
        }
        @include max(large) {
            padding: 26px 0;
        }
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
        transition: 0.5s ease-in-out;
    }

    ul {
        // display: flex;
        align-items: center;
        gap: 30px;
        list-style: none;
        margin: 0;
        padding: 0;

        a {
            padding: 10px;
        }
    }

    .cta {
        text-transform: uppercase;
    }

    // MOBILE

    .mobileContainer {

        @include min(large) {
            display:  none;
        }
        @include max(large) {
            padding: 0 5vw;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: flex-start;
        }

        button {
            background: none;
            border: none;
            cursor: pointer;
            z-index: 999;
            @include min(large) {
                display: none;
            }
        }

    }


    :global(.menuOverlay) {

        z-index: 999;

        @include max(large) {
            transition: transform .5s;
            transform: translateX(110vw);
            position: fixed;
            bottom: 0;
            top: 0;
            right: 0;
            height: 100vh;
            width: calc(95vw);
            background-color: $beige;

            .container {
                flex-direction: column;
                align-items: flex-start;
                gap: 5px;
            }

            nav {
                width: 100%;
                padding: 0;
            }

            ul {
                flex-direction: column;
                align-items: flex-start;
            }
            .menu-link {
                position: relative;
                display: inline-block;
                padding: var(--space-xs) 0;
            }

            .brand_logo {
                display: none;
            }
            .cta {
                margin-top: var(--space-xs);
            }
        }


        &.menuIsVisible {
            transform: translateX(0);
        }

    }

    .logo_group {
        @include max(large) {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 26px 0;
        }
        @include min(large) {
            .menus_close_btn {
                display: none; 
            }
        }
        .menus_close_btn {
            width: 20px;
            height: 20px;
        }
    }
    .menus_group {
        @include max(large) {
            gap: 40px;
        }
        @include max(large) {
            flex-direction: column;
            align-items: flex-start;
            margin-top: var(--space-l);
        }
    }

</style>