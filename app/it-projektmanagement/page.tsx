import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import ServiceHeader from '../../components/ServiceHeader'
import styles from './itpm.module.css'

export const metadata: Metadata = {
  title: { absolute: 'IT-Projektmanagement — intersignum' },
  description: 'Externes IT-Projektmanagement als Schnittstelle zwischen Business und IT. Projekte in time, in budget, ohne Überraschungen — seit 2013.',
  alternates: { canonical: 'https://intersignum.de/it-projektmanagement' },
  keywords: ['IT Projektmanagement', 'IT Projektmanager extern', 'Schnittstelle Business IT', 'IT Projektsteuerung', 'IT Beratung Berlin'],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://intersignum.de/it-projektmanagement',
    siteName: 'intersignum',
    title: 'IT-Projektmanagement — intersignum',
    description: 'Externes IT-Projektmanagement als Schnittstelle zwischen Business und IT. Projekte in time, in budget, ohne Überraschungen.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'IT-Projektmanagement — intersignum' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT-Projektmanagement — intersignum',
    description: 'Externes IT-Projektmanagement als Schnittstelle zwischen Business und IT.',
    images: ['/opengraph-image'],
  },
}

const leistungen = [
  {
    num: '01',
    titel: 'Anforderungsanalyse & Scope-Definition',
    text: 'Wir übersetzen Geschäftsziele in technische Anforderungen — präzise, priorisiert und für beide Seiten verständlich. Kein Scope-Creep, keine Missverständnisse zwischen IT und Fachbereich.',
  },
  {
    num: '02',
    titel: 'Steuerung & Koordination',
    text: 'Als externe Projektleitung koordinieren wir interne Teams, externe Dienstleister und Stakeholder. Klare Eskalationswege, transparente Statusberichte, keine politischen Reibungsverluste.',
  },
  {
    num: '03',
    titel: 'Risikomanagement & Frühwarnung',
    text: 'Wir identifizieren Budget- und Zeitrisiken bevor sie kritisch werden. Unsere Erfahrung aus 50+ Projekten macht Probleme sichtbar, bevor sie den Projekterfolg gefährden.',
  },
  {
    num: '04',
    titel: 'Vendor-Management & Ausschreibung',
    text: 'Herstellerunabhängige Auswahl und Steuerung von Software-Anbietern, Agenturen und Dienstleistern. Wir verhandeln auf Augenhöhe — ohne versteckte Interessenkonflikte.',
  },
  {
    num: '05',
    titel: 'Agile Transformation & Methoden',
    text: 'Scrum, Kanban oder klassisches Projektmanagement — wir wählen die Methode, die zu Ihrem Team und Projekttypus passt, nicht die gerade modische.',
  },
  {
    num: '06',
    titel: 'Go-live & Übergabe',
    text: 'Wir begleiten den Rollout, schulen interne Teams und sichern den Wissenstransfer. Das Projekt endet nicht mit dem Deployment, sondern wenn Ihr Team eigenständig arbeitet.',
  },
]

const probleme = [
  'IT-Projekte die dreimal mehr kosten als geplant',
  'Business-Anforderungen die die IT nicht versteht',
  'Technische Lösungen die am Fachbereich vorbeigehen',
  'Dienstleister die liefern was sie wollen, nicht was vereinbart war',
  'Endlos-Meetings ohne Entscheidungen',
  'Stakeholder die erst beim Go-live merken, dass es falsch ist',
]

const referenzen = [
  { name: 'Hyundai Motor Europe', branche: 'Automotive', projekt: 'Digitale Vertriebs- und Marketingplattform' },
  { name: 'DZ-Bank', branche: 'Finanzdienstleistungen', projekt: 'Systemintegration & Prozessautomatisierung' },
  { name: 'Springer Professional', branche: 'Publishing / Medien', projekt: 'Content-Plattform & API-Anbindung' },
  { name: 'HanseMerkur', branche: 'Versicherung', projekt: 'Digitale Kundenportale' },
  { name: 'gesund.de', branche: 'Health-Tech', projekt: 'SaaS-Produktentwicklung & Skalierung' },
  { name: 'Abgeordnetenwatch', branche: 'NGO / Civic Tech', projekt: 'Plattformarchitektur & Entwicklungssteuerung' },
]

const faq = [
  {
    frage: 'Was kostet ein externer IT-Projektmanager?',
    antwort: 'Das hängt vom Projektumfang und der Einsatzzeit ab. Wir arbeiten projektbasiert oder auf Stundenbasis. Im ersten Gespräch klären wir, was für Ihr Vorhaben sinnvoll ist — ohne Beratungsgebühr.',
  },
  {
    frage: 'Wann macht ein externer IT-Projektmanager Sinn?',
    antwort: 'Immer dann, wenn interne Kapazitäten fehlen, wenn ein Projekt besonders kritisch ist, wenn es Kommunikationsprobleme zwischen Business und IT gibt — oder wenn ein laufendes Projekt ins Schlingern geraten ist.',
  },
  {
    frage: 'Wie unterscheidet ihr euch von einer klassischen Unternehmensberatung?',
    antwort: 'Wir haben kein Interesse daran, Projekte zu verlängern. Wir verkaufen keine Software und haben keine Provisionsvereinbarungen mit Anbietern. Unser Interesse ist identisch mit Ihrem: Das Projekt soll fertig werden.',
  },
  {
    frage: 'Könnt ihr auch laufende Projekte übernehmen?',
    antwort: 'Ja. Wir steigen regelmäßig in Projekte ein, die in Schwierigkeiten geraten sind. Diagnose, Stabilisierung, Neuausrichtung — das ist eine unserer Kernkompetenzen.',
  },
  {
    frage: 'In welchen Branchen habt ihr Erfahrung?',
    antwort: 'Automotive, Finanzdienstleistungen, Publishing, Health-Tech, NGO, E-Commerce. Die Branche ist weniger entscheidend als das Projekttypus: Systemintegration, Produktentwicklung, Plattformbetrieb.',
  },
]

export default function ITprojektmanagement() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://intersignum.de' },
      { '@type': 'ListItem', position: 2, name: 'IT-Projektmanagement', item: 'https://intersignum.de/it-projektmanagement' },
    ],
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IT-Projektmanagement',
    description: 'Externes IT-Projektmanagement als neutrale Schnittstelle zwischen Business und IT.',
    provider: {
      '@type': 'ProfessionalService',
      name: 'intersignum',
      url: 'https://intersignum.de',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Pasewalker Str. 15',
        addressLocality: 'Berlin',
        postalCode: '13127',
        addressCountry: 'DE',
      },
    },
    areaServed: 'DE',
    serviceType: 'IT-Projektmanagement',
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.frage,
      acceptedAnswer: { '@type': 'Answer', text: f.antwort },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ServiceHeader current="/it-projektmanagement" />

      <main>
        {/* HERO */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.breadcrumb}>
              <Link href="/">Startseite</Link>
              <span>›</span>
              <span>IT-Projektmanagement</span>
            </div>
            <p className={styles.eyebrow}>Schnittstelle Business & IT</p>
            <h1>IT-Projektmanagement,<br />das wirklich funktioniert.</h1>
            <p className={styles.heroText}>
              Wir sind die neutrale Instanz zwischen Ihrem Fachbereich und der IT —
              ohne Eigeninteresse, ohne versteckte Agenda. Projekte die mit uns starten,
              kommen auch an.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
              <Link href="#leistungen" className={styles.btnText}>Was wir leisten</Link>
            </div>
          </div>
          <div className={styles.heroStats}>
            {[
              { num: '12+', label: 'Jahre Erfahrung\nIT-Projektmanagement' },
              { num: '50+', label: 'Projekte erfolgreich\nabgeschlossen' },
              { num: '100%', label: 'herstellerunabhängig\nund provisionsfrei' },
            ].map((s) => (
              <div key={s.num} className={styles.statItem}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel} style={{ whiteSpace: 'pre-line' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PROBLEM */}
        <section className={styles.sectionAlt} id="problem">
          <div className={styles.sectionInner}>
            <h2>Kennen Sie das?</h2>
            <p className={styles.sectionLead}>
              Viele IT-Projekte scheitern nicht an der Technologie, sondern an der Kommunikation.
              Business und IT reden aneinander vorbei — mit vorhersehbaren Folgen.
            </p>
            <div className={styles.problemGrid}>
              {probleme.map((p) => (
                <div key={p} className={styles.problemItem}>
                  <span className={styles.problemIcon}>✕</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <p className={styles.problemCta}>
              Genau für diese Situation gibt es uns.{' '}
              <Link href="/#kontakt">Sprechen Sie mit uns →</Link>
            </p>
          </div>
        </section>

        {/* LEISTUNGEN */}
        <section className={styles.section} id="leistungen">
          <div className={styles.sectionInner}>
            <h2>Was wir für Sie tun</h2>
            <div className={styles.grid}>
              {leistungen.map((l) => (
                <div key={l.num} className={styles.card}>
                  <div className={styles.cardNum}>{l.num}</div>
                  <h3>{l.titel}</h3>
                  <p>{l.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ANSATZ */}
        <section className={styles.sectionAlt} id="ansatz">
          <div className={styles.sectionInner}>
            <div className={styles.twoCol}>
              <div>
                <h2>Warum "extern" hier ein Vorteil ist</h2>
                <p>
                  Ein interner Projektleiter kämpft mit Abteilungsgrenzen, Hierarchien und
                  impliziten Erwartungen. Wir nicht. Wir sind niemandes Vorgesetzter und
                  niemandes Untergebener — das verschafft uns die Neutralität, die komplexe
                  Projekte brauchen.
                </p>
                <p>
                  Wir verkaufen keine Software. Wir empfehlen keine Systeme gegen Provision.
                  Unsere einzige Motivation ist, dass Ihr Projekt erfolgreich abgeschlossen wird.
                  Denn das ist die Basis für eine langfristige Zusammenarbeit.
                </p>
                <p>
                  Unsere Kunden kommen aus Automotive, Finanz, Publishing, Health-Tech und NGOs.
                  Was sie verbindet: anspruchsvolle Projekte an der Schnittstelle von Business und
                  Technologie — genau unser Terrain seit 2013.
                </p>
                <Link href="/#kontakt" className={styles.btnPrimary} style={{ marginTop: '32px' }}>
                  Erstes Gespräch vereinbaren →
                </Link>
              </div>
              <div className={styles.imageWrap}>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                  alt="IT-Projektmanagement Meeting"
                />
              </div>
            </div>
          </div>
        </section>

        {/* REFERENZEN */}
        <section className={styles.section} id="referenzen">
          <div className={styles.sectionInner}>
            <h2>Referenzprojekte</h2>
            <p className={styles.sectionLead}>
              Projekte die in time und in budget ankamen — aus über zwölf Jahren Projektarbeit.
            </p>
            <div className={styles.refGrid}>
              {referenzen.map((r) => (
                <div key={r.name} className={styles.refCard}>
                  <div className={styles.refBranche}>{r.branche}</div>
                  <h3>{r.name}</h3>
                  <p>{r.projekt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG-HINWEIS */}
        <section className={styles.sectionAlt}>
          <div className={styles.sectionInner}>
            <div className={styles.blogTeaser}>
              <div>
                <p className={styles.eyebrow}>Aus der Praxis</p>
                <h2>Warum IT-Projekte scheitern — und was dagegen hilft</h2>
                <p>
                  Die häufigsten Fehler, die wir in 50+ Projekten beobachtet haben. Konkret,
                  ohne Consulting-Sprech.
                </p>
                <Link href="/blog/warum-it-projekte-scheitern" className={styles.btnPrimary}>
                  Artikel lesen →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section} id="faq">
          <div className={styles.sectionInner}>
            <h2>Häufige Fragen</h2>
            <div className={styles.faqList}>
              {faq.map((f) => (
                <div key={f.frage} className={styles.faqItem}>
                  <h3>{f.frage}</h3>
                  <p>{f.antwort}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weitere Leistungen */}
        <section className={styles.related}>
          <div className={styles.sectionInner}>
            <h2>Weitere Leistungen</h2>
            <div className={styles.relatedGrid}>
              <Link href="/it-beratung" className={styles.relatedCard}>
                <strong>IT-Beratung</strong>
                <p>Unabhängige Technologiestrategie ohne Hersteller-Bindung.</p>
              </Link>
              <Link href="/webentwicklung" className={styles.relatedCard}>
                <strong>Webentwicklung</strong>
                <p>Websites und Web-Applikationen aus einer Hand.</p>
              </Link>
              <Link href="/ki-saas" className={styles.relatedCard}>
                <strong>KI & SaaS</strong>
                <p>KI-gestützte Lösungen und Automatisierung für Ihre Prozesse.</p>
              </Link>
              <Link href="/data" className={styles.relatedCard}>
                <strong>Data & Integration</strong>
                <p>APIs, Data Warehouse und systemübergreifende Datenpipelines.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.sectionInner}>
            <h2>Ihr Projekt wartet nicht.</h2>
            <p>
              Ob Neustart, Stabilisierung oder strategische Planung — wir hören uns Ihr
              Vorhaben an, unverbindlich und ohne Beratungsgebühr.
            </p>
            <Link href="/#kontakt" className={styles.btnPrimary}>Jetzt Kontakt aufnehmen →</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
