import { defineField, defineType } from 'sanity'

export const startseite = defineType({
  name: 'startseite',
  title: 'Startseite',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    // ─── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      type: 'object',
      title: 'Hero',
      fields: [
        defineField({ name: 'subLabel',  type: 'string', title: 'Sub-Label (über H1)' }),
        defineField({ name: 'h1Zeile1', type: 'string', title: 'H1 — Zeile 1' }),
        defineField({ name: 'h1Hervor1', type: 'string', title: 'H1 — Hervorgehobener Begriff 1 (z.B. "in time")' }),
        defineField({ name: 'h1Hervor2', type: 'string', title: 'H1 — Hervorgehobener Begriff 2 (z.B. "in budget")' }),
        defineField({ name: 'h1Zeile4', type: 'string', title: 'H1 — Zeile 4 (Abschluss)' }),
        defineField({ name: 'text',      type: 'text',   title: 'Einleitungstext' }),
        defineField({ name: 'ctaPrimary',   type: 'string', title: 'CTA Button (primär)' }),
        defineField({ name: 'ctaSekundaer', type: 'string', title: 'CTA Link (sekundär)' }),
      ],
    }),

    // ─── Stats ─────────────────────────────────────────────────────────────
    defineField({
      name: 'stats',
      type: 'array',
      title: 'Statistiken (Hero)',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'num',   type: 'string', title: 'Zahl / Wert' }),
          defineField({ name: 'label', type: 'text',   title: 'Beschriftung' }),
        ],
      }],
    }),

    // ─── Leistungen ────────────────────────────────────────────────────────
    defineField({
      name: 'leistungen',
      type: 'object',
      title: 'Leistungen-Abschnitt',
      fields: [
        defineField({ name: 'h2', type: 'string', title: 'Überschrift' }),
        defineField({
          name: 'karten',
          type: 'array',
          title: 'Karten',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'num',   type: 'string', title: 'Nummer' }),
              defineField({ name: 'title', type: 'string', title: 'Titel' }),
              defineField({ name: 'href',  type: 'string', title: 'Link (z.B. /webentwicklung)' }),
              defineField({ name: 'text',  type: 'text',   title: 'Beschreibung' }),
            ],
          }],
        }),
      ],
    }),

    // ─── Kunden ────────────────────────────────────────────────────────────
    defineField({
      name: 'kunden',
      type: 'object',
      title: 'Kunden-Abschnitt',
      fields: [
        defineField({ name: 'eyebrow', type: 'string', title: 'Eyebrow' }),
        defineField({ name: 'h2',      type: 'string', title: 'Überschrift' }),
      ],
    }),

    // ─── Ansatz ────────────────────────────────────────────────────────────
    defineField({
      name: 'ansatz',
      type: 'object',
      title: 'Ansatz-Abschnitt',
      fields: [
        defineField({ name: 'h2', type: 'string', title: 'Überschrift' }),
        defineField({
          name: 'schritte',
          type: 'array',
          title: 'Schritte',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'num',   type: 'string', title: 'Nummer' }),
              defineField({ name: 'title', type: 'string', title: 'Titel' }),
              defineField({ name: 'text',  type: 'text',   title: 'Text' }),
            ],
          }],
        }),
        defineField({
          name: 'zitat',
          type: 'object',
          title: 'Zitat-Box',
          fields: [
            defineField({ name: 'text', type: 'string', title: 'Zitat' }),
            defineField({ name: 'sub',  type: 'text',   title: 'Unter-Text' }),
            defineField({
              name: 'tags',
              type: 'array',
              title: 'Tags',
              of: [{ type: 'string' }],
            }),
          ],
        }),
      ],
    }),

    // ─── KI Banner ─────────────────────────────────────────────────────────
    defineField({
      name: 'kiBanner',
      type: 'object',
      title: 'KI-Banner',
      fields: [
        defineField({ name: 'titel', type: 'string', title: 'Titel' }),
        defineField({ name: 'text',  type: 'text',   title: 'Text' }),
        defineField({ name: 'cta',   type: 'string', title: 'CTA Button' }),
      ],
    }),

    // ─── Kontakt ───────────────────────────────────────────────────────────
    defineField({
      name: 'kontakt',
      type: 'object',
      title: 'Kontakt-Abschnitt',
      fields: [
        defineField({ name: 'h2',      type: 'string', title: 'Überschrift' }),
        defineField({ name: 'intro',   type: 'text',   title: 'Einleitungstext' }),
        defineField({ name: 'adresse', type: 'string', title: 'Adresse' }),
      ],
    }),
  ],
})
