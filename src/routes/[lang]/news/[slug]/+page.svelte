<script lang="ts">
    import Image from "$lib/parts/Elements/Image.svelte";

    export let data: {
        page: Promise<void>;
    }
    $: ({page} = data)

</script>

<div class="container">

    <h1>{page.title}</h1>
    <div>Auteur : {@html page.author.node.name}</div>

    {#if page.featuredImage}
        <Image node={page.featuredImage.node} />
    {/if}

    <div>{@html page.content}</div>

</div>
