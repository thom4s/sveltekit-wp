
import { PUBLIC_API_URL } from "$env/static/public";
import { seo_query_string, contentType_fields_string, basic_fields_string, featuredImage_fields_string, author_fields_string } from '$lib/utils/queries';



export async function getPostBySlug( slug = '' ) {
    
    const query = `
        {
            post(id: "${slug}", idType: SLUG ) {
                ${basic_fields_string}
                ${featuredImage_fields_string}
                ${author_fields_string}
                ${contentType_fields_string}
                ${seo_query_string}
            }
        }
    `

    const post = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
        })
        .then(res => res.json())
        .then(res => {
            return res.data.post
        });

    return post;
}


export async function getAllPosts( lang = 'fr', length = 10 ) {
    
    const posts = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    posts( first: ${length}, where: {language: ${lang.toUpperCase()} }) {
                        pageInfo {
                            startCursor
                            endCursor
                            hasNextPage
                            hasPreviousPage
                            total
                        }
                        edges {
                            cursor
                            node {
                                ${basic_fields_string}
                                ${seo_query_string}
                                ${featuredImage_fields_string}
                                informationsNews {
                                    lien
                                    lieu
                                    labelDuLien
                                    date
                                    video
                                    plateforme
                                    galery {
                                        nodes {
                                            sourceUrl
                                            srcSet
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            return res.data.posts
        });

    return posts;
}