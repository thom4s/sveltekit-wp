import { getProjetBySlug } from "$lib/queries/projets"


export async function load( {params} ) {

    return {
        page: await getProjetBySlug(params.slug)
    }
}