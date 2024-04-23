import { getProjetBySlug } from "$lib/queries/projets"


export async function load( {params} ) {

    return {
        projet: await getProjetBySlug(params.slug)
    }
}