import { defineField, defineType } from 'sanity'

export const kiSaas = defineType({
  name: 'kiSaas',
  title: 'KI & SaaS',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
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
    defineField({ name: 'leistungenTitel', type: 'string', title: 'Leistungen — Überschrift' }),
    defineField({
      name: 'karten',
      type: 'array',
      title: 'Leistungskarten',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'titel', type: 'string', title: 'Titel' }),
          defineField({ name: 'text',  type: 'text',   title: 'Text' }),
        ],
      }],
    }),
    defineField({
      name: 'abschnitt',
      type: 'object',
      title: 'Mittlerer Abschnitt',
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
})
