import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import ServiceHeader from '../../components/ServiceHeader'
import styles from './blog.module.css'

export const metadata: Metadata = {
  title: { absolute: 'Blog — intersignum' },
  description: 'Praxiswissen zu IT-Projektmanagement, Digitalisierung und der Schnittstelle zwischen Business und IT. Kein Consulting-Sprech, nur was funktioniert.',
  alternates: { canonical: 'https://intersignum.de/blog' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://intersignum.de/blog',
    siteName: 'intersignum',
    title: 'Blog — intersignum',
    description: 'Praxiswissen zu IT-Projektmanagement, Digitalisierung und der Schnittstelle zwischen Business und IT.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Blog — intersignum' }],
  },
}

const artikel = [
  {
    slug: 'warum-it-projekte-scheitern',
    titel: 'Warum IT-Projekte scheitern — und was dagegen hilft',
    beschreibung: 'Die häufigsten Fehler die wir in 50+ Projekten beobachtet haben. Konkret, ohne Consulting-Sprech.',
    datum: '2026-06-15',
    lesezeit: '8 min',
    kategorie: 'Projektmanagement',
  },
]

export default function Blog() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://intersignum.de' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://intersignum.de/blog' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceHeader current="/blog" />

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.breadcrumb}>
              <Link href="/">Startseite</Link>
              <span>›</span>
              <span>Blog</span>
            </div>
            <p className={styles.eyebrow}>Aus der Praxis</p>
            <h1>IT-Projektmanagement.<br />Was wirklich funktioniert.</h1>
            <p className={styles.headerText}>
              Kein Consulting-Sprech. Kein Buzzword-Bingo. Nur was wir in über zwölf Jahren
              und 50+ Projekten an der Schnittstelle zwischen Business und IT gelernt haben.
            </p>
          </div>
        </div>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.artikelGrid}>
              {artikel.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className={styles.artikelCard}>
                  <div className={styles.artikelMeta}>
                    <span className={styles.kategorie}>{a.kategorie}</span>
                    <span className={styles.lesezeit}>{a.lesezeit} Lesezeit</span>
                  </div>
                  <h2>{a.titel}</h2>
                  <p>{a.beschreibung}</p>
                  <span className={styles.readMore}>Weiterlesen →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
