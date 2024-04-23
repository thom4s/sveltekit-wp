
import { API_URL } from '$env/static/private';


export async function getSeoSchema( ) {
    
    const seoConfig = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            {
                seo {
                    social {
                        facebook {
                            url
                        }
                        instagram {
                            url
                        }
                        linkedIn {
                            url
                        }
                        twitter {
                            username
                        }
                        youTube {
                            url
                        }
                    }
                    schema {
                        companyName
                        homeUrl
                        inLanguage
                        siteName
                        siteUrl
                        logo {
                        sourceUrl
                        seo {
                            canonical
                            metaDesc
                            metaKeywords
                            opengraphAuthor
                            opengraphDescription
                            opengraphModifiedTime
                            opengraphPublishedTime
                            opengraphPublisher
                            opengraphSiteName
                            opengraphTitle
                            opengraphType
                            opengraphUrl
                            title
                        }
                        }
                    }
                }
                generalSettings {
                    description
                    title
                    url
                }
            }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            console.log('res: ', res)
            return res.data
        });

    return seoConfig;
}
