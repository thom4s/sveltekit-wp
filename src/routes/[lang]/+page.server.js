import { getHomePage } from "$lib/queries/pages"

export async function load( {params } ) {

    return {
        page: await getHomePage(params.lang)
    }
}