
import { getAllProjects} from "$lib/queries/projects"
import { getAllTerms } from "$lib/queries/taxonomies"
import { getPageBySlug } from "$lib/queries/pages"

export async function load( ) {

    return {
        page: await getPageBySlug('cpt-archives'),
        projets: await getAllProjects(),
        taxonomie: await getAllTerms('taxo'),
    }
}