const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    "@/assets/scss/common.scss"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/slugify.js"
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    ['nuxt-sass-resources-loader', [
      '@/assets/scss/helpers/_config.scss',
      '@/assets/scss/helpers/_flexbox.scss',
      '@/assets/scss/helpers/_grid.scss',
      '@/assets/scss/helpers/_respond-to.scss'
    ]]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Vue-router
  */
  router: {
    linkActiveClass: "",
    linkExactActiveClass: "is-active"
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },

  /*
  ** Generate configuration
  */

  generate: {
    /*
    ** Build output, default is ./dist
    ** This demo site is deployed to Github Pages with a custom domain name
    ** Github Pages will use ./docs for site root
    */
    dir: 'docs'
  },

  /*
  ** Page transitions
  */

  transition: {
    name: 'page',
    mode: 'out-in',
    type: 'animation'
  }
}
