import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'intersignum-de',
  title: 'intersignum.de',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'firxgj0t',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
