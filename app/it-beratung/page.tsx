import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import ServiceHeader from '../../components/ServiceHeader'
import { getITBeratungContent } from '../../lib/sanity/queries'
import styles from './it_beratung.module.css'

export const metadata: Metadata = {
  title: 'IT-Beratung Berlin — intersignum',
  description: 'Agile Projektsteuerung, Prozessanalyse und unabhängige Technologiestrategie seit 2013. Ihre IT-Projekte bleiben im Rahmen — ohne Überraschungen.',
}

export default async function ITBeratung() {
  const c = await getITBeratungContent()

  return (
    <>
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

        {/* VERWANDTE LEISTUNGEN */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Verwandte Leistungen</h2>
            <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {[
                { href: '/it-projektmanagement', num: '01a', titel: 'IT-Projektmanagement', text: 'Dedizierte Projektleitung für komplexe Vorhaben — mit klarer Verantwortung und Reporting.' },
                { href: '/webentwicklung', num: '02', titel: 'Webentwicklung', text: 'Von der Konzeption bis zum Betrieb — professionelle Web-Applikationen aus einer Hand.' },
                { href: '/ki-saas', num: '03', titel: 'KI & SaaS', text: 'Maßgeschneiderte KI-Anwendungen und SaaS-Produkte für Ihre Prozesse.' },
                { href: '/data', num: '04', titel: 'Data & Integration', text: 'REST APIs, Data Warehouse Architektur und systemübergreifende Datenpipelines.' },
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
