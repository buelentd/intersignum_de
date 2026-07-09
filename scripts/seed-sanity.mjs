// scripts/seed-sanity.mjs
// Aufruf: SANITY_API_TOKEN=<token> node scripts/seed-sanity.mjs
import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('Fehler: SANITY_API_TOKEN nicht gesetzt.')
  console.error('Token erstellen: https://www.sanity.io/manage → Projekt → API → Tokens → Add API token (Editor-Rolle)')
  process.exit(1)
}

const client = createClient({
  projectId: 'firxgj0t',
  dataset:   'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

const docs = [
  // ─── IT-Beratung ───────────────────────────────────────────────────────────
  {
    _id:  'itBeratung',
    _type: 'itBeratung',
    hero: {
      eyebrow:  '01 — Leistung',
      title:    'IT-Projekte, die im Rahmen bleiben.',
      subtitle: 'Seit 2013 begleiten wir Unternehmen bei anspruchsvollen IT-Projekten — agil, herstellerunabhängig und mit klarem Fokus auf Ergebnis. Kein Vendor Lock-in, keine versteckten Agenden.',
    },
    leistungenTitel: 'Was wir für Sie tun',
    karten: [
      { _key: 'k1', titel: 'Agile Projektsteuerung',       text: 'Scrum, Kanban oder hybride Methoden — wir wählen das Rahmenwerk, das zu Ihrem Team und Ihren Zielen passt. Iterative Sprints statt großem Knall am Ende.' },
      { _key: 'k2', titel: 'Prozessanalyse & Optimierung', text: 'Wir analysieren bestehende Abläufe, identifizieren Engpässe und leiten konkrete Maßnahmen ab — messbar, priorisiert und umsetzbar.' },
      { _key: 'k3', titel: 'Technologieauswahl',           text: 'Vendor-neutral: Wir haben keine Partnerschaftsbindungen. Unsere Empfehlungen basieren ausschließlich auf Ihren Anforderungen und Best Practices.' },
      { _key: 'k4', titel: 'Budget- & Zeitplanung',        text: 'Realistische Roadmaps, Aufwandsschätzungen und regelmäßige Reviews halten Scope, Kosten und Timeline unter Kontrolle.' },
      { _key: 'k5', titel: 'Stakeholder-Kommunikation',    text: 'Wir übersetzen technische Komplexität in verständliche Entscheidungsgrundlagen für Management und Fachbereiche.' },
      { _key: 'k6', titel: 'Quality Assurance',            text: 'Testkonzepte, Code-Reviews und strukturierte Abnahmen sichern die Qualität — von der Anforderung bis zum Go-live.' },
    ],
    abschnitt: {
      titel: 'Unabhängig. Erfahren. Direkt.',
      text1: 'intersignum ist kein Systemhaus und kein Software-Hersteller. Wir haben keine Zertifizierungsverpflichtungen gegenüber Herstellern, keine Provisionen für Lizenzen und keine eigenen Produkte zu verkaufen. Das macht unsere Beratung frei von Interessenkonflikten.',
      text2: 'Über zwölf Jahre und mehr als 50 Projekte haben uns gelehrt: Die meisten IT-Projekte scheitern nicht an Technologie, sondern an schlechter Planung, unklaren Anforderungen und fehlender Kommunikation. Genau dort setzen wir an.',
    },
    cta: {
      titel: 'Bereit für Ihr nächstes IT-Projekt?',
      text:  'Schildern Sie uns Ihr Vorhaben — unverbindlich und kostenlos. Wir melden uns innerhalb eines Werktages.',
    },
  },

  // ─── Webentwicklung ────────────────────────────────────────────────────────
  {
    _id:  'webentwicklung',
    _type: 'webentwicklung',
    hero: {
      eyebrow:  '02 — Leistung',
      title:    'Web-Projekte, die performen.',
      subtitle: 'Wir entwickeln Websites und Web-Applikationen, die nicht nur gut aussehen, sondern schnell laden, gut ranken und einfach zu pflegen sind. Von der Konzeption bis zum Betrieb — alles aus einer Hand.',
    },
    leistungenTitel: 'Was wir entwickeln',
    karten: [
      { _key: 'k1', titel: 'Next.js & React',    text: 'Moderne Web-Applikationen mit Server-Side Rendering, statischer Generierung und optimaler Core Web Vitals Performance.' },
      { _key: 'k2', titel: 'Corporate Websites',  text: 'Professionelle Unternehmenspräsenzen mit CMS-Anbindung, mehrsprachiger Unterstützung und DSGVO-konformem Tracking.' },
      { _key: 'k3', titel: 'Web-Applikationen',   text: 'Komplexe SPA- und Fullstack-Anwendungen mit REST- oder GraphQL-APIs, Authentifizierung und skalierbarer Architektur.' },
      { _key: 'k4', titel: 'E-Commerce',          text: 'Online-Shops auf Basis von Shopify, WooCommerce oder maßgeschneiderten Lösungen — mit Fokus auf Conversion und Performance.' },
      { _key: 'k5', titel: 'CMS-Integration',     text: 'Headless-CMS-Lösungen mit Contentful, Sanity oder Storyblok — für redaktionelle Flexibilität ohne Entwicklerabhängigkeit.' },
      { _key: 'k6', titel: 'DevOps & Betrieb',    text: 'Deployment auf Vercel, AWS oder eigenen Servern — inklusive CI/CD-Pipelines, Monitoring und regelmäßiger Security-Updates.' },
    ],
    abschnitt: {
      titel: 'Technologie, die zum Projekt passt.',
      text1: 'Wir verwenden keine One-size-fits-all-Lösung. Je nach Anforderung setzen wir auf Next.js, Nuxt, WordPress oder individuelle Architekturen — immer mit Blick auf Wartbarkeit, Performance und Zukunftssicherheit.',
      text2: 'Unsere Kunden — von Medienunternehmen wie krone.at und Phoenix bis zu Finanzdienstleistern wie der DZ-Bank — schätzen vor allem eines: Wir liefern termingerecht und ohne böse Überraschungen.',
    },
    cta: {
      titel: 'Ihr nächstes Web-Projekt?',
      text:  'Schildern Sie uns Ihr Vorhaben — unverbindlich und kostenlos. Wir melden uns innerhalb eines Werktages.',
    },
  },

  // ─── KI & SaaS ────────────────────────────────────────────────────────────
  {
    _id:  'kiSaas',
    _type: 'kiSaas',
    hero: {
      eyebrow:  '03 — Leistung',
      title:    'KI, die in Ihrem Betrieb funktioniert.',
      subtitle: 'Kein Hype, keine Demos — wir entwickeln KI-Lösungen, die in Ihren Prozessen tatsächlich Mehrwert schaffen. DSGVO-konform, wartbar und nahtlos integriert.',
    },
    leistungenTitel: 'Unsere KI- & SaaS-Lösungen',
    karten: [
      { _key: 'k1', titel: 'KI-gestützte Automatisierung', text: 'Dokumentenverarbeitung, E-Mail-Routing, Reporting-Generierung — wir automatisieren repetitive Prozesse mit KI, die wirklich funktioniert.' },
      { _key: 'k2', titel: 'LLM-Integration',              text: 'GPT-4, Claude, Gemini oder Open-Source-Modelle: Wir integrieren Large Language Models sicher und DSGVO-konform in Ihre bestehenden Systeme.' },
      { _key: 'k3', titel: 'SaaS-Produktentwicklung',      text: 'Von der Idee bis zum marktfähigen SaaS-Produkt — Architektur, Multi-Tenancy, Billing-Integration und Launch-Strategie aus einer Hand.' },
      { _key: 'k4', titel: 'RAG & Wissensdatenbanken',     text: 'Retrieval-Augmented Generation für interne Wissensdatenbanken, Support-Bots und Dokumentensuche — auf Basis Ihrer eigenen Daten.' },
      { _key: 'k5', titel: 'KI-Strategie & Potenzialanalyse', text: 'Welche Prozesse lohnen sich für KI? Wir analysieren Ihr Unternehmen und erstellen eine priorisierte Roadmap mit realistischem ROI.' },
      { _key: 'k6', titel: 'Monitoring & Evaluation',      text: 'KI-Systeme brauchen Kontrolle. Wir bauen Evaluierungspipelines, Fallback-Logik und Human-in-the-Loop-Mechanismen für zuverlässige Ergebnisse.' },
    ],
    abschnitt: {
      titel: 'Pragmatisch. Sicher. Messbar.',
      text1: 'Viele Unternehmen experimentieren mit KI, ohne klare Erfolgskriterien. Wir starten anders: Wir definieren zuerst den Nutzen — in Stunden, Euro oder Fehlerquoten — und bauen dann die Lösung, die genau das liefert.',
      text2: 'Ob RAG-basierte Wissensdatenbank, automatisiertes Dokumenten-Routing oder ein vollständiges SaaS-Produkt mit KI-Kern — wir begleiten Sie von der Idee bis zum produktiven Betrieb.',
    },
    cta: {
      titel: 'KI-Potenzial in Ihrem Unternehmen?',
      text:  'Schildern Sie uns Ihre Prozesse — wir zeigen Ihnen, wo KI wirklich hilft und wo nicht.',
    },
  },

  // ─── Data & Integration ────────────────────────────────────────────────────
  {
    _id:  'data',
    _type: 'data',
    hero: {
      eyebrow:  '04 — Leistung',
      title:    'Daten, die Entscheidungen ermöglichen.',
      subtitle: 'Wir bauen APIs, Datenpipelines und Integrationen, die zuverlässig laufen — auf Open-Source-Technologien, ohne Vendor Lock-in und mit vollständiger Dokumentation.',
    },
    leistungenTitel: 'Was wir für Sie bauen',
    karten: [
      { _key: 'k1', titel: 'REST & GraphQL APIs',    text: 'Sauberes API-Design nach OpenAPI-Standard — mit Authentifizierung, Rate-Limiting, Versionierung und vollständiger Dokumentation.' },
      { _key: 'k2', titel: 'Data Warehouse Architektur', text: 'Aufbau moderner Datenhaushalte auf Basis von BigQuery, Redshift, Snowflake oder selbstgehostetem ClickHouse — ohne Vendor Lock-in.' },
      { _key: 'k3', titel: 'ETL/ELT-Pipelines',     text: 'Datenpipelines mit dbt, Apache Airflow oder Prefect — für zuverlässige, testbare und dokumentierte Datenflüsse.' },
      { _key: 'k4', titel: 'System-Integration',     text: 'Verbindung heterogener Systemlandschaften: ERP, CRM, E-Commerce, Marketing-Tools — via API, Webhooks oder Message-Queues.' },
      { _key: 'k5', titel: 'Echtzeit-Daten',         text: 'Streaming-Architekturen mit Kafka oder AWS Kinesis für Echtzeit-Analysen, Live-Dashboards und event-getriebene Systeme.' },
      { _key: 'k6', titel: 'Data Governance',        text: 'Datenqualitätssicherung, Lineage-Tracking und DSGVO-konforme Datenhaltung — damit Ihre Daten vertrauenswürdig bleiben.' },
    ],
    abschnitt: {
      titel: 'Offene Technologien. Kein Lock-in.',
      text1: 'Wir setzen konsequent auf Open-Source-Technologien und offene Standards. Das bedeutet: keine Abhängigkeit von einem einzelnen Anbieter, volle Kontrolle über Ihre Daten und keine steigenden Lizenzkosten bei wachsendem Datenvolumen.',
      text2: 'Von der ersten API bis zur vollständigen Data-Platform: Wir begleiten Unternehmen beim Aufbau einer Dateninfrastruktur, die mit ihren Anforderungen wächst — nicht dagegen arbeitet.',
    },
    cta: {
      titel: 'Dateninfrastruktur aufbauen?',
      text:  'Schildern Sie uns Ihre aktuelle Systemlandschaft — wir zeigen Ihnen, was möglich ist.',
    },
  },

  // ─── Kunden ────────────────────────────────────────────────────────────────
  { _id: 'kunde-hyundai',      _type: 'kunde', name: 'Hyundai Motor Europe',  logoUrl: '/logos/hyundai logo.svg',                          reihenfolge: 1  },
  { _id: 'kunde-dzbank',       _type: 'kunde', name: 'DZ-Bank',               logoUrl: '/logos/DZ Bank.png',                               reihenfolge: 2  },
  { _id: 'kunde-abgeordneten', _type: 'kunde', name: 'Abgeordnetenwatch.de',  logoUrl: '/logos/abgeordnetenwatch_logo.png',                reihenfolge: 3  },
  { _id: 'kunde-dav',          _type: 'kunde', name: 'DAV Summit Club',       logoUrl: '/logos/DAV Summit Club.jpg',                       reihenfolge: 4  },
  { _id: 'kunde-springer',     _type: 'kunde', name: 'Springer Professional', logoUrl: '/logos/springerprofessional_Logo.png',             reihenfolge: 5  },
  { _id: 'kunde-mailde',       _type: 'kunde', name: 'mail.de',              logoUrl: '/logos/Mail.de Logo.png',                          reihenfolge: 6  },
  { _id: 'kunde-gesundde',     _type: 'kunde', name: 'gesund.de',             logoUrl: '/logos/gesund-de-logo.jpg',                        reihenfolge: 7  },
  { _id: 'kunde-kroneat',      _type: 'kunde', name: 'krone.at',              logoUrl: '/logos/krone_at.jpg',                              reihenfolge: 8  },
  { _id: 'kunde-phoenix',      _type: 'kunde', name: 'Phoenix',               logoUrl: '/logos/phoenix logo.png',                          reihenfolge: 9  },
  { _id: 'kunde-uim',          _type: 'kunde', name: 'United Internet Media', logoUrl: '/logos/UIM_Logo.png',                              reihenfolge: 10 },
  { _id: 'kunde-vaventus',     _type: 'kunde', name: 'Vaventus AG',           logoUrl: '/logos/VAVENTUS_AG_logo.png',                      reihenfolge: 11 },
  { _id: 'kunde-hansemerkur',  _type: 'kunde', name: 'HanseMerkur',           logoUrl: '/logos/Ein-Unternehmen-der-HanseMerkur_gross.jpg', reihenfolge: 12 },
]

async function seed() {
  console.log('Starte Seed für Projekt firxgj0t / production ...')
  const tx = client.transaction()
  for (const doc of docs) {
    tx.createOrReplace(doc)
  }
  const result = await tx.commit()
  console.log(`✓ ${result.results.length} Dokumente erstellt/aktualisiert.`)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
