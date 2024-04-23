import { writable } from "svelte/store";

import {
	PUBLIC_SITE_URL,
} from '$env/static/public';

export const website = writable({
	author: '',
	ogLanguage: '',
	siteLanguage: '',
	siteTitle: '',
	siteShortTitle: '',
	description: '',
	siteUrl: PUBLIC_SITE_URL,
	backgroundColor: '',
	themeColor: '',
	contactEmail: '',
	facebookPage: '',
	linkedinProfile: '',
	twitterUsername: '',
	twitterUserId: '',
});

export { website as default };
