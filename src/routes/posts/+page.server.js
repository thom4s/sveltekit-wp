import { getAllPosts } from "$lib/queries/posts"
import { getPageBySlug } from "$lib/queries/pages"
export async function load( ) {

    return {
        page: await getPageBySlug('news'),
        posts: await getAllPosts()
    }
}