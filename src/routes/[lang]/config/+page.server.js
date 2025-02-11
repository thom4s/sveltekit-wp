import { getHomePage, getPageBySlug } from "$lib/queries/pages"

export async function load( {params } ) {

    return {
        accueil: await getHomePage(params.lang),
        adn: await getPageBySlug('adn')
    }
}