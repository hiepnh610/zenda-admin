import dotenv from 'dotenv'

const config = {
  dev: { path: '.env.development' },
  production: { path: '.env.production' }
}
const devEnv = dotenv.config(config.dev).parsed
const prodEnv = dotenv.config(config.production).parsed

export default {
  mode: 'spa',

  head: {
    title: 'Zenda Admin Management',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Zenda Admin Management'
      }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css', rel: 'stylesheet', integrity: 'sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu', crossorigin: 'anonymous' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    '@/assets/css/style.css',
    '@/assets/font-awesome/css/font-awesome.min.css',
    '@/assets/scss/style.scss'
  ],

  plugins: [
    '~/plugins/axios',
    '~/plugins/vue-moment.js',
    '~/plugins/vue-toasted.js'
  ],

  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv',
    '@nuxtjs/recaptcha'
  ],

  axios: {
    baseURL:
      process.env.NODE_ENV !== 'production' ? devEnv.BASE_URL : prodEnv.BASE_URL
  },

  recaptcha: {
    hideBadge: true,
    siteKey: devEnv.KEY_RECAPTCHA,
    version: 2,
    size: 'invisible'
  },

  build: {
    extend (config, ctx) {}
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
