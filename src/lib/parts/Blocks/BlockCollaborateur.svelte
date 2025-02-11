<script>
    import Collaborateur from '$lib/parts/Elements/Collaborateur.svelte'
    export let layout = {}
</script>

<div class="module mod_collaborateurs">
    {#each layout.collaborateur as collab}

        <Collaborateur {collab} />

    {/each}
</div>


<style lang="scss">

</style>