import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import ServiceHeader from '../../components/ServiceHeader'
import { getDataContent } from '../../lib/sanity/queries'
import styles from './data.module.css'

export const metadata: Metadata = {
  title: { absolute: 'Data & Integration — API, Data Warehouse, ETL | intersignum' },
  description: 'Datenarchitektur und Systemintegration: REST API Design, Data Warehouse, ETL/ELT mit dbt. Open-Source, herstellerunabhängig, nachhaltig gebaut.',
  alternates: { canonical: 'https://intersignum.de/data' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://intersignum.de/data',
    siteName: 'intersignum',
    title: 'Data & Integration — intersignum',
    description: 'REST API Design, Data Warehouse Architektur, ETL/ELT Pipelines mit dbt und Open-Source-Technologien.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Data & Integration — intersignum' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data & Integration — intersignum',
    description: 'REST API Design, Data Warehouse Architektur, ETL/ELT Pipelines mit dbt.',
    images: ['/opengraph-image'],
  },
}

export default async function Data() {
  const c = await getDataContent()

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://intersignum.de' },
      { '@type': 'ListItem', position: 2, name: 'Data & Integration', item: 'https://intersignum.de/data' },
    ],
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Data & Integration',
    description: 'Datenarchitektur und Systemintegration: REST API Design, Data Warehouse, ETL/ELT Pipelines mit dbt.',
    provider: { '@type': 'ProfessionalService', name: 'intersignum', url: 'https://intersignum.de' },
    areaServed: 'DE',
    serviceType: 'Data Engineering und API Integration',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServiceHeader current="/data" />

      <main>
        {/* HERO */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.breadcrumb}>
              <Link href="/">Startseite</Link>
              <span>›</span>
              <span>Data & Integration</span>
            </div>
            <p className={styles.eyebrow}>{c.hero.eyebrow}</p>
            <h1>{c.hero.title}</h1>
            <p className={styles.heroText}>{c.hero.subtitle}</p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
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
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
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
