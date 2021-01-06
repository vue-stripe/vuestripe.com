import webpack from 'webpack';

export default {
  mode: 'universal',
  env: {
    ENV: process.env.ENV,
    NODE_ENV: process.env.NODE_ENV,
    GA_ID: process.env.GA_ID,
    STRIPE_PK: process.env.STRIPE_PK,
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
    ],
    script: [
      { src: 'https://js.stripe.com/v3' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/prism.js', mode: 'client', ssr: false },
    { src: '~/plugins/crisp.js', mode: 'client', ssr: false },
    { src: '~/plugins/ga.js', mode: 'client', ssr: false },
    { src: '~/plugins/media-screen.js', mode: 'client', ssr: false },
    { src: '~/plugins/vue-analytics.js', mode: 'client', ssr: false },
    { src: '~/plugins/vue-media-query-mixin.js', mode: 'client', ssr: false },
    {
      src: '~/plugins/vue-stripe.js',
      ssr: false,
    },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: process.env.GA_ID,
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
  ],
  /**
   * Google Web Fonts
   */
  webfontloader: {
    google: {
      families: [
        'Sniglet:400,500,600,700,900',
        'JetBrains Mono:400,500,600,700,900',
      ],
    },
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#635BFF',
          accent: '#FFD96A',
          secondary: '#3297D3',
          info: '#45B2E8',
          warning: '#E37C4C',
          error: '#C23D4B',
          success: '#24B47E',
        },
        dark: {
          primary: '#635BFF',
          accent: '#FFD96A',
          secondary: '#3297D3',
          info: '#45B2E8',
          warning: '#E37C4C',
          error: '#C23D4B',
          success: '#24B47E',
        },
      },
    },
  },
  /*
  ** Build configuration
  */
  build: {
    extend (config, { isDev, isClient }) {
      // ..
      config.module.rules.push({
        test: /\.md$/i,
        loader: 'raw-loader',
      });
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = 'development';
      }
    },
  },
};
