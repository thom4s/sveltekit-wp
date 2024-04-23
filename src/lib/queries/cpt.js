
import { API_URL } from '$env/static/private';


export async function getCptBySlug( slug = '' ) {
    
    console.log('slug: ', slug)

    const projet = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            {
                projet(id: "${slug}", idType: SLUG) {
                  id
                  excerpt
                  slug
                  title
                  template {
                    templateName
                  }
                  content
                  featuredImage {
                    node {
                      link
                      sizes
                      sourceUrl
                      srcSet
                      altText
                    }
                  }
                }
              }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            console.log('res: ', res)
            return res.data.projet
        });

    return projet;
}


export async function getAllCpt( ) {
    
    const cpt = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    cpt(first: 5, after: "endCursorFromPreviousRequestGoesHere") {
                        nodes {
                            excerpt
                            id
                            slug
                            title
                        }
                    }
                }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            return res.data.cpt
        });

    return cpt;
}