import { defineNuxtModule } from 'nuxt'

export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      titleTemplate: '%s - Pickbazar',
      title: 'Pickbazar' || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1 maximum-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#ef404a' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&display=swap' }
      ]
    },
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],
  modules: [
    '@nuxtjs/i18n',
    'nuxt-swiper',
    'dayjs-nuxt',
    '@pinia/nuxt',
    'nuxt-lodash'
  ],
  lodash: {
    prefix: "_",
    prefixSkip: ["string"],
    upperAfterPrefix: false,
    exclude: ["map"],
    alias: [
      ["camelCase", "stringToCamelCase"], // => stringToCamelCase
      ["kebabCase", "stringToKebab"], // => stringToKebab
      ["isDate", "isLodashDate"], // => _isLodashDate
    ],
  },
  swiper: {
  },
  dayjs: {
    defaultLocale: 'en',
    locales: ['en']
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts'
  },
  pinia: {
    autoImports: [
      'defineStore'
    ]
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    resolve: {
      alias: {
        '@data': '/data',
        '@components': '/components',
        '@settings': '/settings',
        '@utils': '/utils'
      }
    }
  },
  serverMiddleware: [
    "~/serverMiddleware/imageResize.js"
  ],
})
