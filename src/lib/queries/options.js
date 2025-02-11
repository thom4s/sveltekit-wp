
import { invalidate, invalidateAll } from "$app/navigation";
import { PUBLIC_API_URL } from "$env/static/public";

export async function getLangs( ) {
    const langs = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `{
                    languages {
                        slug
                        locale
                        name
                    }
                }`
            }),
        })
        .then(res => res.json())
        .then(res => {
            if( ! res.data ) return
            return res.data.languages
        });
        
    return langs;
}


export async function getMenuItems( lang = 'fr', id = '') {
    let location = "";

    if( lang === 'fr') {
        location = id.toUpperCase()
    }
    else {
        location = `${id.toUpperCase()}___${lang.toUpperCase()}`
    }
    const query = `
        {
            menuItems(where: {location: ${location} }) {
                nodes {
                    label
                    path
                }
            }
        }
    `
    
    const menuItems = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query}),
        })
        .then(res => res.json())
        .then(res => {
            if( ! res.data ) return;
            return res.data.menuItems;
        });

    return menuItems;
}


export async function getFormsParams( ) {
    
    const options = await fetch(PUBLIC_API_URL, {
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
            if( ! res.data ) return
            return res.data.optionsDuSite?.formulaireDeContact
        });

    return options;
}

export async function getSocialLinks( ) {
    
    const options = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            {
                optionsDuSite {
                    socialLinks {
                        instagram_account
                        linkedin_account
                    }
                }
            }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            if( ! res.data ) return
            return res.data.optionsDuSite?.socialLinks
        });

    return options;
}



export async function getPushContactContents( ) {
    
    const options = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            {
                optionsDuSite {
                    formulaireDeContact {
                        contenusPushContact {
                            fieldGroupName
                            label
                            text
                            titre
                            lien {
                                url
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
            if( ! res.data ) return
            return res.data.optionsDuSite.formulaireDeContact.contenusPushContact
        });

    return options;
}
