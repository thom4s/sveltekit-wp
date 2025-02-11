
import { PUBLIC_API_URL } from "$env/static/public";
import { seo_query_string, contentType_fields_string, basic_fields_string, featuredImage_fields_string, taxonomies_fields_string, flexibleContents_query_string, savoirfaire_query_string, stagedContents_query_string } from '$lib/utils/queries';



export async function getTranslation( uri, lang ) {
    
    if( uri === "/fr" ) {
        uri = '/';
    }
    const query = `
    {
        nodeByUri(uri: "${uri}") {
          id
          ... on Page {
            id
            translation(language: ${lang.toUpperCase()}) {
              uri
            }
          }
          ... on Projet {
            id
            translation(language: ${lang.toUpperCase()}) {
              uri
            }
          }
          ... on Post {
            id
            translation(language: ${lang.toUpperCase()}) {
              uri
            }
          }
        }
      }
    `

    const pageTranslated = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query}),
        })
        .then(res => res.json())
        .then(res => {
            console.log('getTranslation res: ', res)
            if( ! res.data ) return {};
            return res.data.nodeByUri
        });
    
    return pageTranslated;
}


export async function getHomePage ( lang = '' ) {

    const uri = lang === 'en' ? '/en/homepage/' : '/'

    const query = `{
        nodeByUri(uri: "${uri}") {
            id
            ... on Page {
                ${basic_fields_string}
                ${seo_query_string}
                ${flexibleContents_query_string}
            }
        }
    }`
    
    const page = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query}),
        })
        .then(res => res.json())
        .then(res => {
            console.log('res', res);
            if( ! res.data ) return {};
            return res.data.nodeByUri
        });

    return page;
}


export async function getPageBySlug( uri = '', savoirfaire = false ) {
    let query = '';

    if( savoirfaire ) {
        query = `{
            page(id: "${uri}", idType: URI) {
                id
                uri
                title
                content
                date
                modified
                template {
                    templateName
                }
                ${seo_query_string}
                ${savoirfaire_query_string}
            }
        }`
    }
    else {
        query = `{
            page(id: "${uri}", idType: URI) {
                id
                uri
                title
                content
                date
                modified
                template {
                    templateName
                }
                ${seo_query_string}
                ${flexibleContents_query_string}
                ${stagedContents_query_string}
            }
        }`
    }

    //console.log(query)

    const page = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query}),
        })
        .then(res => res.json())
        .then(res => {
            if( ! res.data ) return {};
            return res.data.page
        });

    return page;
}


export async function getAllPages( slug = '', lang = 'fr' ) {
    
    const pages = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    pages(where: {language: ${lang} }) {
                        nodes {
                            excerpt
                            id
                            slug
                            title
                            ${seo_query_string}
                        }
                    }
                }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            if( ! res.data ) return {};
            return res.data.pages
        });

    return pages;
}