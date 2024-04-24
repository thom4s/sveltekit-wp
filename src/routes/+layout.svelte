<script>
    import SEO from '$lib/parts/SEO/index.svelte';
    import { website } from '$lib/config/website.js'

    import Header from "$lib/parts/Header.svelte";
    import Footer from "$lib/parts/Footer.svelte";
    import '$lib/scss/style.scss';

    export let data;
    $: ({menuItems, menuItemsSecondary, seoConfig } = data)
    
    $: {
        $website.author = seoConfig.seo.schema.companyName
        $website.ogLanguage = seoConfig.seo.schema.inLanguage
        $website.siteLanguage = seoConfig.seo.schema.inLanguage
        $website.siteTitle = seoConfig.generalSettings.title
        $website.siteShortTitle = seoConfig.generalSettings.title
        $website.description = seoConfig.generalSettings.description
        $website.siteUrl = seoConfig.seo.schema.siteUrl
        $website.backgroundColor = ""
        $website.themeColor = ""
        $website.contactEmail = ""
        $website.facebookPage = seoConfig.seo.social.facebook.url
        $website.linkedinProfile = seoConfig.seo.social.linkedIn.url
        $website.twitterUsername = seoConfig.seo.social.twitter.username
    }
</script>

<SEO />

<Header {menuItems} {menuItemsSecondary}/>

<main>
    <slot />
</main>

<Footer />


