import { getHomePage } from "$lib/queries/pages"

export async function load( ) {

    return {
        page: await getHomePage()
    }
}