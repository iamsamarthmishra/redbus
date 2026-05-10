

const cities = [
  'mumbai', 'delhi', 'bangalore', 'chennai', 'hyderabad',
  'pune', 'kolkata', 'jaipur', 'lucknow', 'ahmedabad',
  'indore', 'bhopal', 'nagpur', 'gwalior', 'patna',
];

const refundDays = ['7', '14', '21', '30', '45', '60', '90'];

export default function sitemap() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shit-bus.in';

  const staticPages = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/complaints`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/support-response-time`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/timeline`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const cityPages = cities.map((city) => ({
    url: `${SITE_URL}/complaints/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const refundPages = refundDays.map((days) => ({
    url: `${SITE_URL}/refund-delay/${days}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages, ...refundPages];
}
