import { API_URL } from '$env/static/private';

import { getSeoSchema } from '$lib/queries/seo';


export async function load() {

    return {
        
        seoConfig: await getSeoSchema(),


        menuItems: await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                    {
                        menu(id: "primary_menu", idType: LOCATION) {
                        id
                            menuItems {
                                nodes {
                                    label
                                    url
                                    path
                                }
                            }
                        }
                    }
                `
                }),
            })
            .then(res => res.json())
            .then(res => {
                return res.data.menu.menuItems
            }),


        menuItemsSecondary: await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: `
                        {
                            menu(id: "footer_menu", idType: LOCATION) {
                            id
                                menuItems {
                                    nodes {
                                        label
                                        url
                                        path
                                    }
                                }
                            }
                        }
                    `
                    }),
                })
                .then(res => res.json())
                .then(res => {
                    return res.data.menu.menuItems
                }),

    }
}