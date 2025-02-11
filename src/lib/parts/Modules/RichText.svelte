<script>
    export const titre = '';
    export let contentOne = '';
    export let contentTwo = '';
</script>


<section class="module container">
    <!-- <h2>{titre}</h2> -->

    <div class="grid">
        <div class="chapo m_6column">{@html contentOne}</div>
        <div class="body m_6column">{@html contentTwo}</div>
    </div>
</section>


<style lang="scss">
    .module {
        margin-top: $space-wide;
        margin-bottom: $space-wide;
    }
</style>