import { headers } from 'next/headers';

export default function robots() {
  const headersList = headers();
  const domain = headersList.get('host') || 'shit-bus.in';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const SITE_URL = `${protocol}://${domain}`;

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
