// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  pages: true,
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts'],
  eslint: {
    config: {
      standalone: false,
    },
  },
  css: [
    '~/assets/style/reset.sass',
    '~/assets/style/default-style.sass',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "~/assets/_variables.sass" as *\n' NOTE: not working
        },
      },
    },
  },
  fonts: {
    provider: 'google',
  },
})
