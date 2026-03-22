// app/page.tsx
// Startseite intersignum.de
// Abhängigkeiten: npm install @hcaptcha/react-hcaptcha resend

'use client'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/Footer'
import { LogoBlue } from '../components/Logo'
import KontaktFormular from '../components/Kontaktformular'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'intersignum — IT-Projekte, die in time und in budget bleiben.',
  description: 'IT-Beratung, Webentwicklung und KI & SaaS aus Berlin. Über 12 Jahre Erfahrung, agil und herstellerunabhängig.',
}

const kunden = [
  { name: 'Hyundai Motor Europe', logo: '/logos/hyundai logo.svg' },
  { name: 'DZ-Bank',              logo: '/logos/DZ Bank.png' },
  { name: 'Abgeordnetenwatch.de', logo: '/logos/abgeordnetenwatch_logo.png' },
  { name: 'DAV Summit Club',      logo: '/logos/DAV Summit Club.jpg' },
  { name: 'Springer Professional',logo: '/logos/Springer Professional.jpg' },
  { name: 'mail.de',              logo: '/logos/Mail.de Logo.png' },
  { name: 'gesund.de',            logo: '/logos/gesund-de-logo.jpg' },
  { name: 'krone.at',             logo: '/logos/krone_at.jpg' },
  { name: 'Phoenix',              logo: '/logos/phoenix logo.png' },
  { name: 'United Internet Media',logo: '/logos/UIM_Logo.png' },
  { name: 'Vaventus AG',          logo: '/logos/Vaventus-AG-logo-.png' },
  { name: 'HanseMerkur',          logo: '/logos/Ein-Unternehmen-der-HanseMerkur_gross.jpg' },
]

export default function Home() {
  return (
    <>
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
              <p className={styles.heroSubLabel}>IT-Beratung · Webentwicklung · KI &amp; SaaS · Berlin</p>
              <h1 className={styles.h1}>
                IT-Projekte,<br />
                die <em>in time</em><br />
                und <em>in budget</em><br />
                bleiben.
              </h1>
              <p className={styles.heroText}>
                Wir begleiten Unternehmen bei anspruchsvollen IT-Projekten — agil, technologieunabhängig und mit über zwölf Jahren Erfahrung. Von der Strategie bis zur Umsetzung.
              </p>
              <div className={styles.heroCtas}>
                <Link href="#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
                <Link href="#leistungen" className={styles.btnText}>Leistungen ansehen</Link>
              </div>
            </div>

            <div className={styles.heroStats}>
              {[
                { num: '12+',    label: 'Jahre Erfahrung in\nIT-Beratung & Entwicklung' },
                { num: '50+',    label: 'erfolgreich abgeschlossene\nProjekte' },
                { num: '100 %',  label: 'herstellerunabhängige\nTechnologieberatung' },
              ].map((s) => (
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
              <h2 className={styles.h2}>Was wir für Sie tun</h2>
            </div>
            <div className={styles.leistungenGrid}>
              {[
                { num: '01', title: 'IT-Beratung',    href: '/it-beratung',    text: 'Agile Projektsteuerung, Prozessanalyse und unabhängige Technologiestrategie. Ihre Projekte bleiben im Rahmen — ohne Überraschungen.' },
                { num: '02', title: 'Webentwicklung',  href: '/webentwicklung', text: 'Professionelle Websites und Web-Applikationen. Konzeption, Design, Entwicklung und Betrieb — alles aus einer Hand.' },
                { num: '03', title: 'KI & SaaS',       href: '/ki-saas',        text: 'KI-gestützte Lösungen und SaaS-Produkte für Ihre Prozesse. Automatisierung und datengetriebene Entscheidungen — pragmatisch umgesetzt.' },
                { num: '04', title: 'Data & Integration', href: '/data',         text: 'REST APIs, Data Warehouse Architektur und systemübergreifende Datenpipelines — auf Open-Source-Technologien ohne Vendor Lock-in.' },
              ].map((l, i) => (
                <Link key={l.num} href={l.href} className={`${styles.leistungCard} reveal reveal-delay-${i + 1}`}>
                  <div className={styles.leistungNum}>{l.num}</div>
                  <div className={styles.leistungTitle}>{l.title}</div>
                  <p className={styles.leistungText}>{l.text}</p>
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
              <p className={styles.eyebrow}>Referenzen</p>
              <h2 className={styles.h2}>Vertrauen seit 2013</h2>
            </div>
            <div className={styles.kundenGrid}>
              {kunden.map((k, i) => (
                <div
                  key={k.name}
                  className={`${styles.kundeItem} reveal reveal-delay-${(i % 3) + 1}`}
                >
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
                <h2 className={styles.h2}>Wie wir arbeiten</h2>
              </div>
              <div className={`${styles.ansatzSteps} reveal`}>
                {[
                  { num: '01', title: 'Verstehen', text: 'Wir analysieren Ihr Business und seine Prozesse. Keine Hersteller-Bindungen — nur unabhängiges, technologisches Know-how in Ihrem Interesse.' },
                  { num: '02', title: 'Planen',    text: 'Agile Sprints statt großem Knall. Scope und Budget werden gemeinsam in regelmäßigen Sessions verfeinert — transparent und nachvollziehbar.' },
                  { num: '03', title: 'Umsetzen',  text: 'State-of-the-art Technologie, pragmatisch angewandt. Von klassischer Webentwicklung bis zur Integration moderner KI-Lösungen.' },
                  { num: '04', title: 'Feiern',    text: 'Der einzige „Big Bang" kommt vom Sektkorken am Ende eines erfolgreichen Projekts. Das ist unser Versprechen.' },
                ].map((s) => (
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
                <p className={styles.zitatText}>IT projects stay in time and in budget if you do them agile. Not joking.</p>
                <p className={styles.zitatSub}>Wir verstehen Ihr Business und seine Prozesse. Sie profitieren von unserem unabhängigen Technologie-Know-how — ohne Partnerschaftsbindungen.</p>
                <div className={styles.zitatTags}>
                  {['Agile', 'Berlin', 'Seit 2013', 'Herstellerunabhängig'].map(t => (
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
              <h3>Neu: KI-gestützte Lösungen für Ihr Unternehmen</h3>
              <p>intersignum entwickelt maßgeschneiderte KI-Anwendungen und SaaS-Produkte — praxisnah, DSGVO-konform und nahtlos in Ihre bestehenden Prozesse integriert.</p>
            </div>
            <Link href="#kontakt" className={styles.btnPrimary}>Jetzt Projekt besprechen →</Link>
          </div>
        </div>

        {/* ─── KONTAKT ─── */}
        <div id="kontakt">
          <section className={styles.kontaktSection}>
            <div className={`${styles.kontaktLeft} reveal`}>
              <p className={styles.eyebrow}>Kontakt</p>
              <h2 className={styles.h2}>Lassen Sie uns sprechen.</h2>
              <p className={styles.kontaktIntro}>
                Schildern Sie uns Ihr Vorhaben — unverbindlich und kostenlos. Wir melden uns innerhalb eines Werktages.
              </p>
              <div className={styles.kontaktMeta}>
                <div className={styles.kontaktMetaItem}>
                  <div className={styles.kontaktMetaIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span>Pasewalker Str. 15, 13127 Berlin</span>
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

      {/* ─── CLIENT SCRIPTS (Parallax + Scroll Reveal) ─── */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Header shadow
            const header = document.getElementById('main-header');
            window.addEventListener('scroll', () => {
              if (header) header.classList.toggle('scrolled', window.scrollY > 10);
            }, { passive: true });

            // Parallax
            const heroBg   = document.getElementById('hero-bg');
            const heroGlow = document.getElementById('hero-glow');
            window.addEventListener('scroll', () => {
              const y = window.scrollY;
              if (heroBg)   heroBg.style.transform   = 'translateY(' + (y * 0.3) + 'px)';
              if (heroGlow) heroGlow.style.transform = 'translateY(' + (y * 0.18) + 'px)';
            }, { passive: true });

            // Scroll Reveal
            const io = new IntersectionObserver((entries) => {
              entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
              });
            }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
            document.querySelectorAll('.reveal').forEach(el => io.observe(el));
          `,
        }}
      />
    </>
  )
}
