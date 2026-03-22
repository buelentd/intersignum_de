// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://intersignum.de'),
  title: {
    default: 'intersignum — IT-Projekte, die in time und in budget bleiben.',
    template: '%s — intersignum',
  },
  description: 'IT-Beratung, Webentwicklung und KI & SaaS aus Berlin. Über 12 Jahre Erfahrung, agil und herstellerunabhängig. Von der Strategie bis zur Umsetzung.',
  keywords: ['IT-Beratung', 'Webentwicklung', 'KI', 'SaaS', 'Berlin', 'Next.js', 'HubSpot', 'Personio', 'Data Warehouse', 'API Integration'],
  authors: [{ name: 'intersignum', url: 'https://intersignum.de' }],
  creator: 'intersignum',
  publisher: 'intersignum',
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
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://intersignum.de',
    siteName: 'intersignum',
    title: 'intersignum — IT-Projekte, die in time und in budget bleiben.',
    description: 'IT-Beratung, Webentwicklung und KI & SaaS aus Berlin. Über 12 Jahre Erfahrung, agil und herstellerunabhängig.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'intersignum — IT-Beratung Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'intersignum — IT-Projekte, die in time und in budget bleiben.',
    description: 'IT-Beratung, Webentwicklung und KI & SaaS aus Berlin.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://intersignum.de',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'intersignum',
              url: 'https://intersignum.de',
              description: 'IT-Beratung, Webentwicklung und KI & SaaS aus Berlin.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Pasewalker Str. 15',
                addressLocality: 'Berlin',
                postalCode: '13127',
                addressCountry: 'DE',
              },
              areaServed: 'DE',
              knowsAbout: [
                'IT-Beratung',
                'Webentwicklung',
                'KI-Integration',
                'SaaS',
                'Data Warehouse',
                'API Integration',
                'HubSpot',
                'Personio',
              ],
              foundingDate: '2013',
              sameAs: [
                'https://www.linkedin.com/company/34578590/',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
