// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-svgo",
    "@pinia/nuxt",
    "vuetify-nuxt-module",
  ],
  vite: {
    assetsInclude: ["**/*.svg"],
  },
  vuetify: {
    // moduleOptions: {
    //   /* other module options */
    //   styles: { configFile: '/settings.scss' }
    // },
    // vuetifyOptions: {
    //   /* vuetify options */
    // }
  },
  features: {
    inlineStyles: false,
  },
  i18n: {
    defaultLocale: "ar",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "locale",
      redirectOn: "root",
      alwaysRedirect: false,
    },
    locales: [
      {
        code: "ar",
        name: "Arabic",
        file: "ar.json",
        dir: "rtl",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
        dir: "ltr",
      },
    ],
    strategy: "prefix_except_default",
  },
});
