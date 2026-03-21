import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import { LogoBlue } from '../../components/Logo'
import styles from './it_beratung.module.css'

export const metadata: Metadata = {
  title: 'IT-Beratung & Integration — intersignum',
  description: 'IT-Beratung, Implementierung und Integration von SaaS-Lösungen, CRM-Systemen und Middleware in Unternehmensstrukturen. HubSpot, Personio, Rexx, Symfony.',
}

export default function ITBeratung() {
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
              <span>IT-Beratung & Integration</span>
            </div>
            <p className={styles.eyebrow}>01 — Leistung</p>
            <h1>IT-Beratung &amp; Integration</h1>
            <p className={styles.heroText}>
              Von der Strategieberatung bis zur vollständigen Implementierung — wir integrieren SaaS-Lösungen, CRM- und HR-Systeme nahtlos in Ihre bestehenden Unternehmensstrukturen.
            </p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="IT-Beratung und Integration"
            />
          </div>
        </div>

        {/* LEISTUNGEN */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Was wir für Sie tun</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardNum}>01</div>
                <h3>Agile Projektsteuerung</h3>
                <p>Wir steuern Ihre IT-Projekte nach agilen Methoden — transparent, iterativ und mit klarem Fokus auf Budget und Timeline. Keine Überraschungen.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>02</div>
                <h3>SaaS-Implementierung</h3>
                <p>Einführung und Konfiguration von SaaS-Lösungen in Ihre Unternehmensstruktur — von der Anforderungsanalyse bis zum Go-live und darüber hinaus.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>03</div>
                <h3>CRM & HR-Integration</h3>
                <p>Anbindung und Implementierung von HubSpot, Personio, Rexx und weiteren Systemen — prozesskonform und vollständig in Ihre IT-Landschaft integriert.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>04</div>
                <h3>Middleware & Symfony</h3>
                <p>Entwicklung von Middleware-Schichten mit Symfony für die systemübergreifende Kommunikation — ERP, CRM, HR und weitere Systeme sprechen miteinander.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>05</div>
                <h3>Prozessanalyse & -optimierung</h3>
                <p>Wir analysieren Ihre bestehenden Prozesse und identifizieren Optimierungspotenziale — systematisch, datengetrieben und mit Blick auf den ROI.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>06</div>
                <h3>Technologiestrategie</h3>
                <p>Unabhängige Beratung bei der Auswahl der richtigen Technologien — ohne Herstellerbindung, immer im Interesse Ihres Unternehmens.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SYSTEME */}
        <section className={styles.sectionAlt}>
          <div className={styles.sectionInner}>
            <div className={styles.twoCol}>
              <div>
                <h2>Systeme die wir integrieren</h2>
                <p>Wir haben umfassende Erfahrung in der Integration führender SaaS-Plattformen in bestehende Unternehmensstrukturen.</p>
                <div className={styles.tagGrid}>
                  <span className={styles.tag}>HubSpot CRM</span>
                  <span className={styles.tag}>Personio</span>
                  <span className={styles.tag}>Rexx Systems</span>
                  <span className={styles.tag}>Symfony</span>
                  <span className={styles.tag}>Salesforce</span>
                  <span className={styles.tag}>SAP</span>
                  <span className={styles.tag}>Microsoft 365</span>
                  <span className={styles.tag}>REST APIs</span>
                  <span className={styles.tag}>Webhooks</span>
                  <span className={styles.tag}>OAuth 2.0</span>
                </div>
                <Link href="/#kontakt" className={styles.btnPrimary} style={{marginTop: '32px'}}>Gespräch vereinbaren →</Link>
              </div>
              <div className={styles.imageWrap}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                  alt="Systemintegration"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ANSATZ */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.twoCol}>
              <div className={styles.imageWrap}>
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
                  alt="Unser Ansatz"
                />
              </div>
              <div>
                <h2>Unser Ansatz</h2>
                <p>Über 12 Jahre Erfahrung in anspruchsvollen IT-Projekten — im Konzern, auf Plattformen und im Mittelstand. Wir verstehen Unternehmensstrukturen und wissen wie Systeme in der Praxis funktionieren müssen.</p>
                <p>Herstellerunabhängig bedeutet für uns: wir empfehlen was für Sie passt. Nicht was uns Provision bringt oder was gerade im Trend ist.</p>
                <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
              </div>
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
