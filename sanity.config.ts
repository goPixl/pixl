/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk';

// import desk structure
// import {Structure} from './sanity/deskStructure'
// see https://www.sanity.io/docs/api-versioning for how versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
// import { schema } from './sanity/schema'
import {schemaTypes} from './sanity/schemas'


export default defineConfig({
  name: 'default',
  title: 'pixl',
  basePath: '/studio',
  projectId,
  dataset: 'production',
  //edit schemas in './sanity/schema'
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
