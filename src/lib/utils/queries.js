/**
 * Decorate SEO title.
 * @param {string} title
 */
export default function (title) {
	return `${title} – Anha`;
}

export const basic_fields_string = `
	id
    databaseId
	slug
	content
	title
	date
	modified
	uri
	template {
		templateName
	}
	contentType {
		node {
			name
		}
	}
`;

export const extended_fields_string = `
	id
    databaseId
	slug
	content
	title
	date
	modified
	excerpt
	uri
	template {
		templateName
	}
	contentType {
		node {
			name
		}
	}
`;

export const author_fields_string = `
	author {
		node {
		name
		}
	}
`

export const taxonomies_fields_string = `
	informationsProjet {
        meta_date
        tax_client {
            nodes {
                id
                slug
                name
            }
        }
		tax_secteur {
			nodes {
                id
                slug
                name
			}
		}
		tax_savoirfaire {
			nodes {
                id
                slug
                name
			}
		}
        tax_materiau {
			nodes {
                id
                slug
                name
            }
        }
		tax_client {
			nodes {
                id
                slug
                name
            }
        }
		ratioFeaturedimg
		visuels {
			design
			ratio
			visuel {
				nodes {
					caption
					altText
					sizes
					srcSet
					sourceUrl
				}
			}
		}
	}
`

export const featuredImage_fields_string = `
	featuredImage {
		node {
			caption
			altText
			sizes
			srcSet
			sourceUrl
		}
	}
`

export const contentType_fields_string = `
	contentType {
		node {
			name
		}
	}
`

export const seo_query_string = `
		seo {
			metaDesc
			metaKeywords
			metaRobotsNofollow
			metaRobotsNoindex
			title
			readingTime
			opengraphTitle
			opengraphType
			opengraphUrl
			opengraphSiteName
			opengraphPublisher
			opengraphPublishedTime
			opengraphModifiedTime
			opengraphImage {
				altText
				sourceUrl
			}
			opengraphDescription
			opengraphAuthor
			breadcrumbs {
				url
				text
			}
			canonical
		}
	`;

//https://github.com/wp-graphql/wp-graphql-acf/blob/develop/docs/fields/flexible-content.md
export const pushContact_query_string = `
	... on ContenusFlexiblesContenusFlexiblesPushcontactLayout {
		__typename
		labelDuBouton
		text
		titre
	}
`;

export const references_query_string = `
	... on ContenusFlexiblesContenusFlexiblesReferencesLayout {
		__typename
		titre
		ligneLogos {
			logos {
				nodes {
					sourceUrl(size: MEDIUM)
				}
			}
		}
	}
`;

export const pushNews_query_string = `
	... on ContenusFlexiblesContenusFlexiblesPushnewsLayout {
		__typename
		titre
		news {
			nodes {
				uri
				link
				date
				... on Post {
					id
					link
					title
					informationsNews {
						date
						fieldGroupName
						labelDuLien
						lien
						lieu
						video
						plateforme
					}
					${featuredImage_fields_string}
				}
			}
		}
	}
`

export const pushPages_query_string = `
	... on ContenusFlexiblesContenusFlexiblesPushpagesLayout {
		__typename
		titre
		pages {
			nodes {
				... on Page {
					id
					date
					title
					link
					content
					excerpt
					${featuredImage_fields_string}
				}
			}
		}
	}
`

export const richtext_query_string = `
	... on ContenusFlexiblesContenusFlexiblesRichtextLayout {
		__typename
		titre
		contentOne
		contentTwo
	}
`


// BLOC PUSH PROJETS

const string_projets = `
	__typename
	titre
	link {
		nodes {
		  ... on Page {
			id
			title
		  }
		  uri
		}
	}
	label
	projets {
		nodes {
			... on Projet {
				id
				date
				title
				link
				uri
				${taxonomies_fields_string}
				${featuredImage_fields_string}
			}
		}
	}
`

export const PushProjets_query_string = `
	... on ContenusFlexiblesContenusFlexiblesPushprojetsLayout {
		${string_projets}
	}
`
export const StagedPushProjets_query_string = `
	... on ContenusFlexiblesStagedStagesContenusFlexiblesPushprojetsLayout {
		${string_projets}
	}
`


// BLOC Video

const string_vid = `
	__typename
	titre
	video
	plateforme
`

export const video_query_string = `
	... on ContenusFlexiblesContenusFlexiblesVideoLayout {
		${string_vid}
	}
`
export const Stagedvideo_query_string = `
	... on ContenusFlexiblesStagedStagesContenusFlexiblesVideoLayout {
		${string_vid}
	}
`


// BLOC TITRE VISUEL TEXTE

const string_tvt = `
	__typename
	texte
	design
	img_ratio
	visuel {
		node {
					caption
					altText
					sizes
					srcSet
					sourceUrl
		}
	}
`

export const BlocTitreVisuelTexte_query_string = `
	... on ContenusFlexiblesContenusFlexiblesBlocTitreVisuelTexteLayout {
		${string_tvt}
	}
`
export const StagedBlocTitreVisuelTexte_query_string = `
	... on ContenusFlexiblesStagedStagesContenusFlexiblesBlocTitreVisuelTexteLayout {
		${string_tvt}
	}
`



// BLOC TITRE VISUEL TEXTE

const string_collabs = `
	__typename
	collaborateur {
		job
		name
		details
		photo {
			node {
				sourceUrl
			}
		}
	}
`

export const StagedCollaborateurs_query_string = `
	... on ContenusFlexiblesStagedStagesContenusFlexiblesCollaborateursLayout {
		${string_collabs}
	}
`


export const hpCover_Query_string = `
	... on ContenusFlexiblesContenusFlexiblesHpCoverLayout {
		__typename
		cover_text
		left_title
		right_title
		cover_img {
			node {
				sourceUrl
				srcSet
			}
		}
	}
`


// FLEXIBLE CONTENTS

export const flexibleContents_query_string = `
	contenusFlexibles {
		contenusFlexibles {
			${pushContact_query_string}
			${pushNews_query_string}
			${pushPages_query_string}
			${PushProjets_query_string}
			${references_query_string}
			${richtext_query_string}
			${video_query_string}
			${BlocTitreVisuelTexte_query_string}
			${hpCover_Query_string}
		}
  	}
`


// STAGED CONTENTS
export const stagedContents_query_string = `
	contenusFlexiblesStaged {
		stages {
			stickyContent
			positionsticky
			contenusFlexibles {
				${StagedBlocTitreVisuelTexte_query_string}
				${StagedPushProjets_query_string}
				${StagedCollaborateurs_query_string}
			}
		}
  	}
`






/*
 * SAVOIR FAIRE
 ******************/

export const groupeBlocTitreVisuel_query_string = `
	__typename
		texte

		visuel {
			node {
					caption
					altText
					sizes
					srcSet
					sourceUrl
			}
		}
`

export const groupeBlocsProjets_query_string = `
	__typename
	titre
	link {
		nodes {
		  ... on Page {
			id
			title
		  }
		  uri
		}
	}
	label
	projets {
		nodes {
			... on Projet {
				id
				date
				title
				link
				uri
				${taxonomies_fields_string}
				${featuredImage_fields_string}
			}
		}
	}
`


export const savoirfaire_query_string = `

	contenusSavoirFaire {
		leftCol {
			titre
			chapo
			visuel {
				node {
					caption
					altText
					sizes
					srcSet
					sourceUrl
				}
			}
			contenusFlexibles {
				__typename
				... on ContenusSavoirFaireLeftColContenusFlexiblesBlocTitreVisuelTexteLayout {
					${string_tvt}
				}
				... on ContenusSavoirFaireLeftColContenusFlexiblesPushprojetsLayout {
					${groupeBlocsProjets_query_string}
				}
			}
		}
		rightCol {
			titre
			chapo
			visuel {
				node {
					caption
					altText
					sizes
					srcSet
					sourceUrl
				}
			}
			contenusFlexibles {
				__typename
				... on ContenusSavoirFaireRightColContenusFlexiblesBlocTitreVisuelTexteLayout {
					${string_tvt}
				}
				... on ContenusSavoirFaireRightColContenusFlexiblesPushprojetsLayout {
					${groupeBlocsProjets_query_string}
				}
			}
		}
	}
`