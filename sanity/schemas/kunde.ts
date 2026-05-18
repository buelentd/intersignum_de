import { defineField, defineType } from 'sanity'

export const kunde = defineType({
  name: 'kunde',
  title: 'Kunde / Referenz',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Unternehmensname',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logoUrl',
      type: 'url',
      title: 'Logo-URL (Vercel Media)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reihenfolge',
      type: 'number',
      title: 'Reihenfolge',
    }),
  ],
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'reihenfolgeAsc',
      by: [{ field: 'reihenfolge', direction: 'asc' }],
    },
  ],
})
