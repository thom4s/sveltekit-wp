<script>
    import { activeLang, langsStore } from "$lib/config/website";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { getTranslation } from "$lib/queries/pages";

    const switchLang = async ( lg ) => {
        console.log( 'switchLang: ', lg )

        let pathname = $page.url.pathname
        pathname = pathname.replace('fr/', '');
        pathname = pathname.replace('en/', '');
    
        $activeLang = lg;
        const pageTranslated = await getTranslation(pathname, lg )
        console.log( 'pageTranslated: ', pageTranslated?.translation )

        if( pageTranslated === null || pageTranslated?.translation === null || pageTranslated?.translation?.uri == '/') {
            goto( '/fr', { invalidateAll: true} )
        }
        else {
            if (pageTranslated.translation.uri !== null) {
                goto( pageTranslated.translation.uri, { invalidateAll: true } )
            }
        }
    }
    
</script>

<nav>
    <ul class="fl-center">
        {#each $langsStore as l, index}
            <li><button class="menu-link" disabled={l.slug === $activeLang} on:click={ () => switchLang(l.slug)}>{l.name.substring(0,2)}</button></li>
            {#if index === 0}
                <span>/</span>
            {/if}
        {/each}
    </ul>
</nav>


<style lang="scss">
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.menu-link {
    background-color: unset;
    border: none;
    cursor: pointer;
}
button:disabled {
    font-weight: bold;
}
</style>