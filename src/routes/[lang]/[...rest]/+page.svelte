<script lang="ts">
    import Projets from '$lib/parts/Templates/Projets.svelte';
    import News from '$lib/parts/Templates/News.svelte';
    import Page from '$lib/parts/Templates/Page.svelte';
    import Contact from '$lib/parts/Templates/Contact.svelte';
    import NotFound from '$lib/parts/Navigations/NotFound.svelte';
    
    export let data: {
        page: Promise<void>;
        posts: Promise<void>;
        projets: Promise<void>;
        savoirfaires: Promise<void>;
        secteurs: Promise<void>;
    }

    $: ({page, posts, projets, savoirfaires, secteurs} = data)

</script>

<div class="template-page">
    {#if page}

            {#if page?.template?.templateName === 'Projets'}
                <Projets {page} {projets} {savoirfaires} {secteurs} />
                
            {:else if page?.template?.templateName === 'Actualités'}
                <News {page} {posts} />

            {:else if page?.template?.templateName === 'Page Contact'}
                <Contact {page} />    

            {:else}
                <Page {page} {posts} />

            {/if}

    {:else}
        <NotFound />
    {/if}
</div>