'use client';

export default function JsonLd() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shit-bus.in';

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'shit*bus — Consumer Awareness',
    alternateName: 'RedBus Complaints Platform',
    url: SITE_URL,
    description:
      'Documented RedBus customer complaints: delayed refunds, unresolved support tickets, cancelled buses, and automated support failures. Real stories from real passengers across India.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/complaints/{search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'shit*bus Consumer Awareness Initiative',
    url: SITE_URL,
    description:
      'A satirical consumer-awareness platform documenting real customer experiences with Indian bus booking services. Built with Next.js and 13+ days of unresolved patience.',
    foundingDate: '2026-05-08',
    sameAs: [],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is my bus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Philosophically or geographically? Based on documented customer experiences, RedBus live tracking frequently shows incorrect or frozen locations. Multiple customers report GPS data being hours behind actual bus positions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why was my seat changed without notice?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Seat changes without notification are among the most common RedBus complaints. Customers report booking lower berths and being assigned upper berths, or having their confirmed seats given to other passengers without any prior communication.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is the bus driver not answering calls?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Driver unreachability is a widely reported issue. Customers across consumer forums document instances where driver contact numbers provided by RedBus are either switched off, unreachable, or belong to someone else entirely.',
        },
      },
      {
        '@type': 'Question',
        name: 'When will I get my RedBus refund?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Based on documented customer experiences, RedBus refunds frequently take 15-45 days despite the promised 24-48 hour timeline. Many customers report refunds pending for weeks with repeated "escalation" messages but no actual resolution.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is RedBus tracking frozen or showing wrong location?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Multiple customers report RedBus GPS tracking freezing mid-journey, showing wrong locations, or not updating for hours. This makes it impossible to coordinate pickup or estimate arrival times accurately.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I trust the RedBus arrival time estimate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Based on widespread customer reports, RedBus arrival time estimates are frequently inaccurate. Customers document delays of 2-6 hours with no updates, while the app continues showing the original estimated time.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to file a complaint against RedBus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can file a complaint via RedBus app support chat, email, or call their customer care number. If unresolved, escalate to the National Consumer Helpline (1800-11-4000), file on ConsumerComplaints.in, or approach the Consumer Disputes Redressal Forum under the Consumer Protection Act, 2019.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does RedBus keep saying 24-48 hours for every issue?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The "24-48 hours" response is the most commonly reported copy-paste reply from RedBus customer support. Customers across platforms document receiving this exact response repeatedly for weeks without any actual resolution of their complaint.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'RedBus Customer Complaints — Delayed Refunds, Ignored Tickets & Support Failures in 2026',
    description:
      'A comprehensive documentation of real RedBus customer complaints including delayed refunds, cancelled buses, unresponsive support, and systematic failure to resolve issues within promised timelines.',
    author: {
      '@type': 'Organization',
      name: 'shit*bus Consumer Awareness Initiative',
    },
    publisher: {
      '@type': 'Organization',
      name: 'shit*bus Consumer Awareness Initiative',
    },
    datePublished: '2026-05-08',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SITE_URL,
    },
    articleSection: 'Consumer Complaints',
    keywords:
      'redbus complaint, redbus refund, redbus customer care, redbus review, bus booking complaint india',
  };

  const aggregateRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'RedBus Customer Support Experience',
    description: 'Aggregate customer experience rating based on documented complaints and real passenger stories.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '1.2',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '15',
      reviewCount: '15',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
    </>
  );
}
