import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import { LogoBlue } from '../../components/Logo'
import styles from './data.module.css'

export const metadata: Metadata = {
  title: 'Data & Integration — intersignum',
  description: 'REST API Design, Data Warehouse Architektur, ETL/ELT Pipelines mit dbt und Open-Source-Technologien. Systemübergreifende Datenintegration für Ihr Unternehmen.',
}

export default function Data() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/"><LogoBlue height={22} /></Link>
          <nav className={styles.nav}>
            <Link href="/#leistungen">Leistungen</Link>
            <Link href="/#kunden">Referenzen</Link>
            <Link href="/#ansatz">Über uns</Link>
            <Link href="/#kontakt" className={styles.btnNav}>Kontakt aufnehmen</Link>
          </nav>
        </div>
      </header>

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
            <h1>Data &amp; Integration</h1>
            <p className={styles.heroText}>
              REST APIs, Data Warehouse Architektur und systemübergreifende Datenpipelines — pragmatisch umgesetzt mit bewährten Open-Source-Technologien.
            </p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
              alt="Data und Integration"
            />
          </div>
        </div>

        {/* LEISTUNGEN */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Was wir für Sie bauen</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardNum}>01</div>
                <h3>REST API Design & Entwicklung</h3>
                <p>Saubere, dokumentierte REST APIs nach OpenAPI-Standard — als Grundlage für systemübergreifende Kommunikation und externe Integrationen.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>02</div>
                <h3>Data Warehouse Architektur</h3>
                <p>Aufbau von Data Warehouses auf PostgreSQL mit klarer Schichtenarchitektur — Staging, Aggregated, Info Layer. Daten dort wo sie gebraucht werden.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>03</div>
                <h3>ETL/ELT Pipelines</h3>
                <p>Automatisierte Datenpipelines für die Übertragung und Transformation von Daten aus ERP, CRM, HR und weiteren Quellsystemen.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>04</div>
                <h3>dbt Modellierung</h3>
                <p>Datentransformation mit dbt (data build tool) — Open Source, versioniert, testbar. Saubere SQL-Modelle statt undurchsichtiger ETL-Prozesse.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>05</div>
                <h3>Systemintegration</h3>
                <p>Bidirektionale Synchronisation zwischen ERP, CRM, HR und Analytics-Systemen — über APIs, Webhooks und Middleware-Schichten.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>06</div>
                <h3>Reporting & Analytics</h3>
                <p>Anbindung von BI-Tools wie Power BI, Metabase oder Grafana an Ihr Data Warehouse — für datengetriebene Entscheidungen auf allen Ebenen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* OPEN SOURCE */}
        <section className={styles.sectionAlt}>
          <div className={styles.sectionInner}>
            <div className={styles.twoCol}>
              <div>
                <h2>Open Source — mit Lizenz</h2>
                <p>Wir setzen auf bewährte Open-Source-Technologien mit klaren Lizenzen. Das bedeutet: keine Vendor-Lock-ins, volle Transparenz und eine aktive Community hinter jeder Technologie.</p>
                <p>Unsere bevorzugten Tools im Data-Stack:</p>
                <div className={styles.tagGrid}>
                  <span className={styles.tag}>dbt (Apache 2.0)</span>
                  <span className={styles.tag}>PostgreSQL</span>
                  <span className={styles.tag}>Apache Airflow</span>
                  <span className={styles.tag}>Python</span>
                  <span className={styles.tag}>Symfony</span>
                  <span className={styles.tag}>Metabase</span>
                  <span className={styles.tag}>Grafana</span>
                  <span className={styles.tag}>OpenAPI</span>
                  <span className={styles.tag}>Docker</span>
                  <span className={styles.tag}>Bitbucket / GitHub</span>
                </div>
                <Link href="/#kontakt" className={styles.btnPrimary} style={{marginTop: '32px'}}>Gespräch vereinbaren →</Link>
              </div>
              <div className={styles.imageWrap}>
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
                  alt="Open Source Data Stack"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PRAXISBEISPIEL */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.twoCol}>
              <div className={styles.imageWrap}>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                  alt="Data Warehouse Praxis"
                />
              </div>
              <div>
                <h2>Aus der Praxis</h2>
                <p>Ein typisches Szenario: ERP, CRM und HR-System erzeugen täglich Daten — aber niemand hat den Gesamtüberblick. Wir bauen die Integrationsschicht die alle Quellen zusammenführt.</p>
                <p>Das Ergebnis: ein zentrales Data Warehouse mit automatisierten Pipelines, sauberen dbt-Modellen und einem BI-Dashboard das täglich aktuell ist — ohne manuelle Exports.</p>
                <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.sectionInner}>
            <h2>Ihre Daten. Sauber integriert.</h2>
            <p>Wir zeigen Ihnen konkret wie eine moderne Datenarchitektur für Ihr Unternehmen aussehen kann — unverbindlich und kostenlos.</p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Jetzt Kontakt aufnehmen →</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
