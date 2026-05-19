import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/Footer'
import { LogoBlue } from '../components/Logo'
import KontaktFormular from '../components/Kontaktformular'
import ClientEffects from '../components/ClientEffects'
import styles from './page.module.css'
import { getStartseiteContent, getKundenContent } from '../lib/sanity/queries'

export const revalidate = 60

export default async function Home() {
  const [cms, kunden] = await Promise.all([
    getStartseiteContent(),
    getKundenContent(),
  ])

  const h = cms.hero
  const l = cms.leistungen
  const a = cms.ansatz

  return (
    <>
      <ClientEffects />

      {/* ─── HEADER ─── */}
      <header className={styles.header} id="main-header">
        <div className={styles.headerInner}>
          <Link href="/" aria-label="intersignum Startseite">
            <LogoBlue height={22} />
          </Link>
          <nav className={styles.nav}>
            <Link href="#leistungen">Leistungen</Link>
            <Link href="#kunden">Referenzen</Link>
            <Link href="#ansatz">Über uns</Link>
            <Link href="#kontakt" className={styles.btnNav}>Kontakt aufnehmen</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* ─── HERO ─── */}
        <div className={styles.heroWrap}>
          <div className={styles.heroBg} id="hero-bg" aria-hidden="true" />
          <div className={styles.heroGlow} id="hero-glow" aria-hidden="true" />
          <section className={styles.hero} id="hero">
            <div className={styles.heroLeft}>
              <p className={styles.heroSubLabel}>{h.subLabel}</p>
              <h1 className={styles.h1}>
                {h.h1Zeile1}<br />
                die <em>{h.h1Hervor1}</em><br />
                und <em>{h.h1Hervor2}</em><br />
                {h.h1Zeile4}
              </h1>
              <p className={styles.heroText}>{h.text}</p>
              <div className={styles.heroCtas}>
                <Link href="#kontakt" className={styles.btnPrimary}>{h.ctaPrimary}</Link>
                <Link href="#leistungen" className={styles.btnText}>{h.ctaSekundaer}</Link>
              </div>
            </div>

            <div className={styles.heroStats}>
              {cms.stats.map((s) => (
                <div key={s.num} className={styles.statItem}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <hr className={styles.divider} />

        {/* ─── LEISTUNGEN ─── */}
        <div id="leistungen">
          <section className={`${styles.leistungen} reveal`}>
            <div className={`${styles.sectionHeader} reveal`}>
              <p className={styles.eyebrow}>Leistungen</p>
              <h2 className={styles.h2}>{l.h2}</h2>
            </div>
            <div className={styles.leistungenGrid}>
              {l.karten.map((karte, i) => (
                <Link key={karte.num} href={karte.href} className={`${styles.leistungCard} reveal reveal-delay-${i + 1}`}>
                  <div className={styles.leistungNum}>{karte.num}</div>
                  <div className={styles.leistungTitle}>{karte.title}</div>
                  <p className={styles.leistungText}>{karte.text}</p>
                  <span className={styles.leistungLink}>Mehr erfahren →</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <hr className={styles.divider} />

        {/* ─── KUNDEN ─── */}
        <div className={styles.kundenWrap} id="kunden">
          <div className={styles.kundenInner}>
            <div className={`${styles.sectionHeader} reveal`}>
              <p className={styles.eyebrow}>{cms.kunden.eyebrow}</p>
              <h2 className={styles.h2}>{cms.kunden.h2}</h2>
            </div>
            <div className={styles.kundenGrid}>
              {kunden.map((k, i) => (
                <div key={k.name} className={`${styles.kundeItem} reveal reveal-delay-${(i % 3) + 1}`}>
                  <span className={styles.kundeName}>{k.name}</span>
                  <div className={styles.kundeLogo}>
                    <Image
                      src={k.logo}
                      alt={k.name}
                      width={160}
                      height={48}
                      style={{ objectFit: 'contain', maxHeight: 48, width: 'auto' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── ANSATZ ─── */}
        <div id="ansatz">
          <section className={styles.ansatz}>
            <div>
              <div className={`${styles.sectionHeader} reveal`}>
                <p className={styles.eyebrow}>Unser Ansatz</p>
                <h2 className={styles.h2}>{a.h2}</h2>
              </div>
              <div className={`${styles.ansatzSteps} reveal`}>
                {a.schritte.map((s) => (
                  <div key={s.num} className={styles.step}>
                    <div className={styles.stepNum}>{s.num}</div>
                    <div>
                      <div className={styles.stepTitle}>{s.title}</div>
                      <p className={styles.stepText}>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${styles.ansatzRight} reveal reveal-delay-2`}>
              <div className={styles.zitatBox}>
                <span className={styles.zitatMark}>&ldquo;</span>
                <p className={styles.zitatText}>{a.zitat.text}</p>
                <p className={styles.zitatSub}>{a.zitat.sub}</p>
                <div className={styles.zitatTags}>
                  {a.zitat.tags.map((t) => (
                    <span key={t} className={styles.zitatTag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ─── KI BANNER ─── */}
        <div className={`${styles.kiBanner} reveal`}>
          <div className={styles.kiBannerInner}>
            <div className={styles.kiBannerText}>
              <h3>{cms.kiBanner.titel}</h3>
              <p>{cms.kiBanner.text}</p>
            </div>
            <Link href="#kontakt" className={styles.btnPrimary}>{cms.kiBanner.cta}</Link>
          </div>
        </div>

        {/* ─── KONTAKT ─── */}
        <div id="kontakt">
          <section className={styles.kontaktSection}>
            <div className={`${styles.kontaktLeft} reveal`}>
              <p className={styles.eyebrow}>Kontakt</p>
              <h2 className={styles.h2}>{cms.kontakt.h2}</h2>
              <p className={styles.kontaktIntro}>{cms.kontakt.intro}</p>
              <div className={styles.kontaktMeta}>
                <div className={styles.kontaktMetaItem}>
                  <div className={styles.kontaktMetaIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span>{cms.kontakt.adresse}</span>
                </div>
                <div className={styles.kontaktMetaItem}>
                  <div className={styles.kontaktMetaIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <span>Antwort innerhalb eines Werktages</span>
                </div>
                <div className={styles.kontaktMetaItem}>
                  <div className={styles.kontaktMetaIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}>
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <span>Erstgespräch kostenlos &amp; unverbindlich</span>
                </div>
              </div>
            </div>

            <div className={`${styles.kontaktForm} reveal reveal-delay-1`}>
              <KontaktFormular />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
