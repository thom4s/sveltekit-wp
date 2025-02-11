<script lang="ts">
    import PushContact from '$lib/parts/Modules/PushContact.svelte';
    import PushNews from '$lib/parts/Modules/PushNews.svelte';
    import PushPages from '$lib/parts/Modules/PushPages.svelte';
    import PushProjets from './Modules/PushProjets.svelte';
    import References from '$lib/parts/Modules/References.svelte';
    import RichText from '$lib/parts/Modules/RichText.svelte';
    import TabExpertise from '$lib/parts/Modules/TabExpertise.svelte';
    import Video from '$lib/parts/Modules/Video.svelte';
    import BlockTVT from '$lib/parts/Blocks/BlockTVT.svelte';
    import BlockProjetPushed from '$lib/parts/Blocks/BlockProjetPushed.svelte';
    import BlockCollaborateur from '$lib/parts/Blocks/BlockCollaborateur.svelte';
    import HPCover from '$lib/parts/Modules/HPCover.svelte';

    export let layout = '';
    export let smallContact = false;
    export let prefix = '';

//$:console.log('layout: ', layout)
</script>



{#if layout.__typename === `ContenusFlexiblesContenusFlexiblesPushcontactLayout`}
    <PushContact smallContact titre={layout.titre} text={layout.text} labelDuBouton={layout.labelDuBouton}/>

{:else if layout.__typename === 'ContenusFlexiblesContenusFlexiblesPushnewsLayout'}
    <PushNews titre={layout.titre} pages={layout.news?.nodes}/>

{:else if layout.__typename === 'ContenusFlexiblesContenusFlexiblesPushpagesLayout'}
    <PushPages titre={layout.titre} pages={layout.pages?.nodes}/>

{:else if 
    layout.__typename === 'ContenusFlexiblesContenusFlexiblesPushprojetsLayout' }
    <PushProjets titre={layout.titre} pages={layout.projets?.nodes} label={layout.label} link="{layout.link}" />

{:else if 
    layout.__typename === 'ContenusFlexiblesStagedStagesContenusFlexiblesPushprojetsLayout' 
    ||  layout.__typename === `ContenusSavoirFaireLeftColContenusFlexiblesPushprojetsLayout`
    ||  layout.__typename === `ContenusSavoirFaireRightColContenusFlexiblesPushprojetsLayout` }
    <section class="module mod_pushprojects">
        <div class="mod_title">
            <h2 class="h2">{@html layout.titre}</h2>
        </div>
        <div class="mod_projects">
            {#if layout.projets }
                {#each layout.projets?.nodes as projet }
                    <div class="mb-small">
                        <BlockProjetPushed {projet} />
                    </div>
                {/each}
            {/if}
        </div>
        <div class="mod_action">
            <a class="link" href="{layout.link?.nodes[0].uri}">{@html layout.label}</a>
        </div>
    </section>
    
{:else if layout.__typename === 'ContenusFlexiblesContenusFlexiblesReferencesLayout'}
    <References titre={layout.titre} ligneLogos={layout.ligneLogos} />


{:else if layout.__typename === 'ContenusFlexiblesContenusFlexiblesRichtextLayout'}
    <RichText titre={layout.titre} contentOne={layout.contentOne} contentTwo={layout.contentTwo} />


{:else if layout.__typename === 'ContenusFlexiblesContenusFlexiblesTabExpertiseLayout'}
    <TabExpertise titre={layout.titre} contenus={layout.contenus} />


{:else if layout.__typename === 'ContenusFlexiblesContenusFlexiblesVideoLayout'}
    <Video titre={layout.titre} videoId={layout.video} plateforme={layout.plateforme}/>


{:else if 
    layout.__typename === `ContenusFlexiblesContenusFlexiblesBlocTitreVisuelTexteLayout` 
    || layout.__typename === `ContenusFlexiblesStagedStagesContenusFlexiblesBlocTitreVisuelTexteLayout` 
    || layout.__typename === `ContenusSavoirFaireLeftColContenusFlexiblesBlocTitreVisuelTexteLayout` 
    || layout.__typename === `ContenusSavoirFaireRightColContenusFlexiblesBlocTitreVisuelTexteLayout` } 
    <BlockTVT visuel={layout.visuel} ratio={layout.img_ratio} design={layout.design} texte={layout.texte} />


{:else if layout.__typename === `ContenusFlexiblesStagedStagesContenusFlexiblesCollaborateursLayout`} 
    <BlockCollaborateur {layout} />


{:else if layout.__typename === `ContenusFlexiblesContenusFlexiblesHpCoverLayout`} 
    <HPCover cover_text={layout.cover_text} left_title={layout.left_title} right_title={layout.right_title}  cover_img={layout.cover_img.node.sourceUrl} />

    
{/if}


<style lang="scss">
    .mod_pushprojects {

        @include max(bigtablet) {
            padding: $gutter;
        }
        @include min(bigtablet) {
            padding: $gutter * 2 $gutter * 2 240px $gutter * 2;
        }
        .mod_action {
            border-top: 1px solid black;
            padding-top: $space-s;
        }
    }
    
</style>