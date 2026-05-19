import { groq } from 'next-sanity'
import { client } from './client'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StartseiteContent {
  hero: {
    subLabel: string
    h1Zeile1: string
    h1Hervor1: string
    h1Hervor2: string
    h1Zeile4: string
    text: string
    ctaPrimary: string
    ctaSekundaer: string
  }
  stats: { num: string; label: string }[]
  leistungen: {
    h2: string
    karten: { num: string; title: string; href: string; text: string }[]
  }
  kunden: { eyebrow: string; h2: string }
  ansatz: {
    h2: string
    schritte: { num: string; title: string; text: string }[]
    zitat: { text: string; sub: string; tags: string[] }
  }
  kiBanner: { titel: string; text: string; cta: string }
  kontakt: { h2: string; intro: string; adresse: string }
}

export interface KarteData {
  num: string
  titel: string
  text: string
}

export interface KundeData {
  name: string
  logo: string
}

export interface LeistungsSeiteContent {
  hero: { eyebrow: string; title: string; subtitle: string }
  leistungenTitel: string
  karten: KarteData[]
  abschnitt: { titel: string; text1: string; text2: string }
  cta: { titel: string; text: string }
}

// ─── Helper ───────────────────────────────────────────────────────────────────

type RawKarte = { titel: string; text: string }

function withNum(karten: RawKarte[] = []): KarteData[] {
  return karten.map((k, i) => ({
    num:   String(i + 1).padStart(2, '0'),
    titel: k.titel ?? '',
    text:  k.text  ?? '',
  }))
}

function mapSeite(d: Record<string, any> | null, defaults: { eyebrow: string; title: string; leistungenTitel: string }): LeistungsSeiteContent {
  return {
    hero: {
      eyebrow:  d?.hero?.eyebrow  ?? defaults.eyebrow,
      title:    d?.hero?.title    ?? defaults.title,
      subtitle: d?.hero?.subtitle ?? '',
    },
    leistungenTitel: d?.leistungenTitel ?? defaults.leistungenTitel,
    karten: withNum(d?.karten),
    abschnitt: {
      titel: d?.abschnitt?.titel ?? '',
      text1: d?.abschnitt?.text1 ?? '',
      text2: d?.abschnitt?.text2 ?? '',
    },
    cta: {
      titel: d?.cta?.titel ?? '',
      text:  d?.cta?.text  ?? '',
    },
  }
}

const opts = { next: { revalidate: 60 } }

// ─── Fetch functions ──────────────────────────────────────────────────────────

export async function getITBeratungContent(): Promise<LeistungsSeiteContent> {
  const d = await client.fetch(groq`*[_type == "itBeratung"][0]`, {}, opts)
  return mapSeite(d, { eyebrow: '01 — Leistung', title: 'IT-Beratung', leistungenTitel: 'Was wir für Sie tun' })
}

export async function getWebentwicklungContent(): Promise<LeistungsSeiteContent> {
  const d = await client.fetch(groq`*[_type == "webentwicklung"][0]`, {}, opts)
  return mapSeite(d, { eyebrow: '02 — Leistung', title: 'Webentwicklung', leistungenTitel: 'Was wir entwickeln' })
}

export async function getKISaasContent(): Promise<LeistungsSeiteContent> {
  const d = await client.fetch(groq`*[_type == "kiSaas"][0]`, {}, opts)
  return mapSeite(d, { eyebrow: '03 — Leistung', title: 'KI & SaaS', leistungenTitel: 'Unsere KI- & SaaS-Lösungen' })
}

export async function getDataContent(): Promise<LeistungsSeiteContent> {
  const d = await client.fetch(groq`*[_type == "data"][0]`, {}, opts)
  return mapSeite(d, { eyebrow: '04 — Leistung', title: 'Data & Integration', leistungenTitel: 'Was wir für Sie bauen' })
}

export async function getStartseiteContent(): Promise<StartseiteContent> {
  const d = await client.fetch(groq`*[_type == "startseite"][0]`, {}, opts)
  return {
    hero: {
      subLabel:     d?.hero?.subLabel     ?? 'IT-Beratung · Webentwicklung · KI & SaaS · Berlin',
      h1Zeile1:     d?.hero?.h1Zeile1     ?? 'IT-Projekte,',
      h1Hervor1:    d?.hero?.h1Hervor1    ?? 'in time',
      h1Hervor2:    d?.hero?.h1Hervor2    ?? 'in budget',
      h1Zeile4:     d?.hero?.h1Zeile4     ?? 'bleiben.',
      text:         d?.hero?.text         ?? 'Wir begleiten Unternehmen bei anspruchsvollen IT-Projekten — agil, technologieunabhängig und mit über zwölf Jahren Erfahrung. Von der Strategie bis zur Umsetzung.',
      ctaPrimary:   d?.hero?.ctaPrimary   ?? 'Projekt besprechen →',
      ctaSekundaer: d?.hero?.ctaSekundaer ?? 'Leistungen ansehen',
    },
    stats: d?.stats ?? [
      { num: '12+',   label: 'Jahre Erfahrung in\nIT-Beratung & Entwicklung' },
      { num: '50+',   label: 'erfolgreich abgeschlossene\nProjekte' },
      { num: '100 %', label: 'herstellerunabhängige\nTechnologieberatung' },
    ],
    leistungen: {
      h2: d?.leistungen?.h2 ?? 'Was wir für Sie tun',
      karten: d?.leistungen?.karten ?? [
        { num: '01', title: 'IT-Beratung',       href: '/it-beratung',    text: 'Agile Projektsteuerung, Prozessanalyse und unabhängige Technologiestrategie. Ihre Projekte bleiben im Rahmen — ohne Überraschungen.' },
        { num: '02', title: 'Webentwicklung',     href: '/webentwicklung', text: 'Professionelle Websites und Web-Applikationen. Konzeption, Design, Entwicklung und Betrieb — alles aus einer Hand.' },
        { num: '03', title: 'KI & SaaS',          href: '/ki-saas',        text: 'KI-gestützte Lösungen und SaaS-Produkte für Ihre Prozesse. Automatisierung und datengetriebene Entscheidungen — pragmatisch umgesetzt.' },
        { num: '04', title: 'Data & Integration', href: '/data',           text: 'REST APIs, Data Warehouse Architektur und systemübergreifende Datenpipelines — auf Open-Source-Technologien ohne Vendor Lock-in.' },
      ],
    },
    kunden: {
      eyebrow: d?.kunden?.eyebrow ?? 'Referenzen',
      h2:      d?.kunden?.h2      ?? 'Vertrauen seit 2013',
    },
    ansatz: {
      h2: d?.ansatz?.h2 ?? 'Wie wir arbeiten',
      schritte: d?.ansatz?.schritte ?? [
        { num: '01', title: 'Verstehen', text: 'Wir analysieren Ihr Business und seine Prozesse. Keine Hersteller-Bindungen — nur unabhängiges, technologisches Know-how in Ihrem Interesse.' },
        { num: '02', title: 'Planen',    text: 'Agile Sprints statt großem Knall. Scope und Budget werden gemeinsam in regelmäßigen Sessions verfeinert — transparent und nachvollziehbar.' },
        { num: '03', title: 'Umsetzen',  text: 'State-of-the-art Technologie, pragmatisch angewandt. Von klassischer Webentwicklung bis zur Integration moderner KI-Lösungen.' },
        { num: '04', title: 'Feiern',    text: 'Der einzige „Big Bang" kommt vom Sektkorken am Ende eines erfolgreichen Projekts. Das ist unser Versprechen.' },
      ],
      zitat: {
        text: d?.ansatz?.zitat?.text ?? 'IT projects stay in time and in budget if you do them agile. Not joking.',
        sub:  d?.ansatz?.zitat?.sub  ?? 'Wir verstehen Ihr Business und seine Prozesse. Sie profitieren von unserem unabhängigen Technologie-Know-how — ohne Partnerschaftsbindungen.',
        tags: d?.ansatz?.zitat?.tags ?? ['Agile', 'Berlin', 'Seit 2013', 'Herstellerunabhängig'],
      },
    },
    kiBanner: {
      titel: d?.kiBanner?.titel ?? 'Neu: KI-gestützte Lösungen für Ihr Unternehmen',
      text:  d?.kiBanner?.text  ?? 'intersignum entwickelt maßgeschneiderte KI-Anwendungen und SaaS-Produkte — praxisnah, DSGVO-konform und nahtlos in Ihre bestehenden Prozesse integriert.',
      cta:   d?.kiBanner?.cta   ?? 'Jetzt Projekt besprechen →',
    },
    kontakt: {
      h2:      d?.kontakt?.h2      ?? 'Lassen Sie uns sprechen.',
      intro:   d?.kontakt?.intro   ?? 'Schildern Sie uns Ihr Vorhaben — unverbindlich und kostenlos. Wir melden uns innerhalb eines Werktages.',
      adresse: d?.kontakt?.adresse ?? 'Pasewalker Str. 15, 13127 Berlin',
    },
  }
}

export async function getKundenContent(): Promise<KundeData[]> {
  const rows = await client.fetch(
    groq`*[_type == "kunde"] | order(reihenfolge asc) { name, "logo": logoUrl }`,
    {},
    opts,
  )
  return rows ?? []
}
