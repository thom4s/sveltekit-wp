import { getProjectBySlug } from "$lib/queries/projects"


export async function load( {params} ) {

    return {
        page: await getProjectBySlug(params.slug)
    }
}