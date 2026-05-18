import { groq } from 'next-sanity'
import { client } from './client'

// ─── Types (same interface as lib/notion.ts) ──────────────────────────────────

export interface KarteData {
  num: string
  titel: string
  text: string
}

export interface KundeData {
  name: string
  logo: string
}

export interface ITBeratungContent {
  hero: { eyebrow: string; title: string; subtitle: string }
  leistungenTitel: string
  karten: KarteData[]
  systeme: { titel: string; text: string; tags: string[] }
  ansatz: { titel: string; text1: string; text2: string }
  cta: { titel: string; text: string }
}

export interface KISaasContent {
  hero: { eyebrow: string; title: string; subtitle: string }
  leistungenTitel: string
  karten: KarteData[]
  tech: { titel: string; text1: string; tags: string[] }
  ansatz: { titel: string; text1: string; text2: string }
  cta: { titel: string; text: string }
}

export interface DataContent {
  hero: { eyebrow: string; title: string; subtitle: string }
  leistungenTitel: string
  karten: KarteData[]
  opensource: { titel: string; text1: string; text2: string; tags: string[] }
  praxis: { titel: string; text1: string; text2: string }
  cta: { titel: string; text: string }
}

export interface WebentwicklungContent {
  hero: { eyebrow: string; title: string; subtitle: string }
  leistungenTitel: string
  karten: KarteData[]
  stack: { titel: string; text1: string; tags: string[] }
  skaliert: { titel: string; text1: string; text2: string }
  cta: { titel: string; text: string }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

type RawKarte = { titel: string; text: string }

function withNum(karten: RawKarte[] = []): KarteData[] {
  return karten.map((k, i) => ({
    num: String(i + 1).padStart(2, '0'),
    titel: k.titel ?? '',
    text:  k.text  ?? '',
  }))
}

// ─── Fetch functions ──────────────────────────────────────────────────────────

export async function getITBeratungContent(): Promise<ITBeratungContent> {
  const d = await client.fetch(groq`*[_type == "itBeratung"][0]`, {}, { next: { revalidate: 60 } })
  return {
    hero: {
      eyebrow:  d?.hero?.eyebrow  ?? '01 — Leistung',
      title:    d?.hero?.title    ?? 'IT-Beratung & Integration',
      subtitle: d?.hero?.subtitle ?? '',
    },
    leistungenTitel: d?.leistungenTitel ?? 'Was wir für Sie tun',
    karten: withNum(d?.karten),
    systeme: {
      titel: d?.systeme?.titel ?? 'Systeme die wir integrieren',
      text:  d?.systeme?.text  ?? '',
      tags:  d?.systeme?.tags  ?? [],
    },
    ansatz: {
      titel: d?.ansatz?.titel ?? 'Unser Ansatz',
      text1: d?.ansatz?.text1 ?? '',
      text2: d?.ansatz?.text2 ?? '',
    },
    cta: {
      titel: d?.cta?.titel ?? '',
      text:  d?.cta?.text  ?? '',
    },
  }
}

export async function getKISaasContent(): Promise<KISaasContent> {
  const d = await client.fetch(groq`*[_type == "kiSaas"][0]`, {}, { next: { revalidate: 60 } })
  return {
    hero: {
      eyebrow:  d?.hero?.eyebrow  ?? '02 — Leistung',
      title:    d?.hero?.title    ?? 'KI-Beratung & Automatisierung',
      subtitle: d?.hero?.subtitle ?? '',
    },
    leistungenTitel: d?.leistungenTitel ?? 'Was wir für Sie tun',
    karten: withNum(d?.karten),
    tech: {
      titel: d?.tech?.titel ?? 'Technologien & Modelle',
      text1: d?.tech?.text1 ?? '',
      tags:  d?.tech?.tags  ?? [],
    },
    ansatz: {
      titel: d?.ansatz?.titel ?? 'Unser Ansatz',
      text1: d?.ansatz?.text1 ?? '',
      text2: d?.ansatz?.text2 ?? '',
    },
    cta: {
      titel: d?.cta?.titel ?? '',
      text:  d?.cta?.text  ?? '',
    },
  }
}

export async function getDataContent(): Promise<DataContent> {
  const d = await client.fetch(groq`*[_type == "data"][0]`, {}, { next: { revalidate: 60 } })
  return {
    hero: {
      eyebrow:  d?.hero?.eyebrow  ?? '04 — Leistung',
      title:    d?.hero?.title    ?? 'Data & Integration',
      subtitle: d?.hero?.subtitle ?? '',
    },
    leistungenTitel: d?.leistungenTitel ?? 'Was wir für Sie bauen',
    karten: withNum(d?.karten),
    opensource: {
      titel: d?.opensource?.titel ?? 'Open Source — mit Lizenz',
      text1: d?.opensource?.text1 ?? '',
      text2: d?.opensource?.text2 ?? '',
      tags:  d?.opensource?.tags  ?? [],
    },
    praxis: {
      titel: d?.praxis?.titel ?? 'Aus der Praxis',
      text1: d?.praxis?.text1 ?? '',
      text2: d?.praxis?.text2 ?? '',
    },
    cta: {
      titel: d?.cta?.titel ?? '',
      text:  d?.cta?.text  ?? '',
    },
  }
}

export async function getWebentwicklungContent(): Promise<WebentwicklungContent> {
  const d = await client.fetch(groq`*[_type == "webentwicklung"][0]`, {}, { next: { revalidate: 60 } })
  return {
    hero: {
      eyebrow:  d?.hero?.eyebrow  ?? '03 — Leistung',
      title:    d?.hero?.title    ?? 'Web & Digitale Produkte',
      subtitle: d?.hero?.subtitle ?? '',
    },
    leistungenTitel: d?.leistungenTitel ?? 'Was wir für Sie entwickeln',
    karten: withNum(d?.karten),
    stack: {
      titel: d?.stack?.titel ?? 'Unser Web-Stack',
      text1: d?.stack?.text1 ?? '',
      tags:  d?.stack?.tags  ?? [],
    },
    skaliert: {
      titel: d?.skaliert?.titel ?? 'Entwicklung die skaliert',
      text1: d?.skaliert?.text1 ?? '',
      text2: d?.skaliert?.text2 ?? '',
    },
    cta: {
      titel: d?.cta?.titel ?? '',
      text:  d?.cta?.text  ?? '',
    },
  }
}

export async function getKundenContent(): Promise<KundeData[]> {
  const kunden = await client.fetch(
    groq`*[_type == "kunde"] | order(reihenfolge asc) { name, "logo": logo.asset->url }`,
    {},
    { next: { revalidate: 60 } },
  )
  return kunden ?? []
}
