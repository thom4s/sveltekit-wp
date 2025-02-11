<script>
    import SEO from '$lib/parts/SEO/index.svelte';
    import { fade } from 'svelte/transition';
	import { page, navigating } from '$app/stores';
    import {width, mobile} from '$lib/stores/device';

    import { config, activeLang, menusStore, langsStore } from '$lib/config/website.js'
	import { beforeNavigate, afterNavigate } from '$app/navigation';

    import { fullscreen, fullScreenContent, fullScreenType } from '$stores/fullscreen.js';
    import FullScreen from '$lib/parts/Modules/FullScreen.svelte';

    import Header from "$lib/parts/Navigations/Header.svelte";
    import Footer from "$lib/parts/Navigations/Footer.svelte";
    import HoverCursor from '$lib/parts/HoverCursor.svelte';
    import '$lib/assets/styles/style.scss';

    import { resetFullscreen } from '$stores/fullscreen.js';

    export let data;
    $: ({menuItemsPrimary, menuItemsFooter, seoConfig, langs, currentLang, socialLinks } = data)
    
    console.log('menuItemsPrimary: ', menuItemsPrimary);
    
    $: $activeLang = currentLang;
    $: $langsStore = langs;

    $: $menusStore = {
        menuItemsPrimary,
        menuItemsFooter
    }

    $: {
        $config.author = seoConfig.seo.schema.companyName
        $config.ogLanguage = seoConfig.seo.schema.inLanguage
        $config.siteLanguage = seoConfig.seo.schema.inLanguage
        $config.siteTitle = seoConfig.generalSettings.title
        $config.siteShortTitle = seoConfig.generalSettings.title
        $config.description = seoConfig.generalSettings.description
        $config.siteUrl = seoConfig.seo.schema.siteUrl
        $config.backgroundColor = ""
        $config.themeColor = ""
        $config.contactEmail = ""
        $config.facebookPage = seoConfig.seo.social.facebook.url
        $config.linkedinProfile = socialLinks?.linkedin_account || ''
        $config.instagramProfile = socialLinks?.instagram_account || ''
        $config.twitterUsername = seoConfig.seo.social.twitter.username || ''
    }

    let isLoading = false;

    beforeNavigate( () => {
        isLoading = true;
    }) 


    afterNavigate( () => {
        setTimeout( () => {
            isLoading = false;
        }, 500)
    })

    $: if ($navigating) resetFullscreen();

</script>

<SEO />

<Header/>

{#if isLoading}
	<div class="loader" in:fade={{ duration: 200 }} 
    out:fade={{ duration: 200 }}></div>
{/if}

<main class="main">
    {#key data.pathname}
        <div 
            class="template-outer"
            in:fade={{ duration: 300, delay: 300 }} 
            out:fade={{ duration: 300 }}>
            <slot />
        </div>
    {/key}
</main>

{#key $navigating?.to.route}
    {#if $fullscreen }
        <FullScreen 
            bind:fullscreen={$fullscreen} 
            type={$fullScreenType} 
            content={$fullScreenContent} />
    {/if}
{/key}

<HoverCursor />

<Footer />

<svelte:window bind:innerWidth={$width} />

<svelte:head>
   {#if $fullscreen}
      <style>
         body {
            overflow: hidden;
         }
      </style>
   {/if}
</svelte:head>	


<style lang="scss">
    .loader {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: $white;
        z-index: 8;
        transition: all 1s;
    }
</style>