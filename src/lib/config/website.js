import { writable } from "svelte/store";
import { PUBLIC_SITE_URL } from "$env/static/public";

export const config = writable({
	author: 'Custom',
	ogLanguage: 'fr_FR',
	siteLanguage: 'fr-FR',
	siteTitle: 'Custom',
	siteShortTitle: 'Custom',
	description: 'My new Website',
	siteUrl: PUBLIC_SITE_URL,
	backgroundColor: '#1b4079',
	themeColor: '#d62828',
	contactEmail: '',
	facebookPage: '',
	linkedinProfile: '',
	instagramProfile: '',
	twitterUsername: '',
	twitterUserId: '',
	menusIds: ['header-menu', 'header-top', 'footer-menu']
});

export const activeLang = writable('fr');

export const menusStore = writable({});
export const langsStore = writable({});