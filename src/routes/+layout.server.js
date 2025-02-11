import { getSeoSchema } from '$lib/queries/seo';
import { getMenuItems, getLangs, getSocialLinks } from '$lib/queries/options';


export async function load( { url, params } ) {
	const { pathname } = url;

    return {
        pathname,
        seoConfig: await getSeoSchema(),
        langs: await getLangs(),
        socialLinks: await getSocialLinks(),
        currentLang: params.lang,
        menuItemsPrimary: await getMenuItems(params.lang, 'header_menu'),
        menuItemsTop: await getMenuItems(params.lang, 'header_top'),
        menuItemsFooter: await getMenuItems(params.lang, 'footer_menu')
    }
}