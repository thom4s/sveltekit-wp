<script>
    import { onMount } from "svelte";
    import { fade } from 'svelte/transition';
    import { getPushContactContents } from '$lib/queries/options.js';

    import Form from "$lib/parts/Forms/Form.svelte";

    let contents, title, label, text, lien;

    onMount( async () => {
        contents = await getPushContactContents();
        title = contents.titre
        label = contents.label
        text = contents.text
        lien = contents.lien
    })

    export let smallContact = true;

</script>

<section class="module mod_contact" class:mb-xxlarge={!smallContact}>

    <div class="grid container">

        <div class="s_12column m_6column mod_titles">

            {#if title }
                <h2 class="mod_title h1 mb-medium" transition:fade={{ duration: 200 }}>{@html title}</h2>
            {/if}

            {#if !smallContact }
                <div class="mod_content body" transition:fade={{ duration: 200 }}>{@html text}</div>
            {/if}
        
        </div>

        <div class="s_12column m_6column mod_actions">
            {#if smallContact }
                <div class="body" transition:fade={{ duration: 200 }}>{@html text}</div>
                <a class="btn dark" href="{lien?.url}">{label}</a>
    
            {:else}
                <Form />

            {/if}
        
        </div>
    </div>

</section>

<style lang="scss">
    .module {
        margin-top: $space-wide;
        position: relative;
        z-index: 9;
        background-color: $white;
        padding-top: $space-l;

        .mod_actions {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
        }
    }
    div.body {
        margin-bottom: 30px;
    }
</style>