module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  buildModules: [
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'vuex',
    ],
  },
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/bulma',
    'nuxt-fontawesome'
  ],
  fontawesome: {
    imports: [
      { set: '@fortawesome/free-solid-svg-icons', icons: ['fas'] }
    ]
  },
  styleResources: {
    scss: [
      '@/assets/scss/variables.scss'
    ]
  }
}

