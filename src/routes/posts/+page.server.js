import { getAllPosts } from "$lib/queries/posts"

export async function load( ) {

    return {
        posts: await getAllPosts()
    }
}