import { getPostBySlug } from "$lib/queries/posts"

export async function load( {params} ) {

    console.log(params)
    return {
        post: await getPostBySlug(params.slug)
    }
}