// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'Katha — Undangan Digital Elegan',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Katha adalah layanan undangan digital elegan, personal, dan mudah dibagikan. Pilih template, kirim data, dan undangan siap disebar — untuk pernikahan, lamaran, dan momen spesial lainnya.',
        },
        { name: 'theme-color', content: '#ffffff' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Katha' },
        { property: 'og:title', content: 'Katha — Undangan Digital Elegan' },
        {
          property: 'og:description',
          content:
            'Rayakan momen spesial dengan undangan digital yang elegan, personal, dan mudah dibagikan.',
        },
        { property: 'og:image', content: '/og-cover.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Katha — Undangan Digital Elegan' },
        {
          name: 'twitter:description',
          content:
            'Rayakan momen spesial dengan undangan digital yang elegan, personal, dan mudah dibagikan.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://katha-undangan.vercel.app/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@nuxt/eslint'],

  typescript: {
    strict: true,
  },

  nitro: {
    prerender: {
      routes: ['/', '/templates/aurelia'],
    },
  },
})
