import { getPageBySlug } from "$lib/queries/pages"
import { getAllProjects} from "$lib/queries/projects"
import { getAllTerms } from "$lib/queries/taxonomies"
import { getAllPosts } from "$lib/queries/posts"

import { formProcess } from '$lib/utils/utils.js'


export async function load( {params} ) {
    
    let page, projets, posts, secteurs, savoirfaires;

    page = await getPageBySlug(params.rest)

    if( page?.template?.templateName === 'Projets') {
      projets = await getAllProjects(params.lang);
      secteurs = await getAllTerms('secteurs');
      savoirfaires = await getAllTerms('savoirfaires');
    }

    if( page?.template?.templateName === 'Actualités') {
      posts = await getAllPosts(params.lang);
    }

    if( page?.template?.templateName === 'Page Presse') {
      posts = await getAllPressArticles(params.lang);
    }

    if( page?.template?.templateName === 'Modèle Savoir Faire') {
      page = await getPageBySlug(params.rest, true)
    }

    return {
        page,
        posts,
        projets,
        secteurs,
        savoirfaires
    }

}


/* 
 * CONTACT FORM PARAMS & ACTIONS 
 **/

export const actions = {

	contact: async ({request}) => {

     return formProcess(request)    

	},
};
