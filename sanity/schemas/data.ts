import { defineField, defineType } from 'sanity'

export const data = defineType({
  name: 'data',
  title: 'Data & Integration',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      type: 'object',
      title: 'Hero',
      fields: [
        defineField({ name: 'eyebrow',  type: 'string', title: 'Eyebrow' }),
        defineField({ name: 'title',    type: 'string', title: 'Titel' }),
        defineField({ name: 'subtitle', type: 'text',   title: 'Untertitel' }),
      ],
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
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'titel', type: 'string', title: 'Kartentitel' }),
            defineField({ name: 'text',  type: 'text',   title: 'Kartentext' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'opensource',
      type: 'object',
      title: 'Open Source',
      fields: [
        defineField({ name: 'titel', type: 'string', title: 'Titel' }),
        defineField({ name: 'text1', type: 'text',   title: 'Absatz 1' }),
        defineField({ name: 'text2', type: 'text',   title: 'Absatz 2' }),
        defineField({
          name: 'tags',
          type: 'array',
          title: 'Technologie-Tags',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    defineField({
      name: 'praxis',
      type: 'object',
      title: 'Aus der Praxis',
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
