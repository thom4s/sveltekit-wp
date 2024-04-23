<script>
	// https://github.com/rodneylab/sveltekit-seo/blob/main/src/routes/contact/%2Bpage.svelte
	
	import ogSquareImageSrc from '$lib/assets/logo.png';
	import ogImageSrc from '$lib/assets/logo.png';
	import twitterImageSrc from '$lib/assets/logo.png';
	import featuredImageSrc from '$lib/assets/logo.png';
	
	import website from '$lib/config/website';
	import { VERTICAL_LINE_ENTITY } from '$lib/constants/entities';

	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';

	const {
		author,
		entity,
		facebookAuthorPage,
		facebookPage,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteUrl,
		linkedinProfile,
		twitterUsername,
	} = $website;

	export let article = false;
	export let breadcrumbs = [];
	export let entityMeta = null;
	export let lastUpdated;
	export let datePublished;
	export let metadescription;
	export let slug;
	export let timeToRead = 0;
	export let title;

	const defaultAlt =
		'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera';

	export let featuredImage = {
		url: featuredImageSrc,
		alt: defaultAlt,
		width: 672,
		height: 448,
		caption: 'Home page',
	};
	export let ogImage = {
		url: ogImageSrc,
		alt: defaultAlt,
	};
	export let ogSquareImage = {
		url: ogSquareImageSrc,
		alt: defaultAlt,
	};
	export let twitterImage = {
		url: twitterImageSrc,
		alt: defaultAlt,
	};
	const url = `${siteUrl}/${slug}`;
	const pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
	const openGraphProps = {
		article,
		datePublished,
		lastUpdated,
		image: ogImage,
		squareImage: ogSquareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url,
		...(article ? { datePublished, lastUpdated, facebookPage, facebookAuthorPage } : {}),
	};
	const schemaOrgProps = {
		article,
		author,
		breadcrumbs,
		datePublished,
		entity,
		lastUpdated,
		entityMeta,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt: siteShortTitle,
		siteUrl,
		title: pageTitle,
		url,
		facebookPage,
		linkedinProfile,
		twitterUsername,
	};
	const twitterProps = {
		article,
		author,
		twitterUsername,
		image: twitterImage,
		timeToRead,
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
</svelte:head>
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
