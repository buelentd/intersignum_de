import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import ServiceHeader from '../../components/ServiceHeader'
import styles from './ki_saas.module.css'

export const metadata: Metadata = {
  title: 'KI & SaaS Berlin — intersignum',
  description: 'Maßgeschneiderte KI-Anwendungen und SaaS-Produkte für Unternehmen. DSGVO-konform, praxisnah und nahtlos integriert.',
}

const karten = [
  { num: '01', titel: 'KI-gestützte Automatisierung', text: 'Dokumentenverarbeitung, E-Mail-Routing, Reporting-Generierung — wir automatisieren repetitive Prozesse mit KI, die wirklich funktioniert.' },
  { num: '02', titel: 'LLM-Integration', text: 'GPT-4, Claude, Gemini oder Open-Source-Modelle: Wir integrieren Large Language Models sicher und DSGVO-konform in Ihre bestehenden Systeme.' },
  { num: '03', titel: 'SaaS-Produkt­entwicklung', text: 'Von der Idee bis zum marktfähigen SaaS-Produkt — Architektur, Multi-Tenancy, Billing-Integration und Launch-Strategie aus einer Hand.' },
  { num: '04', titel: 'RAG & Wissensdatenbanken', text: 'Retrieval-Augmented Generation für interne Wissensdatenbanken, Support-Bots und Dokumentensuche — auf Basis Ihrer eigenen Daten.' },
  { num: '05', titel: 'KI-Strategie & Potenzialanalyse', text: 'Welche Prozesse lohnen sich für KI? Wir analysieren Ihr Unternehmen und erstellen eine priorisierte Roadmap mit realistischem ROI.' },
  { num: '06', titel: 'Monitoring & Evaluation', text: 'KI-Systeme brauchen Kontrolle. Wir bauen Evaluierungspipelines, Fallback-Logik und Human-in-the-Loop-Mechanismen für zuverlässige Ergebnisse.' },
]

export default function KiSaas() {
  return (
    <>
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
            <p className={styles.eyebrow}>03 — Leistung</p>
            <h1>KI, die in Ihrem Betrieb funktioniert.</h1>
            <p className={styles.heroText}>
              Kein Hype, keine Demos — wir entwickeln KI-Lösungen, die in Ihren Prozessen tatsächlich Mehrwert schaffen. DSGVO-konform, wartbar und nahtlos integriert.
            </p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80"
              alt="KI und SaaS intersignum"
            />
          </div>
        </div>

        {/* LEISTUNGEN */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Unsere KI- & SaaS-Lösungen</h2>
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
                <h2>Pragmatisch. Sicher. Messbar.</h2>
                <p>
                  Viele Unternehmen experimentieren mit KI, ohne klare Erfolgskriterien. Wir starten anders: Wir definieren zuerst den Nutzen — in Stunden, Euro oder Fehlerquoten — und bauen dann die Lösung, die genau das liefert.
                </p>
                <p>
                  Ob RAG-basierte Wissensdatenbank, automatisiertes Dokumenten-Routing oder ein vollständiges SaaS-Produkt mit KI-Kern — wir begleiten Sie von der Idee bis zum produktiven Betrieb.
                </p>
                <Link href="/#kontakt" className={styles.btnPrimary} style={{ marginTop: '32px' }}>
                  Gespräch vereinbaren →
                </Link>
              </div>
              <div className={styles.imageWrap}>
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80"
                  alt="KI-Entwicklung intersignum"
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
                { href: '/it-beratung', num: '01', titel: 'IT-Beratung', text: 'Unabhängige Technologiestrategie — damit Ihre KI-Investition die richtige ist.' },
                { href: '/webentwicklung', num: '02', titel: 'Webentwicklung', text: 'Frontend und Backend für Ihre KI-Anwendungen und SaaS-Produkte.' },
                { href: '/it-projektmanagement', num: '01a', titel: 'IT-Projektmanagement', text: 'Strukturierte Projektsteuerung für komplexe KI- und SaaS-Vorhaben.' },
                { href: '/data', num: '04', titel: 'Data & Integration', text: 'Datenpipelines und APIs als Grundlage für zuverlässige KI-Systeme.' },
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
            <h2>KI-Potenzial in Ihrem Unternehmen?</h2>
            <p>Schildern Sie uns Ihre Prozesse — wir zeigen Ihnen, wo KI wirklich hilft und wo nicht.</p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Jetzt Kontakt aufnehmen →</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
