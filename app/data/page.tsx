import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import ServiceHeader from '../../components/ServiceHeader'
import styles from './data.module.css'

export const metadata: Metadata = {
  title: 'Data & Integration Berlin — intersignum',
  description: 'REST API Design, Data Warehouse Architektur und ETL/ELT-Pipelines mit Open-Source-Technologien. Kein Vendor Lock-in.',
}

const karten = [
  { num: '01', titel: 'REST & GraphQL APIs', text: 'Sauberes API-Design nach OpenAPI-Standard — mit Authentifizierung, Rate-Limiting, Versionierung und vollständiger Dokumentation.' },
  { num: '02', titel: 'Data Warehouse Architektur', text: 'Aufbau moderner Datenhaushalte auf Basis von BigQuery, Redshift, Snowflake oder selbstgehostetem ClickHouse — ohne Vendor Lock-in.' },
  { num: '03', titel: 'ETL/ELT-Pipelines', text: 'Datenpipelines mit dbt, Apache Airflow oder Prefect — für zuverlässige, testbare und dokumentierte Datenflüsse.' },
  { num: '04', titel: 'System-Integration', text: 'Verbindung heterogener Systemlandschaften: ERP, CRM, E-Commerce, Marketing-Tools — via API, Webhooks oder Message-Queues.' },
  { num: '05', titel: 'Echtzeit-Daten', text: 'Streaming-Architekturen mit Kafka oder AWS Kinesis für Echtzeit-Analysen, Live-Dashboards und event-getriebene Systeme.' },
  { num: '06', titel: 'Data Governance', text: 'Datenqualitäts­sicherung, Lineage-Tracking und DSGVO-konforme Datenhaltung — damit Ihre Daten vertrauenswürdig bleiben.' },
]

export default function Data() {
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
            <p className={styles.eyebrow}>04 — Leistung</p>
            <h1>Daten, die Entscheidungen ermöglichen.</h1>
            <p className={styles.heroText}>
              Wir bauen APIs, Datenpipelines und Integrationen, die zuverlässig laufen — auf Open-Source-Technologien, ohne Vendor Lock-in und mit vollständiger Dokumentation.
            </p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
              alt="Data und Integration intersignum"
            />
          </div>
        </div>

        {/* LEISTUNGEN */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Was wir für Sie bauen</h2>
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
                <h2>Offene Technologien. Kein Lock-in.</h2>
                <p>
                  Wir setzen konsequent auf Open-Source-Technologien und offene Standards. Das bedeutet: keine Abhängigkeit von einem einzelnen Anbieter, volle Kontrolle über Ihre Daten und keine steigenden Lizenzkosten bei wachsendem Datenvolumen.
                </p>
                <p>
                  Von der ersten API bis zur vollständigen Data-Platform: Wir begleiten Unternehmen beim Aufbau einer Daten­infrastruktur, die mit ihren Anforderungen wächst — nicht dagegen arbeitet.
                </p>
                <Link href="/#kontakt" className={styles.btnPrimary} style={{ marginTop: '32px' }}>
                  Gespräch vereinbaren →
                </Link>
              </div>
              <div className={styles.imageWrap}>
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
                  alt="Datenpipelines intersignum"
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
            <h2>Dateninfrastruktur aufbauen?</h2>
            <p>Schildern Sie uns Ihre aktuelle Systemlandschaft — wir zeigen Ihnen, was möglich ist.</p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Jetzt Kontakt aufnehmen →</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
