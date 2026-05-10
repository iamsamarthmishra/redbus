

export default function robots() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shit-bus.in';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/static/', '/_next/image/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
