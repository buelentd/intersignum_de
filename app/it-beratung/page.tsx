import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import { LogoBlue } from '../../components/Logo'
import styles from './it_beratung.module.css'

export const metadata: Metadata = {
  title: 'IT-Beratung — intersignum',
  description: 'Agile Projektsteuerung, Prozessanalyse und unabhängige Technologiestrategie. Ihre Projekte bleiben im Rahmen — ohne Überraschungen.',
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
              <span>IT-Beratung</span>
            </div>
            <p className={styles.eyebrow}>01 — Leistung</p>
            <h1>IT-Beratung</h1>
            <p className={styles.heroText}>
              Agile Projektsteuerung, Prozessanalyse und unabhängige Technologiestrategie. Ihre Projekte bleiben im Rahmen — ohne Überraschungen.
            </p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="IT-Beratung"
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
                <p>Wir steuern Ihre IT-Projekte nach agilen Methoden — transparent, iterativ und mit klarem Fokus auf Budget und Timeline.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>02</div>
                <h3>Prozessanalyse</h3>
                <p>Wir analysieren Ihre bestehenden Prozesse und identifizieren Optimierungspotenziale — systematisch und datengetrieben.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>03</div>
                <h3>Technologiestrategie</h3>
                <p>Unabhängig von Herstellern beraten wir Sie bei der Auswahl der richtigen Technologien für Ihr Unternehmen.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>04</div>
                <h3>Stakeholder Management</h3>
                <p>Wir moderieren zwischen technischen Teams und Business-Seite — damit alle an einem Strang ziehen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ANSATZ */}
        <section className={styles.sectionAlt}>
          <div className={styles.sectionInner}>
            <div className={styles.twoCol}>
              <div>
                <h2>Unser Ansatz</h2>
                <p>Über 12 Jahre Erfahrung in anspruchsvollen IT-Projekten haben uns eines gelehrt: Technologie allein löst keine Probleme. Es braucht strukturierte Prozesse, klare Kommunikation und echtes Verständnis für das Business.</p>
                <p>Wir sind herstellerunabhängig — das bedeutet: wir empfehlen was für Sie passt, nicht was uns Provision bringt.</p>
                <Link href="/#kontakt" className={styles.btnPrimary}>Gespräch vereinbaren →</Link>
              </div>
              <div className={styles.imageWrap}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                  alt="Unser Ansatz"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.sectionInner}>
            <h2>Bereit für Ihr nächstes IT-Projekt?</h2>
            <p>Schildern Sie uns Ihr Vorhaben — unverbindlich und kostenlos.</p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Jetzt Kontakt aufnehmen →</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
