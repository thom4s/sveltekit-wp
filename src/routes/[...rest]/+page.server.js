import { getPageBySlug } from "$lib/queries/pages"

export async function load( {params} ) {

    console.log('params, ', params)
    
    return {
        page: await getPageBySlug(params.rest)
    }
}

