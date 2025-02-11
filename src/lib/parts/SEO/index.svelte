<script>
	// https://github.com/rodneylab/sveltekit-seo/blob/main/src/routes/contact/%2Bpage.svelte

    import { page } from '$app/stores';
	import { config } from '$lib/config/website';
	import { VERTICAL_LINE_ENTITY } from '$lib/constants/entities';

	import ogSquareImageSrc from '$lib/assets/logo_anha_nb.png';
	import ogImageSrc from '$lib/assets/logo_anha_nb.png';
	import twitterImageSrc from '$lib/assets/logo_anha_nb.png';
	import featuredImageSrc from '$lib/assets/logo_anha_nb.png';

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
	} = $config;

	export let article = false;
	export let breadcrumbs = [];
	export let entityMeta = null;

	$: title = $page.data.page ? $page.data.page.title : '';
	$: metadescription = $page.data.page ? $page.data.page.seo.metaDesc : '';
	$: keywords = $page.data.page ? $page.data.page.seo.metaKeywords : '';
	$: slug = $page.data.page ? $page.data.page.uri : '';
	$: datePublished = $page.data.page ? $page.data.page.date : '';
	$: lastUpdated = $page.data.page ? $page.data.page.modified : '';
	$: timeToRead = $page.data.page ? $page.data.page.timeToRead : '';

	const defaultAlt =
		'Anha - From Design to Manufacture';

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
	$: url = `${siteUrl}${slug}`;
	$: pageTitle = `${title} ${VERTICAL_LINE_ENTITY} ${siteTitle}`;
	$: openGraphProps = {
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
	$: schemaOrgProps = {
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
	$: twitterProps = {
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
	<meta name="keywords" content={keywords} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
</svelte:head>
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
