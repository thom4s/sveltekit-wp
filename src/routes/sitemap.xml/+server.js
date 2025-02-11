import { PUBLIC_CANONICAL_ORIGIN } from '$env/static/public';
import { getAllProjets } from '$lib/queries/projets';
import { getAllPages } from '$lib/queries/pages';
import { getAllPosts } from '$lib/queries/posts';

export const prerender = true;

// Array returned from GitHub API can be empty.

/** @type {import('./$types').RequestHandler} */
export async function GET() {

	const allProjets = await getAllProjets();
	const projets = allProjets.nodes.map(
		(projet) => `\t<url>
		<loc>${new URL(projet.uri, PUBLIC_CANONICAL_ORIGIN).href}</loc>
		<lastmod>${projet.modified ? projet.modified : projet.date}</lastmod>
	</url>`
	);


	const allPosts = await getAllPosts();
	console.log(allPosts)
	const news = allPosts.edges.map(
		(news) => `\t<url>
		<loc>${new URL(news.node.uri, PUBLIC_CANONICAL_ORIGIN).href}</loc>
		<lastmod>${news.node.modified ? news.node.modified : news.node.date}</lastmod>
	</url>`
	);

	
	let contents = [...projets, news];



	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${contents.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	});
}
