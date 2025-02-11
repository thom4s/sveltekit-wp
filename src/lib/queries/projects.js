import { PUBLIC_API_URL } from "$env/static/public";

export async function getProjectBySlug( slug = '' ) {
    
    console.log('slug: ', slug)

    const projet = await fetch(PUBLIC_API_URL, {
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


export async function getAllProjects( ) {
    
    const projects = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    projects(first: 5, after: "endCursorFromPreviousRequestGoesHere") {
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
            return res.data.projects
        });

    return projects;
}


export async function getAdjacentProject( databaseId = '', direction = '' ) {
    
    const query = `
        {
            projets(where: {id: ${databaseId}} ) {
                edges {
                    cursor
                    node {
                        language {
                            slug
                        }
                    }
                }
            }
        }
    `

    const currentProject = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
        })
        .then(res => res.json())
        .then(res => {
            return res.data.projets
        });

    console.log('currentProject: ', currentProject)


    const query_two = `
        {
            projets(after: "${currentProject.edges[0].cursor}", ${direction}: 1, where: {language: ${currentProject.edges[0].node.language.slug.toUpperCase()}}) {
                edges {
                    node {
                        title
                        slug
                        uri
                    }
                    cursor
                }
            }
        }
    `
    console.log('query_two: ', query_two)

    const adjacentProject = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query_two }),
        })
        .then(res => res.json())
        .then(res => {
            console.log('adjacentProject res: ', res)
            return res.data.projets.edges[0]
        });

    console.log('adjacentProject: ', adjacentProject)


    return adjacentProject;
}