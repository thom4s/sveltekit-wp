
import { getAllCpt} from "$lib/queries/cpt"
import { getAllTerms } from "$lib/queries/taxonomies"

export async function load( ) {

    return {
        projets: await getAllCpt(),
        taxonomie: await getAllTerms('taxo'),
    }
}