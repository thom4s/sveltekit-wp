<script lang="ts">
    export let data;
    $: ({accueil, adn, seoConfig} = data)
</script>


    <section class="container">
        <p>Page d'accueil : { accueil.title }</p>
        <p>Page ADN :  <b>{ adn.title }</b> { adn.template.templateName } [{ adn.uri }] ({ adn.id }) </p>
        <p>Seo Config :  { seoConfig.generalSettings.title} {seoConfig.seo.schema.siteUrl}</p>
    </section>





    <style lang="scss">
        .container {
            margin-top: 200px;
            margin-bottom: 100px;
        }
        b {
            font-weight: bold;
        }
    </style>