import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import ServiceHeader from '../../components/ServiceHeader'
import { getWebentwicklungContent } from '../../lib/sanity/queries'
import styles from './web.module.css'

export const metadata: Metadata = {
  title: { absolute: 'Webentwicklung Berlin — Next.js & moderne Technologien | intersignum' },
  description: 'Professionelle Webentwicklung in Berlin: Next.js, React, performante Web-Applikationen. Konzeption, Entwicklung und Betrieb aus einer Hand — ohne Vendor Lock-in.',
  alternates: { canonical: 'https://intersignum.de/webentwicklung' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://intersignum.de/webentwicklung',
    siteName: 'intersignum',
    title: 'Webentwicklung — intersignum',
    description: 'Professionelle Websites und Web-Applikationen. Konzeption, Design, Entwicklung und Betrieb — alles aus einer Hand.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Webentwicklung — intersignum' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webentwicklung — intersignum',
    description: 'Professionelle Websites und Web-Applikationen. Konzeption, Design, Entwicklung und Betrieb.',
    images: ['/og-image.png'],
  },
}

export default async function Webentwicklung() {
  const c = await getWebentwicklungContent()

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://intersignum.de' },
      { '@type': 'ListItem', position: 2, name: 'Webentwicklung', item: 'https://intersignum.de/webentwicklung' },
    ],
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Webentwicklung',
    description: 'Professionelle Webentwicklung in Berlin: Next.js, React, performante Web-Applikationen.',
    provider: { '@type': 'ProfessionalService', name: 'intersignum', url: 'https://intersignum.de' },
    areaServed: 'DE',
    serviceType: 'Webentwicklung',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServiceHeader current="/webentwicklung" />

      <main>
        {/* HERO */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.breadcrumb}>
              <Link href="/">Startseite</Link>
              <span>›</span>
              <span>Webentwicklung</span>
            </div>
            <p className={styles.eyebrow}>{c.hero.eyebrow}</p>
            <h1>{c.hero.title}</h1>
            <p className={styles.heroText}>{c.hero.subtitle}</p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
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
              <div className={styles.imageWrap}>
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"
                  alt={c.abschnitt.titel}
                />
              </div>
              <div>
                <h2>{c.abschnitt.titel}</h2>
                <p>{c.abschnitt.text1}</p>
                <p>{c.abschnitt.text2}</p>
                <Link href="/#kontakt" className={styles.btnPrimary}>Gespräch vereinbaren →</Link>
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
