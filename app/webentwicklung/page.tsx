import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import ServiceHeader from '../../components/ServiceHeader'
import styles from './web.module.css'

export const metadata: Metadata = {
  title: 'Webentwicklung Berlin — intersignum',
  description: 'Professionelle Websites und Web-Applikationen. Konzeption, Design, Entwicklung und Betrieb — alles aus einer Hand seit 2013.',
}

const karten = [
  { num: '01', titel: 'Next.js & React', text: 'Moderne Web-Applikationen mit Server-Side Rendering, statischer Generierung und optimaler Core Web Vitals Performance.' },
  { num: '02', titel: 'Corporate Websites', text: 'Professionelle Unternehmens­präsenzen mit CMS-Anbindung, mehrsprachiger Unterstützung und DSGVO-konformem Tracking.' },
  { num: '03', titel: 'Web-Applikationen', text: 'Komplexe SPA- und Fullstack-Anwendungen mit REST- oder GraphQL-APIs, Authentifizierung und skalierbarer Architektur.' },
  { num: '04', titel: 'E-Commerce', text: 'Online-Shops auf Basis von Shopify, WooCommerce oder maßgeschneiderten Lösungen — mit Fokus auf Conversion und Performance.' },
  { num: '05', titel: 'CMS-Integration', text: 'Headless-CMS-Lösungen mit Contentful, Sanity oder Storyblok — für redaktionelle Flexibilität ohne Entwickler­abhängigkeit.' },
  { num: '06', titel: 'DevOps & Betrieb', text: 'Deployment auf Vercel, AWS oder eigenen Servern — inklusive CI/CD-Pipelines, Monitoring und regelmäßiger Security-Updates.' },
]

export default function Webentwicklung() {
  return (
    <>
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
            <p className={styles.eyebrow}>02 — Leistung</p>
            <h1>Web-Projekte, die performen.</h1>
            <p className={styles.heroText}>
              Wir entwickeln Websites und Web-Applikationen, die nicht nur gut aussehen, sondern schnell laden, gut ranken und einfach zu pflegen sind. Von der Konzeption bis zum Betrieb — alles aus einer Hand.
            </p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
              alt="Webentwicklung intersignum"
            />
          </div>
        </div>

        {/* LEISTUNGEN */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Was wir entwickeln</h2>
            <div className={styles.grid}>
              {karten.map((k) => (
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
                  alt="Code intersignum"
                />
              </div>
              <div>
                <h2>Technologie, die zum Projekt passt.</h2>
                <p>
                  Wir verwenden keine One-size-fits-all-Lösung. Je nach Anforderung setzen wir auf Next.js, Nuxt, WordPress oder individuelle Architekturen — immer mit Blick auf Wartbarkeit, Performance und Zukunfts­sicherheit.
                </p>
                <p>
                  Unsere Kunden — von Medienunternehmen wie krone.at und Phoenix bis zu Finanzdienstleistern wie der DZ-Bank — schätzen vor allem eines: Wir liefern termingerecht und ohne böse Überraschungen.
                </p>
                <Link href="/#kontakt" className={styles.btnPrimary}>Gespräch vereinbaren →</Link>
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
                { href: '/it-beratung', num: '01', titel: 'IT-Beratung', text: 'Agile Projektsteuerung und unabhängige Technologiestrategie für Ihr Unternehmen.' },
                { href: '/it-projektmanagement', num: '01a', titel: 'IT-Projektmanagement', text: 'Dedizierte Projektleitung — von der Anforderungsanalyse bis zum Go-live.' },
                { href: '/ki-saas', num: '03', titel: 'KI & SaaS', text: 'KI-gestützte Erweiterungen und SaaS-Module für Ihre Web-Anwendungen.' },
                { href: '/data', num: '04', titel: 'Data & Integration', text: 'API-Design und Daten­integration für komplexe System­landschaften.' },
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
            <h2>Ihr nächstes Web-Projekt?</h2>
            <p>Schildern Sie uns Ihr Vorhaben — unverbindlich und kostenlos. Wir melden uns innerhalb eines Werktages.</p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Jetzt Kontakt aufnehmen →</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
