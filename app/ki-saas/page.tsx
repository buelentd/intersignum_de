import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import { LogoBlue } from '../../components/Logo'
import styles from './ki_saas.module.css'

export const metadata: Metadata = {
  title: 'KI & SaaS — intersignum',
  description: 'KI-gestützte Lösungen und SaaS-Produkte für Ihre Prozesse. Automatisierung und datengetriebene Entscheidungen — pragmatisch umgesetzt.',
}

export default function KiSaas() {
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
              <span>KI & SaaS</span>
            </div>
            <p className={styles.eyebrow}>03 — Leistung</p>
            <h1>KI & SaaS</h1>
            <p className={styles.heroText}>
              KI-gestützte Lösungen und SaaS-Produkte für Ihre Prozesse. Automatisierung und datengetriebene Entscheidungen — pragmatisch umgesetzt.
            </p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80"
              alt="KI und SaaS"
            />
          </div>
        </div>

        {/* LEISTUNGEN */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Unsere KI- & SaaS-Lösungen</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardNum}>01</div>
                <h3>KI-Integration</h3>
                <p>Wir integrieren Large Language Models und KI-APIs in Ihre bestehenden Prozesse — DSGVO-konform und praxisnah.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>02</div>
                <h3>Prozessautomatisierung</h3>
                <p>Automatisierung wiederkehrender Aufgaben durch intelligente Workflows — spart Zeit und reduziert Fehler.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>03</div>
                <h3>SaaS-Entwicklung</h3>
                <p>Maßgeschneiderte SaaS-Produkte für Ihre Branche — von der Idee bis zur marktreifen Lösung.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>04</div>
                <h3>Datengetriebene Entscheidungen</h3>
                <p>Dashboards, Analytics und Reporting-Systeme die Ihnen die richtigen Daten zur richtigen Zeit liefern.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ANSATZ */}
        <section className={styles.sectionAlt}>
          <div className={styles.sectionInner}>
            <div className={styles.twoCol}>
              <div>
                <h2>Pragmatisch umgesetzt</h2>
                <p>KI ist kein Selbstzweck. Wir setzen KI dort ein wo sie echten Mehrwert schafft — messbar, nachvollziehbar und sicher.</p>
                <p>Alle Lösungen werden DSGVO-konform entwickelt und nahtlos in Ihre bestehende IT-Infrastruktur integriert.</p>
                <Link href="/#kontakt" className={styles.btnPrimary}>Gespräch vereinbaren →</Link>
              </div>
              <div className={styles.imageWrap}>
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80"
                  alt="KI Lösungen"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.sectionInner}>
            <h2>KI für Ihr Unternehmen?</h2>
            <p>Wir zeigen Ihnen konkret wie KI Ihre Prozesse verbessern kann — unverbindlich und kostenlos.</p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Jetzt Kontakt aufnehmen →</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
