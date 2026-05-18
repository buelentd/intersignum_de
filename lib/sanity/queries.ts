import { groq } from 'next-sanity'
import { client } from './client'

// ─── Types ────────────────────────────────────────────────────────────────────

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

export async function getKundenContent(): Promise<KundeData[]> {
  const rows = await client.fetch(
    groq`*[_type == "kunde"] | order(reihenfolge asc) { name, "logo": logoUrl }`,
    {},
    opts,
  )
  return rows ?? []
}
