import { getProjectBySlug, getAdjacentProject } from "$lib/queries/projects"


export async function load( {params} ) {

    const projet = await getProjectBySlug(params.slug);

    return {
        prevPage: await getAdjacentProject(projet.databaseId, 'last'),
        nextPage: await getAdjacentProject(projet.databaseId, 'first'),
        projet
    }
}