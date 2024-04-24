
import { getAllCpt} from "$lib/queries/cpt"
import { getAllTerms } from "$lib/queries/taxonomies"
import { getPageBySlug } from "$lib/queries/pages"

export async function load( ) {

    return {
        page: await getPageBySlug('cpt-archives'),
        projets: await getAllCpt(),
        taxonomie: await getAllTerms('taxo'),
    }
}