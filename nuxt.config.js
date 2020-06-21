import dotenv from 'dotenv'

const config = {
  dev: { path: '.env.development' },
  production: { path: '.env.production' }
}
const devEnv = dotenv.config(config.dev).parsed
const prodEnv = dotenv.config(config.production).parsed

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Zenda Bot Admin Management',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Zenda Bot Admin Management' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css', rel: 'stylesheet', integrity: 'sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu', crossorigin: 'anonymous' }
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
    '@/assets/css/style.css',
    '@/assets/font-awesome/css/font-awesome.min.css',
    '@/assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL:
      process.env.NODE_ENV !== 'production' ? devEnv.BASE_URL : prodEnv.BASE_URL
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  router: {
    middleware: ['auth']
  },

  server: {
    port: 8080
  },

  auth: {
    cookie: false,
    redirect: {
      login: '/',
      logout: '/',
      home: '/dashboard'
    },

    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/login', method: 'post', propertyName: 'token' },
          user: { url: '/api/admin', method: 'get', propertyName: false }
        },
        tokenType: false
      }
    }
  }
}
