import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import JsonLd from '../components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shit-bus.in';

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'RedBus Complaints — Delayed Refunds, Ignored Tickets & Real Customer Stories (2026)',
    template: '%s | shit*bus — Consumer Awareness',
  },

  description:
    'Documented RedBus customer complaints: delayed refunds, unresolved support tickets, cancelled buses with no notice, and 13+ days of "24-48 hours" replies. Real stories, real frustration, real data from real passengers across India.',

  keywords: [
    'redbus complaint',
    'redbus refund',
    'redbus customer care',
    'redbus review',
    'redbus refund not received',
    'redbus complaint number',
    'redbus support not responding',
    'redbus delayed refund',
    'redbus issue today',
    'redbus bus cancelled',
    'redbus scam',
    'redbus worst experience',
    'redbus complaint 2026',
    'bus booking refund issue india',
    'redbus complaint forum',
    'redbus unresolved ticket',
    'redbus consumer forum',
    'redbus 24-48 hours reply',
    'redbus customer support failure',
    'redbus bus not arrived',
  ],

  authors: [{ name: 'shit*bus — Consumer Awareness Initiative' }],
  creator: 'shit*bus',
  publisher: 'shit*bus Consumer Awareness',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'shit*bus — Consumer Awareness',
    title: 'RedBus Complaints — Delayed Refunds, Ignored Tickets & Real Customer Stories',
    description:
      '13+ days of unresolved complaints, delayed refunds, copy-paste support replies. Documented customer frustration from real passengers. Every ignored complaint became a line of code.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'shit*bus — RedBus Customer Complaints & Consumer Awareness Platform',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'RedBus Complaints — Real Customer Stories They Don\'t Want You To See',
    description:
      'Delayed refunds, cancelled buses, ignored tickets, 24-48 hour lies. 13+ days of documented frustration from real customers across India.',
    images: ['/og-image.png'],
    creator: '@shitbus',
  },

  category: 'Consumer Awareness',

  other: {
    'google-site-verification': 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#e11d2e',
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-white font-body grid-bg">
        <div className="grain-overlay" />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
