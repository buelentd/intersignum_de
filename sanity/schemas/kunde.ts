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
      name: 'logo',
      type: 'image',
      title: 'Logo',
      options: { hotspot: true },
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
