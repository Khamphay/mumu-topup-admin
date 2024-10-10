// https://nuxt.com/docs/api/configuration/nuxt-config
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  $env: {
    public: {

    }
  },
  modules: [
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'vuetify-nuxt-module'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vuetify: {
    vuetifyOptions: {
      // components: components,
      // directives: directives,
      theme: {
        defaultTheme: 'light'
      }
    }
  }
});