
<script lang="ts">
    export let data: {
        homepage: Promise<void>;
    }
    $: ({page} = data)
    $: console.log('homepage: ', page)
</script>

<div class="container">
    <h1>{page.title}</h1>
    <div>{@html page.content}</div>
</div>

