
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/search', '/advanced-search', '/my-names', '/popular-by-state'],
      },
    ],
    sitemap: [
      'https://nameverse.site/sitemap.xml',
      'https://nameverse.site/sitemap-index.xml',
    ],
  };
}
