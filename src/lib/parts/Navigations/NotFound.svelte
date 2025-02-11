<script>
    import notfound from '$lib/assets/notfound.png';
    import PushContact from '../Modules/PushContact.svelte';
</script>

<article class="">
    
    <div class="grid mb-xxlarge">

        <div class="stage_left s_12column m_6column">
            <div class="stage_txt">
                <h1 class="h1">La page que vous cherchez <em>n’existe pas</em>.</h1>
            </div>
        </div>

        <div class="stage_right s_12column m_6column fl-center">
            <div>
                <div class="mb-large">
                    <img src="{notfound}" alt="We are lost...">
                </div>

                <div class="page_actions mb-small">
                    <p>Vous ne trouvez pas ce que vous cherchez ?<br>
                        Essayez donc ceci :</p>
                </div>

                <div class="page_actions fl-column-start gap-xs">
                    <a href="/fr/projets" class="link">Découvrez nos projets</a>
                    <a href="/fr/contact" class="link">Contactez nous</a>
                </div>

            </div>
        </div>
    </div>
</article>

<PushContact />

<style lang="scss">
    .grid {
        align-items: center;
        column-gap: 0;

        @include max(medium) {
            @include container;
            column-gap: 0;
        }
    }
    img {
        aspect-ratio: 5/4;
        width: 100%;
    }
    .stage_left {
        @include max(medium) {
            padding-bottom: 0;
        }
    }
    .stage_right {
        @include max(medium) {
            padding-top: 0;
        }
    }
    .stage_txt {
        
        @include min(desktop) {
            padding-right: 240px;
            padding-left: 240px;
        }
        @include max(desktop) {
            padding-right: 5vw;
            padding-left: 5vw;
        }       
        @include max(medium) {
            padding-right: 0;
            padding-left: 0;
        }
    }
    .page_actions {
        @include max(medium) {
            gap: var(--space-l);
            margin-top: var(--space-l);
        }
    }
</style>