// lib/notion.ts
// Liest Content aus Notion-Seiten und gibt strukturierte Objekte zurück.
// Jede Leistungsseite hat eine eigene Notion-Page-ID.

const NOTION_API_KEY = process.env.NOTION_API_KEY!

const PAGE_IDS = {
  'it-beratung':    '32a0f39a-77b1-8012-97b1-c8e017590335',
  'ki-saas':        '32a0f39a-77b1-80b1-85ca-cb7b041af438',
  'data':           '32a0f39a-77b1-800c-83a5-e32601b98315',
  'webentwicklung': '32a0f39a-77b1-803e-adbf-d3d9b8efcac5',
} as const

export type PageKey = keyof typeof PAGE_IDS

// Rohe Blocks aus Notion holen
async function getBlocks(pageId: string): Promise<Record<string, string>> {
  const res = await fetch(
    `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`,
    {
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
      },
      // Next.js: 60 Sekunden Cache, dann revalidieren
      next: { revalidate: 60 },
    }
  )

  if (!res.ok) {
    throw new Error(`Notion API error: ${res.status}`)
  }

  const data = await res.json()

  // KEY: VALUE Format parsen
  const result: Record<string, string> = {}
  for (const block of data.results) {
    if (block.type !== 'paragraph') continue
    const text: string = block.paragraph.rich_text
      .map((t: { plain_text: string }) => t.plain_text)
      .join('')
    const colonIdx = text.indexOf(':')
    if (colonIdx === -1) continue
    const key = text.slice(0, colonIdx).trim()
    const value = text.slice(colonIdx + 1).trim()
    result[key] = value
  }

  return result
}

// Karten aus den Blocks extrahieren (dynamisch — beliebig viele)
function extractKarten(blocks: Record<string, string>) {
  const karten: { num: string; titel: string; text: string }[] = []
  let i = 1
  while (blocks[`KARTE_${i}_TITEL`]) {
    karten.push({
      num: String(i).padStart(2, '0'),
      titel: blocks[`KARTE_${i}_TITEL`],
      text:  blocks[`KARTE_${i}_TEXT`] ?? '',
    })
    i++
  }
  return karten
}

// Tags aus einem Block-String in ein Array umwandeln
function parseTags(tagString?: string): string[] {
  if (!tagString) return []
  return tagString.split('·').map(t => t.trim()).filter(Boolean)
}

// ─── Typen ───────────────────────────────────────────────────────────────────

export interface KarteData {
  num: string
  titel: string
  text: string
}

export interface ITBeratungContent {
  slug: string
  hero: { eyebrow: string; title: string; subtitle: string }
  leistungenTitel: string
  karten: KarteData[]
  systeme: { titel: string; text: string; tags: string[] }
  ansatz: { titel: string; text1: string; text2: string }
  cta: { titel: string; text: string }
}

export interface KIBeratungContent {
  slug: string
  hero: { eyebrow: string; title: string; subtitle: string }
  leistungenTitel: string
  karten: KarteData[]
  tech: { titel: string; text1: string; tags: string[] }
  ansatz: { titel: string; text1: string; text2: string }
  cta: { titel: string; text: string }
}

export interface DataContent {
  slug: string
  hero: { eyebrow: string; title: string; subtitle: string }
  leistungenTitel: string
  karten: KarteData[]
  opensource: { titel: string; text1: string; text2: string; tags: string[] }
  praxis: { titel: string; text1: string; text2: string }
  cta: { titel: string; text: string }
}

export interface WebentwicklungContent {
  slug: string
  hero: { eyebrow: string; title: string; subtitle: string }
  leistungenTitel: string
  karten: KarteData[]
  stack: { titel: string; text1: string; tags: string[] }
  skaliert: { titel: string; text1: string; text2: string }
  cta: { titel: string; text: string }
}

// ─── Fetch-Funktionen ─────────────────────────────────────────────────────────

export async function getITBeratungContent(): Promise<ITBeratungContent> {
  const b = await getBlocks(PAGE_IDS['it-beratung'])
  return {
    slug: b['SLUG'] ?? '/it-beratung',
    hero: {
      eyebrow:  b['HERO_EYEBROW']  ?? '01 — Leistung',
      title:    b['HERO_TITLE']    ?? 'IT-Beratung & Integration',
      subtitle: b['HERO_SUBTITLE'] ?? '',
    },
    leistungenTitel: b['LEISTUNGEN_TITEL'] ?? 'Was wir für Sie tun',
    karten: extractKarten(b),
    systeme: {
      titel: b['SYSTEME_TITEL'] ?? 'Systeme die wir integrieren',
      text:  b['SYSTEME_TEXT']  ?? '',
      tags:  parseTags(b['SYSTEME_TAGS']),
    },
    ansatz: {
      titel: b['ANSATZ_TITEL']  ?? 'Unser Ansatz',
      text1: b['ANSATZ_TEXT_1'] ?? '',
      text2: b['ANSATZ_TEXT_2'] ?? '',
    },
    cta: {
      titel: b['CTA_TITEL'] ?? '',
      text:  b['CTA_TEXT']  ?? '',
    },
  }
}

export async function getKISaasContent(): Promise<KISaasContent> {
  const b = await getBlocks(PAGE_IDS['ki-saas'])
  return {
    slug: b['SLUG'] ?? '/ki-beratung',
    hero: {
      eyebrow:  b['HERO_EYEBROW']  ?? '02 — Leistung',
      title:    b['HERO_TITLE']    ?? 'KI-Beratung & Automatisierung',
      subtitle: b['HERO_SUBTITLE'] ?? '',
    },
    leistungenTitel: b['LEISTUNGEN_TITEL'] ?? 'Was wir für Sie tun',
    karten: extractKarten(b),
    tech: {
      titel: b['TECH_TITEL']  ?? 'Technologien & Modelle',
      text1: b['TECH_TEXT_1'] ?? '',
      tags:  parseTags(b['TECH_TAGS']),
    },
    ansatz: {
      titel: b['ANSATZ_TITEL']  ?? 'Unser Ansatz',
      text1: b['ANSATZ_TEXT_1'] ?? '',
      text2: b['ANSATZ_TEXT_2'] ?? '',
    },
    cta: {
      titel: b['CTA_TITEL'] ?? '',
      text:  b['CTA_TEXT']  ?? '',
    },
  }
}

export async function getDataContent(): Promise<DataContent> {
  const b = await getBlocks(PAGE_IDS['data'])
  return {
    slug: b['SLUG'] ?? '/data',
    hero: {
      eyebrow:  b['HERO_EYEBROW']  ?? '04 — Leistung',
      title:    b['HERO_TITLE']    ?? 'Data & Integration',
      subtitle: b['HERO_SUBTITLE'] ?? '',
    },
    leistungenTitel: b['LEISTUNGEN_TITEL'] ?? 'Was wir für Sie bauen',
    karten: extractKarten(b),
    opensource: {
      titel: b['OPENSOURCE_TITEL']  ?? 'Open Source — mit Lizenz',
      text1: b['OPENSOURCE_TEXT_1'] ?? '',
      text2: b['OPENSOURCE_TEXT_2'] ?? '',
      tags:  parseTags(b['OPENSOURCE_TAGS']),
    },
    praxis: {
      titel: b['PRAXIS_TITEL']  ?? 'Aus der Praxis',
      text1: b['PRAXIS_TEXT_1'] ?? '',
      text2: b['PRAXIS_TEXT_2'] ?? '',
    },
    cta: {
      titel: b['CTA_TITEL'] ?? '',
      text:  b['CTA_TEXT']  ?? '',
    },
  }
}

export async function getWebentwicklungContent(): Promise<WebentwicklungContent> {
  const b = await getBlocks(PAGE_IDS['webentwicklung'])
  return {
    slug: b['SLUG'] ?? '/web',
    hero: {
      eyebrow:  b['HERO_EYEBROW']  ?? '03 — Leistung',
      title:    b['HERO_TITLE']    ?? 'Web & Digitale Produkte',
      subtitle: b['HERO_SUBTITLE'] ?? '',
    },
    leistungenTitel: b['LEISTUNGEN_TITEL'] ?? 'Was wir für Sie entwickeln',
    karten: extractKarten(b),
    stack: {
      titel: b['STACK_TITEL']  ?? 'Unser Web-Stack',
      text1: b['STACK_TEXT_1'] ?? '',
      tags:  parseTags(b['STACK_TAGS']),
    },
    skaliert: {
      titel: b['SKALIERT_TITEL']  ?? 'Entwicklung die skaliert',
      text1: b['SKALIERT_TEXT_1'] ?? '',
      text2: b['SKALIERT_TEXT_2'] ?? '',
    },
    cta: {
      titel: b['CTA_TITEL'] ?? '',
      text:  b['CTA_TEXT']  ?? '',
    },
  }
}
