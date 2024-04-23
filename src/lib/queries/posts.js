
import { API_URL } from '$env/static/private';



export async function getPostBySlug( slug = '' ) {
    
    console.log('slug: ', slug)

    const post = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    post(id: "article-un", idType: SLUG) {
                        id
                        content
                        date
                        featuredImage {
                            node {
                                caption
                                altText
                                fileSize
                                link
                                sizes
                                srcSet
                                sourceUrl
                            }
                        }
                        postId
                        slug
                        title
                        author {
                            node {
                              name
                            }
                        }
                    }
                }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            return res.data.post
        });

    return post;
}


export async function getAllPosts( slug = '' ) {
    
    console.log('slug: ', slug)

    const posts = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    posts {
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
            return res.data.posts
        });

    return posts;
}