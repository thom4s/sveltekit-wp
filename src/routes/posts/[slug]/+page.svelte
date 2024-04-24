<script lang="ts">

    export let data: {
        post: Promise<void>;
    }
    $: ({page} = data)
    $: console.log('post: ', page)

</script>


<div class="container">

    <h1>{page.title}</h1>
    <div>Auteur : {@html page.author.node.name}</div>

    {#if page.featuredImage}
        <img src="{page.featuredImage.node.sourceUrl}" srcset={page.featuredImage.node.srcSet} sizes="{page.featuredImage.node.sizes}" alt="{page.featuredImage.node.altText}" />
    {/if}

    <div>{@html page.content}</div>

</div>
