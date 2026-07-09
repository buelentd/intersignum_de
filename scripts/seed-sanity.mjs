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
  // ─── IT-Beratung ───────────────────────────────────────────────────────────
  {
    _id:  'itBeratung',
    _type: 'itBeratung',
    hero: {
      eyebrow:  'IT-Beratung · Berlin',
      title:    'IT-Beratung ohne Eigeninteresse.',
      subtitle: 'Wir beraten Sie unabhängig von Herstellern und Softwareanbietern — keine Provisionen, keine versteckten Interessen. Nur Ihr Projekterfolg zählt.',
    },
    leistungenTitel: 'Was wir für Sie tun',
    karten: [
      {
        _key: 'k1',
        titel: 'Technologiestrategie & Systemauswahl',
        text: 'Wir bewerten Technologien und Software ausschließlich nach Ihren Anforderungen — ohne Partnerschaftsbindungen oder Provisionsmodelle. Sie bekommen eine ehrliche Empfehlung, nicht eine Verkaufspräsentation.',
      },
      {
        _key: 'k2',
        titel: 'Prozessanalyse & Anforderungsmanagement',
        text: 'Bevor wir über Technologie sprechen, verstehen wir Ihre Geschäftsprozesse. Wir übersetzen fachliche Anforderungen in technische Spezifikationen — und verhindern damit die häufigste Ursache für gescheiterte IT-Projekte.',
      },
      {
        _key: 'k3',
        titel: 'Vendor-Management & Ausschreibungen',
        text: 'Wir begleiten Sie bei der Auswahl und Steuerung von IT-Dienstleistern. Von der Erstellung des Lastenhefts bis zur Bewertung der Angebote — neutral und auf Ihrer Seite.',
      },
      {
        _key: 'k4',
        titel: 'IT-Governance & Steuerung',
        text: 'Strukturen, Verantwortlichkeiten und Entscheidungsprozesse für Ihre IT. Damit IT-Entscheidungen nachvollziehbar sind und im Einklang mit Ihren Unternehmenszielen stehen.',
      },
    ],
    abschnitt: {
      titel: 'Warum herstellerunabhängig entscheidend ist',
      text1: 'Viele IT-Beratungen sind gleichzeitig Softwareverkäufer oder haben Partnerverträge mit bestimmten Anbietern. Das führt dazu, dass die Empfehlung nicht Ihrer Situation entspricht, sondern dem Provisionsmodell des Beraters.',
      text2: 'Intersignum hat keine Partnerverträge, keine Provisionen und keine eigenen Softwareprodukte. Wir verdienen ausschließlich an unserer Beratungsleistung — das ist der einzige Interessenausgleich der funktioniert.',
    },
    cta: {
      titel: 'Ihr nächstes IT-Projekt — neutral begleitet.',
      text:  'Das erste Gespräch ist kostenlos und unverbindlich. Schildern Sie uns Ihre Situation — wir hören zu.',
    },
  },

  // ─── Webentwicklung ────────────────────────────────────────────────────────
  {
    _id:  'webentwicklung',
    _type: 'webentwicklung',
    hero: {
      eyebrow:  'Webentwicklung · Berlin',
      title:    'Websites und Web-Apps, die funktionieren.',
      subtitle: 'Von der Konzeption bis zum laufenden Betrieb. Wir entwickeln mit modernen Technologien — performant, wartbar und ohne Vendor Lock-in.',
    },
    leistungenTitel: 'Was wir entwickeln',
    karten: [
      {
        _key: 'k1',
        titel: 'Corporate Websites & Landingpages',
        text: 'Professionelle Unternehmensauftritte mit Next.js und TypeScript — optimiert für Performance, SEO und Konversion. Gebaut mit CMS-Integration für einfache Inhaltspflege.',
      },
      {
        _key: 'k2',
        titel: 'Web-Applikationen',
        text: 'Maßgeschneiderte Web-Apps für komplexe Geschäftsprozesse. Von internen Tools bis zu kundenseitigen Portalen — skalierbar, sicher und wartbar.',
      },
      {
        _key: 'k3',
        titel: 'CMS-Integration & Headless',
        text: 'Sanity, Contentful, Strapi — wir integrieren das Content-Management-System das zu Ihrem Redaktionsprozess passt. Headless-Architektur für maximale Flexibilität.',
      },
      {
        _key: 'k4',
        titel: 'API-Anbindung & Systemintegration',
        text: 'Anbindung von CRM, ERP, Zahlungsanbietern und weiteren Drittsystemen. Wir sorgen dafür dass Ihre Website Teil Ihrer IT-Infrastruktur ist — nicht ein isoliertes Silo.',
      },
    ],
    abschnitt: {
      titel: 'Technologie mit Augenmaß',
      text1: 'Wir wählen Technologien nach Projektanforderungen — nicht nach Hype. Next.js für performante Web-Apps, TypeScript für langfristige Wartbarkeit, Sanity für einfache Content-Pflege. Was nicht gebraucht wird, kommt nicht rein.',
      text2: 'Besonders wichtig: Wir übergeben kein System das nur der Entwickler versteht. Dokumentation, Übergabegespräche und eine definierte Hypercare-Phase nach Launch sind Standard — nicht Extra.',
    },
    cta: {
      titel: 'Ihr Web-Projekt — richtig gemacht.',
      text:  'Schildern Sie uns Ihre Anforderungen. Wir prüfen was machbar ist und melden uns innerhalb eines Werktages.',
    },
  },

  // ─── KI & SaaS ────────────────────────────────────────────────────────────
  {
    _id:  'kiSaas',
    _type: 'kiSaas',
    hero: {
      eyebrow:  'KI & SaaS · Berlin',
      title:    'KI die wirklich eingesetzt wird.',
      subtitle: 'Keine Demos, keine Buzzwords. Wir integrieren KI dort wo sie echten Mehrwert schafft — in Ihre bestehenden Prozesse, DSGVO-konform und mit klarem ROI.',
    },
    leistungenTitel: 'Unsere KI- & SaaS-Lösungen',
    karten: [
      {
        _key: 'k1',
        titel: 'LLM-Integration & KI-Automatisierung',
        text: 'Wir integrieren Large Language Models (OpenAI, Claude, lokale Modelle) in Ihre bestehenden Workflows. Dokumentenverarbeitung, Klassifizierung, interne Wissensdatenbanken — pragmatisch umgesetzt.',
      },
      {
        _key: 'k2',
        titel: 'KI-Strategie & Use-Case-Entwicklung',
        text: 'Bevor wir entwickeln, finden wir die richtigen Anwendungsfälle. Welche Prozesse profitieren wirklich von KI? Was ist wirtschaftlich sinnvoll? Wir beantworten das ohne Verkaufsinteresse.',
      },
      {
        _key: 'k3',
        titel: 'SaaS-Produkte & interne Tools',
        text: 'Maßgeschneiderte SaaS-Anwendungen für Ihre Branche oder Ihre internen Teams. Von der Idee bis zur produktiven Lösung — iterativ und mit frühem Nutzerfeedback.',
      },
      {
        _key: 'k4',
        titel: 'DSGVO-konforme KI-Architektur',
        text: 'KI auf eigenen Servern oder in EU-Rechenzentren. Wir entwerfen Architekturen die Datenschutzanforderungen erfüllen ohne die Nutzbarkeit zu kompromittieren.',
      },
    ],
    abschnitt: {
      titel: 'KI nüchtern betrachtet',
      text1: 'KI ist ein Werkzeug — kein Allheilmittel. Wir erleben in Projekten regelmäßig KI-Initiativen die scheitern weil der Use Case nicht klar ist, die Datenqualität fehlt oder die Integration in bestehende Systeme unterschätzt wird.',
      text2: 'Unser Ansatz: Erst den Prozess verstehen, dann entscheiden ob und wie KI hilft. Das klingt trivial — ist es aber nicht, wenn man sieht wie viele Unternehmen mit KI-Demos statt Lösungen abgespeist werden.',
    },
    cta: {
      titel: 'KI für Ihr Unternehmen — erst denken, dann bauen.',
      text:  'Schildern Sie uns Ihren Use Case. Wir sagen Ihnen ehrlich ob KI die richtige Antwort ist.',
    },
  },

  // ─── Data & Integration ────────────────────────────────────────────────────
  {
    _id:  'data',
    _type: 'data',
    hero: {
      eyebrow:  'Data & Integration · Berlin',
      title:    'Daten verbinden. Systeme integrieren.',
      subtitle: 'REST API Design, Data Warehouse Architektur und systemübergreifende Datenpipelines — auf Open-Source-Technologien, ohne Vendor Lock-in.',
    },
    leistungenTitel: 'Was wir für Sie bauen',
    karten: [
      {
        _key: 'k1',
        titel: 'REST API Design & Dokumentation',
        text: 'Saubere, versionierte und dokumentierte APIs die langfristig wartbar sind. Wir entwerfen API-Schnittstellen die auch in drei Jahren noch verständlich sind — für Ihr Team und für externe Entwickler.',
      },
      {
        _key: 'k2',
        titel: 'System-Integration & Middleware',
        text: 'CRM, ERP, HR-Systeme, Zahlungsanbieter — wir verbinden Ihre Systeme miteinander ohne proprietäre Integrationslösungen die Sie langfristig binden. HubSpot, Personio, SAP und mehr.',
      },
      {
        _key: 'k3',
        titel: 'Data Warehouse & Analytics',
        text: 'Moderne Data Warehouse Architekturen auf Basis von PostgreSQL, dbt und Open-Source-Tools. Ihre Daten strukturiert, auswertbar und unabhängig von teuren Lizenzmodellen.',
      },
      {
        _key: 'k4',
        titel: 'ETL/ELT Pipelines',
        text: 'Robuste Datenpipelines die auch bei veränderten Quellsystemen funktionieren. Mit dbt, Airflow oder leichtgewichtigen Alternativen — je nach Anforderung.',
      },
    ],
    abschnitt: {
      titel: 'Daten gehören Ihnen — nicht dem Anbieter',
      text1: 'Proprietäre Datenintegrationslösungen klingen oft verlockend. Bis der Anbieter die Preise erhöht, das Produkt einstellt oder Sie merken dass Export nicht vorgesehen ist. Wir bauen auf Open Source.',
      text2: 'PostgreSQL, dbt, Apache Airflow, n8n — bewährte Tools mit aktiven Communities, ohne Lizenzabhängigkeit. Sie behalten die Kontrolle über Ihre Dateninfrastruktur.',
    },
    cta: {
      titel: 'Datenchaos lösen — strukturiert.',
      text:  'Schildern Sie uns Ihr Datenproblem. Wir analysieren und empfehlen die passende Architektur.',
    },
  },

  // ─── Kunden ────────────────────────────────────────────────────────────────
  { _id: 'kunde-hyundai',      _type: 'kunde', name: 'Hyundai Motor Europe',  logoUrl: '/logos/hyundai logo.svg',                          reihenfolge: 1  },
  { _id: 'kunde-dzbank',       _type: 'kunde', name: 'DZ-Bank',               logoUrl: '/logos/DZ Bank.png',                               reihenfolge: 2  },
  { _id: 'kunde-abgeordneten', _type: 'kunde', name: 'Abgeordnetenwatch.de',  logoUrl: '/logos/abgeordnetenwatch_logo.png',                reihenfolge: 3  },
  { _id: 'kunde-dav',          _type: 'kunde', name: 'DAV Summit Club',       logoUrl: '/logos/DAV Summit Club.jpg',                       reihenfolge: 4  },
  { _id: 'kunde-springer',     _type: 'kunde', name: 'Springer Professional', logoUrl: '/logos/springerprofessional_Logo.png',             reihenfolge: 5  },
  { _id: 'kunde-mailde',       _type: 'kunde', name: 'mail.de',               logoUrl: '/logos/Mail.de Logo.png',                          reihenfolge: 6  },
  { _id: 'kunde-gesundde',     _type: 'kunde', name: 'gesund.de',             logoUrl: '/logos/gesund-de-logo.jpg',                        reihenfolge: 7  },
  { _id: 'kunde-kroneat',      _type: 'kunde', name: 'krone.at',              logoUrl: '/logos/krone_at.jpg',                              reihenfolge: 8  },
  { _id: 'kunde-phoenix',      _type: 'kunde', name: 'Phoenix',               logoUrl: '/logos/phoenix logo.png',                          reihenfolge: 9  },
  { _id: 'kunde-uim',          _type: 'kunde', name: 'United Internet Media', logoUrl: '/logos/UIM_Logo.png',                              reihenfolge: 10 },
  { _id: 'kunde-vaventus',     _type: 'kunde', name: 'Vaventus AG',           logoUrl: '/logos/VAVENTUS_AG_logo.png',                      reihenfolge: 11 },
  { _id: 'kunde-hansemerkur',  _type: 'kunde', name: 'HanseMerkur',           logoUrl: '/logos/Ein-Unternehmen-der-HanseMerkur_gross.jpg', reihenfolge: 12 },
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
