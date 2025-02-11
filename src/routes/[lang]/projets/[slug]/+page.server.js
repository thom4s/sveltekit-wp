import { getProjectBySlug, getAdjacentProject } from "$lib/queries/projects"


export async function load( {params} ) {

    const project = await getProjectBySlug(params.slug);

    return {
        prevPage: await getAdjacentProject(project.databaseId, 'last'),
        nextPage: await getAdjacentProject(project.databaseId, 'first'),
        project
    }
}