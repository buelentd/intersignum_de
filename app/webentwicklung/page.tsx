import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import { LogoBlue } from '../../components/Logo'
import styles from './webentwicklung.module.css'

export const metadata: Metadata = {
  title: 'Webentwicklung — intersignum',
  description: 'Professionelle Websites und Web-Applikationen. Konzeption, Design, Entwicklung und Betrieb — alles aus einer Hand.',
}

export default function Webentwicklung() {
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
              <span>Webentwicklung</span>
            </div>
            <p className={styles.eyebrow}>02 — Leistung</p>
            <h1>Webentwicklung</h1>
            <p className={styles.heroText}>
              Professionelle Websites und Web-Applikationen. Konzeption, Design, Entwicklung und Betrieb — alles aus einer Hand.
            </p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
              alt="Webentwicklung"
            />
          </div>
        </div>

        {/* LEISTUNGEN */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Was wir entwickeln</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardNum}>01</div>
                <h3>Corporate Websites</h3>
                <p>Professionelle Unternehmenswebsites mit modernem Design, optimiert für Performance und Suchmaschinen.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>02</div>
                <h3>Web-Applikationen</h3>
                <p>Maßgeschneiderte Web-Apps für komplexe Geschäftsprozesse — skalierbar, sicher und benutzerfreundlich.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>03</div>
                <h3>E-Commerce</h3>
                <p>Online-Shops mit optimierter User Experience und nahtloser Integration in bestehende Systeme.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardNum}>04</div>
                <h3>API-Integration</h3>
                <p>Anbindung von Drittsystemen, CRM, ERP und weiteren Diensten über moderne REST- und GraphQL-APIs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGIEN */}
        <section className={styles.sectionAlt}>
          <div className={styles.sectionInner}>
            <div className={styles.twoCol}>
              <div className={styles.imageWrap}>
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"
                  alt="Technologien"
                />
              </div>
              <div>
                <h2>Moderne Technologien</h2>
                <p>Wir setzen auf bewährte und zukunftssichere Technologien — React, Next.js, TypeScript, Node.js und mehr. Immer angepasst an Ihre Anforderungen.</p>
                <p>Von der ersten Konzeption bis zum laufenden Betrieb begleiten wir Sie durch den gesamten Entwicklungsprozess.</p>
                <Link href="/#kontakt" className={styles.btnPrimary}>Gespräch vereinbaren →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.sectionInner}>
            <h2>Ihr nächstes Web-Projekt?</h2>
            <p>Schildern Sie uns Ihre Anforderungen — wir melden uns innerhalb eines Werktages.</p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Jetzt Kontakt aufnehmen →</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
