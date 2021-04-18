const path = require('path');

export default {
  mode: 'universal',
  env: {
    ADSENSE_CA_PUB: process.env.ADSENSE_CA_PUB,
    API_URL: process.env.API_URL,
    CA_PLACEMENT: process.env.CA_PLACEMENT,
    CA_SERVE: process.env.CA_SERVE,
    ENV: process.env.ENV,
    GA_ID: process.env.GA_ID,
    NODE_ENV: process.env.NODE_ENV,
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
    // script: [
    //   { src: 'https://js.stripe.com/v3' },
    // ],
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
    { src: '~/plugins/vue-stripe.js', ssr: false },
    { src: '~/plugins/carbon-ads.js', ssr: false },
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
    '@nuxtjs/axios',
    // ['@nuxtjs/google-adsense']
  ],
  // Google Adsense
  // 'google-adsense': {
  //   id: process.env.ADSENSE_CA_PUB,
  // },
  /**
   * Google Web Fonts
   */
  webfontloader: {
    google: {
      families: [
        'Open Sans:400,500,600,700,900',
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
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        use: 'eslint-loader',
        include: path.resolve(__dirname), // <-- This tell to eslint to look only in your project folder
        exclude: /node_modules/
      });
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = 'development';
      }
    },
  },
};
