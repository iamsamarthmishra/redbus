import * as cheerio from 'cheerio';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return Response.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    // Basic validation to ensure it's a valid URL before fetching
    const parsedUrl = new URL(url);
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      return Response.json({ error: 'Invalid URL protocol' }, { status: 400 });
    }

    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (!res.ok) {
      return Response.json({ error: 'Failed to fetch the URL' }, { status: res.status });
    }

    const html = await res.text();
    const $ = cheerio.load(html);

    const getMetaTag = (name) => 
      $(`meta[property="og:${name}"]`).attr('content') ||
      $(`meta[name="twitter:${name}"]`).attr('content') ||
      $(`meta[name="${name}"]`).attr('content');

    const metadata = {
      title: getMetaTag('title') || $('title').text() || '',
      description: getMetaTag('description') || '',
      image: getMetaTag('image') || '',
      url: getMetaTag('url') || url,
      domain: parsedUrl.hostname.replace(/^www\./, ''),
    };

    // Make relative image URLs absolute
    if (metadata.image && !metadata.image.startsWith('http')) {
      metadata.image = new URL(metadata.image, parsedUrl.origin).href;
    }

    return Response.json(metadata, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    });
  } catch (error) {
    console.error('Error fetching link preview:', error);
    return Response.json({ error: 'Failed to parse metadata' }, { status: 500 });
  }
}
