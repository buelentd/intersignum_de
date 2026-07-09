import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import ServiceHeader from '../../components/ServiceHeader'
import styles from './it_beratung.module.css'

export const metadata: Metadata = {
  title: 'IT-Beratung Berlin — intersignum',
  description: 'Agile Projektsteuerung, Prozessanalyse und unabhängige Technologiestrategie seit 2013. Ihre IT-Projekte bleiben im Rahmen — ohne Überraschungen.',
}

const karten = [
  { num: '01', titel: 'Agile Projektsteuerung', text: 'Scrum, Kanban oder hybride Methoden — wir wählen das Rahmenwerk, das zu Ihrem Team und Ihren Zielen passt. Iterative Sprints statt großem Knall am Ende.' },
  { num: '02', titel: 'Prozessanalyse & Optimierung', text: 'Wir analysieren bestehende Abläufe, identifizieren Engpässe und leiten konkrete Maßnahmen ab — messbar, priorisiert und umsetzbar.' },
  { num: '03', titel: 'Technologieauswahl', text: 'Vendor-neutral: Wir haben keine Partnerschafts­bindungen. Unsere Empfehlungen basieren ausschließlich auf Ihren Anforderungen und Best Practices.' },
  { num: '04', titel: 'Budget- & Zeitplanung', text: 'Realistische Roadmaps, Aufwandsschätzungen und regelmäßige Reviews halten Scope, Kosten und Timeline unter Kontrolle.' },
  { num: '05', titel: 'Stakeholder-Kommunikation', text: 'Wir übersetzen technische Komplexität in verständliche Entscheidungsgrundlagen für Management und Fachbereiche.' },
  { num: '06', titel: 'Quality Assurance', text: 'Testkonzepte, Code-Reviews und strukturierte Abnahmen sichern die Qualität — von der Anforderung bis zum Go-live.' },
]

export default function ITBeratung() {
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
            <p className={styles.eyebrow}>01 — Leistung</p>
            <h1>IT-Projekte, die im Rahmen bleiben.</h1>
            <p className={styles.heroText}>
              Seit 2013 begleiten wir Unternehmen bei anspruchsvollen IT-Projekten — agil, herstellerunabhängig und mit klarem Fokus auf Ergebnis. Kein Vendor Lock-in, keine versteckten Agenden.
            </p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="IT-Beratung intersignum"
            />
          </div>
        </div>

        {/* LEISTUNGEN */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Was wir für Sie tun</h2>
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
              <div>
                <h2>Unabhängig. Erfahren. Direkt.</h2>
                <p>
                  intersignum ist kein Systemhaus und kein Software-Hersteller. Wir haben keine Zertifizierungs­verpflichtungen gegenüber Herstellern, keine Provisionen für Lizenzen und keine eigenen Produkte zu verkaufen. Das macht unsere Beratung frei von Interessenkonflikten.
                </p>
                <p>
                  Über zwölf Jahre und mehr als 50 Projekte haben uns gelehrt: Die meisten IT-Projekte scheitern nicht an Technologie, sondern an schlechter Planung, unklaren Anforderungen und fehlender Kommunikation. Genau dort setzen wir an.
                </p>
                <Link href="/#kontakt" className={styles.btnPrimary} style={{ marginTop: '32px' }}>
                  Gespräch vereinbaren →
                </Link>
              </div>
              <div className={styles.imageWrap}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                  alt="Beratungsgespräch intersignum"
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
            <h2>Bereit für Ihr nächstes IT-Projekt?</h2>
            <p>Schildern Sie uns Ihr Vorhaben — unverbindlich und kostenlos. Wir melden uns innerhalb eines Werktages.</p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Jetzt Kontakt aufnehmen →</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
