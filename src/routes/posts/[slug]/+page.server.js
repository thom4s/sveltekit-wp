import { getPostBySlug } from "$lib/queries/posts"

export async function load( {params} ) {

    return {
        page: await getPostBySlug(params.slug)
    }
}