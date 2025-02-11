<script lang="ts">
    import Flexibles from '$lib/parts/Flexibles.svelte';
    import PushContact from "$lib/parts/Modules/PushContact.svelte";

    export let page = {};
    export const posts = [];

</script>


<article class="container" data-template="page">

    <div class="grid">

        <div class="m_4column">

        </div>

        <div class="s_12column m_8column">
            <h1>{page.title}</h1>
            <div class="body">{@html page.content}</div>
    
            {#if page.contenusFlexibles?.contenusFlexibles }
                <Flexibles contenusFlexibles={page.contenusFlexibles?.contenusFlexibles}/>
            {/if}
        </div>

    </div>

</article>


<style lang="scss">
    .container {
        margin-top: $space-xl * 2;
    }
</style>