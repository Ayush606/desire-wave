// netlify/edge-functions/sitemap.ts
const sanityBaseUrl = 'https://1qnc73ya.api.sanity.io/v2022-03-07/data/query/production?query=';
const query = '*[_type == "category" && title != "Best Seller"].title';
const BASE_URL = 'https://www.desirewave.in';

export default async () => {
    const pages = [ 'about', 'contact', 'products'];
    const categoriesData = await fetch(`${sanityBaseUrl}${encodeURIComponent(query)}`);
    const categories = await categoriesData.json()

    const baseEntry = `<url>
      <loc>${BASE_URL}/</loc>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>`;

    const pagesEntries = pages.map(page => `
    <url>
      <loc>${BASE_URL}/${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `.trim());


  const categoriesEntries = categories.result.map(category => `
    <url>
      <loc>${BASE_URL}/products/${category.toLowerCase().replaceAll(' ', '-')}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `.trim());

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    ${baseEntry}

    ${pagesEntries.join('\n  ')}

    ${categoriesEntries.join('\n  ')}

</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0', // 24-hour cache
    },
  });
};

export const config = { path: "/sitemap.xml" };