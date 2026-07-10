export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import ServiceHeader from '../../components/ServiceHeader'
import { getDataContent } from '../../lib/sanity/queries'
import styles from './data.module.css'

export const metadata: Metadata = {
  title: 'Data & Integration Berlin — intersignum',
  description: 'REST API Design, Data Warehouse Architektur und ETL/ELT-Pipelines mit Open-Source-Technologien. Kein Vendor Lock-in.',
  alternates: {
    canonical: 'https://intersignum.de/data',
  },
  openGraph: {
    title: 'Data & Integration Berlin — intersignum',
    description: 'REST API Design, Data Warehouse Architektur und ETL/ELT-Pipelines mit Open-Source-Technologien. Kein Vendor Lock-in.',
    url: 'https://intersignum.de/data',
    type: 'website',
  },
}

export default async function Data() {
  const c = await getDataContent()

  return (
    <>
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

        {/* VERWANDTE LEISTUNGEN */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Verwandte Leistungen</h2>
            <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {[
                { href: '/it-beratung', num: '01', titel: 'IT-Beratung', text: 'Unabhängige Technologiestrategie für Ihre Daten- und Integrationsarchitektur.' },
                { href: '/webentwicklung', num: '02', titel: 'Webentwicklung', text: 'Frontend und Backend, das Ihre APIs und Datenpipelines sinnvoll nutzt.' },
                { href: '/ki-saas', num: '03', titel: 'KI & SaaS', text: 'KI-Systeme brauchen saubere Daten — wir liefern beides.' },
                { href: '/it-projektmanagement', num: '01a', titel: 'IT-Projektmanagement', text: 'Strukturierte Steuerung komplexer Daten- und Integrationsprojekte.' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className={styles.card} style={{ textDecoration: 'none', display: 'block' }}>
                  <div className={styles.cardNum}>{l.num}</div>
                  <h3>{l.titel}</h3>
                  <p>{l.text}</p>
                  <span style={{ fontSize: 14, color: '#D45F0A', fontWeight: 600, marginTop: 12, display: 'inline-block' }}>Mehr erfahren →</span>
                </Link>
              ))}
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
