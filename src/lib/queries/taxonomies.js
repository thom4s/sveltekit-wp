
import { API_URL } from '$env/static/private';



export async function getAllTerms( taxonomie = '' ) {
    
    const terms = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    ${taxonomie} {
                        nodes {
                            count
                            name
                            slug
                        }
                    }
                }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            console.log('res: ', res)
            return res.data[taxonomie]
        });

    return terms;
}
