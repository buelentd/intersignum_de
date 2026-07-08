import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import ServiceHeader from '../../components/ServiceHeader'
import { getITBeratungContent } from '../../lib/sanity/queries'
import styles from './it_beratung.module.css'

export const metadata: Metadata = {
  title: { absolute: 'IT-Beratung — intersignum' },
  description: 'Agile Projektsteuerung, Prozessanalyse und unabhängige Technologiestrategie. Ihre Projekte bleiben im Rahmen — ohne Überraschungen.',
  alternates: { canonical: 'https://intersignum.de/it-beratung' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://intersignum.de/it-beratung',
    siteName: 'intersignum',
    title: 'IT-Beratung — intersignum',
    description: 'Agile Projektsteuerung, Prozessanalyse und unabhängige Technologiestrategie. Ihre Projekte bleiben im Rahmen — ohne Überraschungen.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'IT-Beratung — intersignum' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT-Beratung — intersignum',
    description: 'Agile Projektsteuerung, Prozessanalyse und unabhängige Technologiestrategie.',
    images: ['/og-image.png'],
  },
}

export default async function ITBeratung() {
  const c = await getITBeratungContent()

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://intersignum.de' },
      { '@type': 'ListItem', position: 2, name: 'IT-Beratung', item: 'https://intersignum.de/it-beratung' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceHeader current="/it-beratung" />

      <main>
        {/* HERO */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.breadcrumb}>
              <Link href="/">Startseite</Link>
              <span>›</span>
              <span>IT-Beratung</span>
            </div>
            <p className={styles.eyebrow}>{c.hero.eyebrow}</p>
            <h1>{c.hero.title}</h1>
            <p className={styles.heroText}>{c.hero.subtitle}</p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
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
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
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
