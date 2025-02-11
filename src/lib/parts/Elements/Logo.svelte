<script>
    import { activeLang } from "$lib/config/website";
    import { page } from '$app/stores';
	import logo_nobaseline from '$lib/assets/logo.png';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    const logoClicked = () => {
		dispatch('logoClicked');
    }

    $: pathname = $page.url.pathname + '/';

</script>


{#if $page.url.pathname === '/fr' || $page.url.pathname === '/en' }
    <h1 class="logo_container no-margin">
        <a href="/{$activeLang}" class="brand_logo fl-center gap-s" on:click={ () => logoClicked() }>
            <img src="{logo_nobaseline}" alt="Logo " />
            <p class="tagline">Design <br>to Manufacture</p>
        </a>
    </h1>
    {:else}
    <a href="/{$activeLang}" class="brand_logo fl-center gap-s" on:click={ () => logoClicked() }>
        <img src="{logo_nobaseline}" alt="Logo "/>
        <p class="tagline">Design <br>to Manufacture</p>
    </a>
{/if}



<style lang="scss">

    :global(.mobileContainer) {
        .brand_logo {
            z-index: 999;
            padding: 0;
        }
        .logo_container {
            margin-top: 0 !important;

            .brand_logo {
                // max-width: 150px !important;
                padding: 0 !important;
            }
        }
    }

    .logo_container {
        transition: 0.5s ease-in-out;
        line-height: 0;
    }

        .brand_logo {
            transition: 0.5s ease-in-out;
            padding: 0;
            text-decoration: none;
            letter-spacing: .02em;
            color: black;
            display: flex;
            align-items: flex-end;

            img {
                @include max(bigtablet) {
                    max-width: 100px;
                }
                @include min(bigtablet) {
                    max-width: 150px;
                }
            }
        }
            .tagline {
                text-decoration: none;
                text-transform: uppercase;
                line-height: 1.2;
                font-family: "Gotham";
                @include max(bigtablet) {
                    font-size: 1rem;
                }
                @include min(bigtablet) {
                    font-size: 1.4rem;
                }
            }

</style>