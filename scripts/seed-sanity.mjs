// scripts/seed-sanity.mjs
// Aufruf: SANITY_API_TOKEN=<token> node scripts/seed-sanity.mjs
import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('Fehler: SANITY_API_TOKEN nicht gesetzt.')
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
  // ─── Startseite ────────────────────────────────────────────────────────────
  {
    _id:   'startseite',
    _type: 'startseite',
    hero: {
      subLabel:     'IT-Beratung · Webentwicklung · KI & SaaS · Berlin',
      h1Zeile1:     'IT-Projekte,',
      h1Hervor1:    'in time',
      h1Hervor2:    'in budget',
      h1Zeile4:     'bleiben.',
      text:         'Wir begleiten Unternehmen bei anspruchsvollen IT-Projekten — agil, technologieunabhängig und mit über zwölf Jahren Erfahrung. Von der Strategie bis zur Umsetzung.',
      ctaPrimary:   'Projekt besprechen →',
      ctaSekundaer: 'Leistungen ansehen',
    },
    stats: [
      { _key: 's1', num: '12+',   label: 'Jahre Erfahrung in\nIT-Beratung & Entwicklung' },
      { _key: 's2', num: '50+',   label: 'erfolgreich abgeschlossene\nProjekte' },
      { _key: 's3', num: '100 %', label: 'herstellerunabhängige\nTechnologieberatung' },
    ],
    leistungen: {
      h2: 'Was wir für Sie tun',
      karten: [
        { _key: 'l1', num: '01', title: 'IT-Beratung',       href: '/it-beratung',    text: 'Agile Projektsteuerung, Prozessanalyse und unabhängige Technologiestrategie. Ihre Projekte bleiben im Rahmen — ohne Überraschungen.' },
        { _key: 'l2', num: '02', title: 'Webentwicklung',     href: '/webentwicklung', text: 'Professionelle Websites und Web-Applikationen. Konzeption, Design, Entwicklung und Betrieb — alles aus einer Hand.' },
        { _key: 'l3', num: '03', title: 'KI & SaaS',          href: '/ki-saas',        text: 'KI-gestützte Lösungen und SaaS-Produkte für Ihre Prozesse. Automatisierung und datengetriebene Entscheidungen — pragmatisch umgesetzt.' },
        { _key: 'l4', num: '04', title: 'Data & Integration', href: '/data',           text: 'REST APIs, Data Warehouse Architektur und systemübergreifende Datenpipelines — auf Open-Source-Technologien ohne Vendor Lock-in.' },
      ],
    },
    kunden: {
      eyebrow: 'Referenzen',
      h2:      'Vertrauen seit 2013',
    },
    ansatz: {
      h2: 'Wie wir arbeiten',
      schritte: [
        { _key: 'a1', num: '01', title: 'Verstehen', text: 'Wir analysieren Ihr Business und seine Prozesse. Keine Hersteller-Bindungen — nur unabhängiges, technologisches Know-how in Ihrem Interesse.' },
        { _key: 'a2', num: '02', title: 'Planen',    text: 'Agile Sprints statt großem Knall. Scope und Budget werden gemeinsam in regelmäßigen Sessions verfeinert — transparent und nachvollziehbar.' },
        { _key: 'a3', num: '03', title: 'Umsetzen',  text: 'State-of-the-art Technologie, pragmatisch angewandt. Von klassischer Webentwicklung bis zur Integration moderner KI-Lösungen.' },
        { _key: 'a4', num: '04', title: 'Feiern',    text: 'Der einzige „Big Bang" kommt vom Sektkorken am Ende eines erfolgreichen Projekts. Das ist unser Versprechen.' },
      ],
      zitat: {
        text: 'IT projects stay in time and in budget if you do them agile. Not joking.',
        sub:  'Wir verstehen Ihr Business und seine Prozesse. Sie profitieren von unserem unabhängigen Technologie-Know-how — ohne Partnerschaftsbindungen.',
        tags: ['Agile', 'Berlin', 'Seit 2013', 'Herstellerunabhängig'],
      },
    },
    kiBanner: {
      titel: 'Neu: KI-gestützte Lösungen für Ihr Unternehmen',
      text:  'intersignum entwickelt maßgeschneiderte KI-Anwendungen und SaaS-Produkte — praxisnah, DSGVO-konform und nahtlos in Ihre bestehenden Prozesse integriert.',
      cta:   'Jetzt Projekt besprechen →',
    },
    kontakt: {
      h2:      'Lassen Sie uns sprechen.',
      intro:   'Schildern Sie uns Ihr Vorhaben — unverbindlich und kostenlos. Wir melden uns innerhalb eines Werktages.',
      adresse: 'Pasewalker Str. 15, 13127 Berlin',
    },
  },

  // ─── IT-Beratung ───────────────────────────────────────────────────────────
  {
    _id:  'itBeratung',
    _type: 'itBeratung',
    hero: {
      eyebrow:  '01 — Leistung',
      title:    'IT-Beratung',
      subtitle: 'Agile Projektsteuerung, Prozessanalyse und unabhängige Technologiestrategie. Ihre Projekte bleiben im Rahmen — ohne Überraschungen.',
    },
    leistungenTitel: 'Was wir für Sie tun',
    karten: [
      { _key: 'k1', titel: 'Agile Projektsteuerung',   text: 'Wir steuern Ihre IT-Projekte nach agilen Methoden — transparent, iterativ und mit klarem Fokus auf Budget und Timeline.' },
      { _key: 'k2', titel: 'Prozessanalyse',           text: 'Wir analysieren Ihre bestehenden Prozesse und identifizieren Optimierungspotenziale — systematisch und datengetrieben.' },
      { _key: 'k3', titel: 'Technologiestrategie',     text: 'Unabhängig von Herstellern beraten wir Sie bei der Auswahl der richtigen Technologien für Ihr Unternehmen.' },
      { _key: 'k4', titel: 'Stakeholder Management',   text: 'Wir moderieren zwischen technischen Teams und Business-Seite — damit alle an einem Strang ziehen.' },
    ],
    abschnitt: {
      titel: 'Unser Ansatz',
      text1: 'Über 12 Jahre Erfahrung in anspruchsvollen IT-Projekten haben uns eines gelehrt: Technologie allein löst keine Probleme. Es braucht strukturierte Prozesse, klare Kommunikation und echtes Verständnis für das Business.',
      text2: 'Wir sind herstellerunabhängig — das bedeutet: wir empfehlen was für Sie passt, nicht was uns Provision bringt.',
    },
    cta: {
      titel: 'Bereit für Ihr nächstes IT-Projekt?',
      text:  'Schildern Sie uns Ihr Vorhaben — unverbindlich und kostenlos.',
    },
  },

  // ─── Webentwicklung ────────────────────────────────────────────────────────
  {
    _id:  'webentwicklung',
    _type: 'webentwicklung',
    hero: {
      eyebrow:  '02 — Leistung',
      title:    'Webentwicklung',
      subtitle: 'Professionelle Websites und Web-Applikationen. Konzeption, Design, Entwicklung und Betrieb — alles aus einer Hand.',
    },
    leistungenTitel: 'Was wir entwickeln',
    karten: [
      { _key: 'k1', titel: 'Corporate Websites',  text: 'Professionelle Unternehmenswebsites mit modernem Design, optimiert für Performance und Suchmaschinen.' },
      { _key: 'k2', titel: 'Web-Applikationen',   text: 'Maßgeschneiderte Web-Apps für komplexe Geschäftsprozesse — skalierbar, sicher und benutzerfreundlich.' },
      { _key: 'k3', titel: 'E-Commerce',          text: 'Online-Shops mit optimierter User Experience und nahtloser Integration in bestehende Systeme.' },
      { _key: 'k4', titel: 'API-Integration',     text: 'Anbindung von Drittsystemen, CRM, ERP und weiteren Diensten über moderne REST- und GraphQL-APIs.' },
    ],
    abschnitt: {
      titel: 'Moderne Technologien',
      text1: 'Wir setzen auf bewährte und zukunftssichere Technologien — React, Next.js, TypeScript, Node.js und mehr. Immer angepasst an Ihre Anforderungen.',
      text2: 'Von der ersten Konzeption bis zum laufenden Betrieb begleiten wir Sie durch den gesamten Entwicklungsprozess.',
    },
    cta: {
      titel: 'Ihr nächstes Web-Projekt?',
      text:  'Schildern Sie uns Ihre Anforderungen — wir melden uns innerhalb eines Werktages.',
    },
  },

  // ─── KI & SaaS ────────────────────────────────────────────────────────────
  {
    _id:  'kiSaas',
    _type: 'kiSaas',
    hero: {
      eyebrow:  '03 — Leistung',
      title:    'KI & SaaS',
      subtitle: 'KI-gestützte Lösungen und SaaS-Produkte für Ihre Prozesse. Automatisierung und datengetriebene Entscheidungen — pragmatisch umgesetzt.',
    },
    leistungenTitel: 'Unsere KI- & SaaS-Lösungen',
    karten: [
      { _key: 'k1', titel: 'KI-Integration',                 text: 'Wir integrieren Large Language Models und KI-APIs in Ihre bestehenden Prozesse — DSGVO-konform und praxisnah.' },
      { _key: 'k2', titel: 'Prozessautomatisierung',         text: 'Automatisierung wiederkehrender Aufgaben durch intelligente Workflows — spart Zeit und reduziert Fehler.' },
      { _key: 'k3', titel: 'SaaS-Entwicklung',               text: 'Maßgeschneiderte SaaS-Produkte für Ihre Branche — von der Idee bis zur marktreifen Lösung.' },
      { _key: 'k4', titel: 'Datengetriebene Entscheidungen', text: 'Dashboards, Analytics und Reporting-Systeme die Ihnen die richtigen Daten zur richtigen Zeit liefern.' },
    ],
    abschnitt: {
      titel: 'Pragmatisch umgesetzt',
      text1: 'KI ist kein Selbstzweck. Wir setzen KI dort ein wo sie echten Mehrwert schafft — messbar, nachvollziehbar und sicher.',
      text2: 'Alle Lösungen werden DSGVO-konform entwickelt und nahtlos in Ihre bestehende IT-Infrastruktur integriert.',
    },
    cta: {
      titel: 'KI für Ihr Unternehmen?',
      text:  'Wir zeigen Ihnen konkret wie KI Ihre Prozesse verbessern kann — unverbindlich und kostenlos.',
    },
  },

  // ─── Data & Integration ────────────────────────────────────────────────────
  {
    _id:  'data',
    _type: 'data',
    hero: {
      eyebrow:  '04 — Leistung',
      title:    'Data & Integration',
      subtitle: 'REST API Design, Data Warehouse Architektur und systemübergreifende Datenpipelines — auf Open-Source-Technologien ohne Vendor Lock-in.',
    },
    leistungenTitel: 'Was wir für Sie bauen',
    karten: [
      { _key: 'k1', titel: 'REST API Design',          text: 'Saubere, dokumentierte und versionierte APIs die Ihre Systeme zuverlässig verbinden.' },
      { _key: 'k2', titel: 'Data Warehouse',           text: 'Moderne Data Warehouse Architekturen auf Open-Source-Basis — skalierbar und wartbar.' },
      { _key: 'k3', titel: 'ETL / ELT Pipelines',      text: 'Robuste Datenpipelines mit dbt, Airflow und weiteren bewährten Tools ohne Vendor Lock-in.' },
      { _key: 'k4', titel: 'System-Integration',       text: 'Middleware und API-Gateways die Ihre bestehenden Systeme nahtlos miteinander verbinden.' },
    ],
    abschnitt: {
      titel: 'Open Source — mit Lizenz',
      text1: 'Wir setzen konsequent auf Open-Source-Technologien. Keine Lizenzkosten, keine Abhängigkeit von einzelnen Anbietern — volle Kontrolle über Ihre Dateninfrastruktur.',
      text2: 'Von PostgreSQL über dbt bis Apache Airflow: wir kennen den Stack und bringen ihn produktiv in Betrieb.',
    },
    cta: {
      titel: 'Dateninfrastruktur aufbauen?',
      text:  'Schildern Sie uns Ihr Datenproblem — wir finden die richtige Lösung.',
    },
  },

  // ─── Kunden ────────────────────────────────────────────────────────────────
  { _id: 'kunde-hyundai',       _type: 'kunde', name: 'Hyundai Motor Europe',   logoUrl: '/logos/hyundai logo.svg',                              reihenfolge: 1  },
  { _id: 'kunde-dzbank',        _type: 'kunde', name: 'DZ-Bank',                logoUrl: '/logos/DZ Bank.png',                                   reihenfolge: 2  },
  { _id: 'kunde-abgeordneten',  _type: 'kunde', name: 'Abgeordnetenwatch.de',   logoUrl: '/logos/abgeordnetenwatch_logo.png',                    reihenfolge: 3  },
  { _id: 'kunde-dav',           _type: 'kunde', name: 'DAV Summit Club',        logoUrl: '/logos/DAV Summit Club.jpg',                           reihenfolge: 4  },
  { _id: 'kunde-springer',      _type: 'kunde', name: 'Springer Professional',  logoUrl: '/logos/springerprofessional_Logo.png',                 reihenfolge: 5  },
  { _id: 'kunde-mailde',        _type: 'kunde', name: 'mail.de',               logoUrl: '/logos/Mail.de Logo.png',                              reihenfolge: 6  },
  { _id: 'kunde-gesundde',      _type: 'kunde', name: 'gesund.de',              logoUrl: '/logos/gesund-de-logo.jpg',                            reihenfolge: 7  },
  { _id: 'kunde-kroneat',       _type: 'kunde', name: 'krone.at',               logoUrl: '/logos/krone_at.jpg',                                  reihenfolge: 8  },
  { _id: 'kunde-phoenix',       _type: 'kunde', name: 'Phoenix',                logoUrl: '/logos/phoenix logo.png',                              reihenfolge: 9  },
  { _id: 'kunde-uim',           _type: 'kunde', name: 'United Internet Media',  logoUrl: '/logos/UIM_Logo.png',                                  reihenfolge: 10 },
  { _id: 'kunde-vaventus',      _type: 'kunde', name: 'Vaventus AG',            logoUrl: '/logos/VAVENTUS_AG_logo.png',                          reihenfolge: 11 },
  { _id: 'kunde-hansemerkur',   _type: 'kunde', name: 'HanseMerkur',            logoUrl: '/logos/Ein-Unternehmen-der-HanseMerkur_gross.jpg',     reihenfolge: 12 },
]

async function seed() {
  console.log(`Starte Seed für Projekt firxgj0t / production ...`)
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
