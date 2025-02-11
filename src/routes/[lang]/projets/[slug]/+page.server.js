import { getProjetBySlug, getAdjacentProject } from "$lib/queries/projets"


export async function load( {params} ) {

    const projet = await getProjetBySlug(params.slug);

    return {
        prevPage: await getAdjacentProject(projet.databaseId, 'last'),
        nextPage: await getAdjacentProject(projet.databaseId, 'first'),
        projet
    }
}