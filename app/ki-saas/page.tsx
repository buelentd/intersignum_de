import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import ServiceHeader from '../../components/ServiceHeader'
import { getKISaasContent } from '../../lib/sanity/queries'
import styles from './ki_saas.module.css'

export const metadata: Metadata = {
  title: { absolute: 'KI & SaaS Beratung — pragmatisch umgesetzt | intersignum' },
  description: 'KI-Integration und SaaS-Produktentwicklung ohne Hype. Automatisierung und datengetriebene Entscheidungen — pragmatisch, messbar, in time und in budget.',
  alternates: { canonical: 'https://intersignum.de/ki-saas' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://intersignum.de/ki-saas',
    siteName: 'intersignum',
    title: 'KI & SaaS — intersignum',
    description: 'KI-gestützte Lösungen und SaaS-Produkte für Ihre Prozesse. Automatisierung und datengetriebene Entscheidungen — pragmatisch umgesetzt.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'KI & SaaS — intersignum' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KI & SaaS — intersignum',
    description: 'KI-gestützte Lösungen und SaaS-Produkte für Ihre Prozesse. Automatisierung und datengetriebene Entscheidungen.',
    images: ['/opengraph-image'],
  },
}

export default async function KiSaas() {
  const c = await getKISaasContent()

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://intersignum.de' },
      { '@type': 'ListItem', position: 2, name: 'KI & SaaS', item: 'https://intersignum.de/ki-saas' },
    ],
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'KI & SaaS',
    description: 'KI-Integration und SaaS-Produktentwicklung: Automatisierung, datengetriebene Entscheidungen, pragmatisch umgesetzt.',
    provider: { '@type': 'ProfessionalService', name: 'intersignum', url: 'https://intersignum.de' },
    areaServed: 'DE',
    serviceType: 'KI-Beratung und SaaS-Entwicklung',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServiceHeader current="/ki-saas" />

      <main>
        {/* HERO */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.breadcrumb}>
              <Link href="/">Startseite</Link>
              <span>›</span>
              <span>KI & SaaS</span>
            </div>
            <p className={styles.eyebrow}>{c.hero.eyebrow}</p>
            <h1>{c.hero.title}</h1>
            <p className={styles.heroText}>{c.hero.subtitle}</p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80"
              alt={c.hero.title}
            />
          </div>
        </div>

        {/* LEISTUNGEN */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>{c.leistungenTitel}</h2>
            <div className={styles.grid}>
              {c.karten.map((k) => (
                <div key={k.num} className={styles.card}>
                  <div className={styles.cardNum}>{k.num}</div>
                  <h3>{k.titel}</h3>
                  <p>{k.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABSCHNITT */}
        <section className={styles.sectionAlt}>
          <div className={styles.sectionInner}>
            <div className={styles.twoCol}>
              <div>
                <h2>{c.abschnitt.titel}</h2>
                <p>{c.abschnitt.text1}</p>
                <p>{c.abschnitt.text2}</p>
                <Link href="/#kontakt" className={styles.btnPrimary} style={{ marginTop: '32px' }}>
                  Gespräch vereinbaren →
                </Link>
              </div>
              <div className={styles.imageWrap}>
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80"
                  alt={c.abschnitt.titel}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.sectionInner}>
            <h2>{c.cta.titel}</h2>
            <p>{c.cta.text}</p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Jetzt Kontakt aufnehmen →</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
