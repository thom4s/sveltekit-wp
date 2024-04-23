<script lang="ts">
    import Form from "$lib/parts/Forms/Form.svelte";
    
    export let data: {
        page: Promise<void>;
    }
    $: ({page} = data)

</script>


<div class="container">
    <h1>{page.title}</h1>

    <div>{@html page.content}</div>

    <Form />

</div>


