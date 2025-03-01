import { defineCollection, defineContentConfig } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    productions: defineCollection({
      source: 'productions/*.md',
      type: 'page',
    }),
  },
});
