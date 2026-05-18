import { defineField, defineType } from 'sanity'

const hero = [
  defineField({ name: 'eyebrow',  type: 'string', title: 'Eyebrow' }),
  defineField({ name: 'title',    type: 'string', title: 'Titel' }),
  defineField({ name: 'subtitle', type: 'text',   title: 'Untertitel' }),
]

const karte = defineType({
  name: 'itBeratungKarte',
  type: 'object',
  fields: [
    defineField({ name: 'titel', type: 'string', title: 'Kartentitel' }),
    defineField({ name: 'text',  type: 'text',   title: 'Kartentext' }),
  ],
})

export const itBeratung = defineType({
  name: 'itBeratung',
  title: 'IT-Beratung & Integration',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      type: 'object',
      title: 'Hero',
      fields: hero,
    }),
    defineField({
      name: 'leistungenTitel',
      type: 'string',
      title: 'Leistungen — Überschrift',
    }),
    defineField({
      name: 'karten',
      type: 'array',
      title: 'Leistungskarten',
      of: [{ type: 'itBeratungKarte' }],
    }),
    defineField({
      name: 'systeme',
      type: 'object',
      title: 'Systeme & Integrationen',
      fields: [
        defineField({ name: 'titel', type: 'string', title: 'Titel' }),
        defineField({ name: 'text',  type: 'text',   title: 'Text' }),
        defineField({
          name: 'tags',
          type: 'array',
          title: 'Tags',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    defineField({
      name: 'ansatz',
      type: 'object',
      title: 'Unser Ansatz',
      fields: [
        defineField({ name: 'titel', type: 'string', title: 'Titel' }),
        defineField({ name: 'text1', type: 'text',   title: 'Absatz 1' }),
        defineField({ name: 'text2', type: 'text',   title: 'Absatz 2' }),
      ],
    }),
    defineField({
      name: 'cta',
      type: 'object',
      title: 'Call to Action',
      fields: [
        defineField({ name: 'titel', type: 'string', title: 'Titel' }),
        defineField({ name: 'text',  type: 'text',   title: 'Text' }),
      ],
    }),
  ],
  __experimental_actions: ['update', 'publish'],
})

export const itBeratungKarte = karte
