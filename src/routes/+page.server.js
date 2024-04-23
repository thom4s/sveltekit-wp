import { getHomePage } from "$lib/queries/pages"

export async function load( ) {

    return {
        homepage: await getHomePage()
    }
}