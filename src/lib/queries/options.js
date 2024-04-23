
import { API_URL } from '$env/static/private';



export async function getFormsParams( ) {
    
    const options = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            {
                optionsDuSite {
                    formulaireDeContact {
                        smtp {
                            authPass
                            authUser
                            host
                            port
                            secure
                        }
                    }
                }
            }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            return res.data.optionsDuSite.formulaireDeContact
        });

    return options;
}

