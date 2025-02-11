<script>
    import Video from "../Elements/Video.svelte";

    export let titre = '';
    export let videoId = '';
    export let plateforme = '';
</script>

<div class="module mod_video">

    {#if titre}
        <div class="mod_title">
            <h2 class="h2">{titre}</h2>
        </div>
    {/if}

    <div class="vid_container">
        <Video 
            {plateforme}
            {videoId}
        />
    </div>

</div>


<style lang="scss">
    .module {

        @include max(large) {
            margin-bottom: $space-xl;
        }
        @include min(large) {
            margin-bottom: $space-wide;
        }
    }
    .vid_container {
        aspect-ratio: 16/9;
    }
    .plyr__video-embed {
        max-height: 50vh;
    }

</style>