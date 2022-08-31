export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pc Pas a Pas',
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js',
        body: true,
      },
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2401412736769800',
        crossorigin: 'anonymous',
      },
    ],
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui',
      },
      { name: 'HandheldFriendly', content: 'true' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: "https://back2023.herokuapp.com/produits",
    proxy: true,
  },

  proxy: {
    // Simple proxy
    '/produits/': {
      target: 'https://back2023.herokuapp.com/produits',
      changeOrigin: true,
      pathRewrite: { '^/produits/': '' },
    },
    '/tutos/': {
      target: 'https://back2023.herokuapp.com/tutos',
      changeOrigin: true,
      pathRewrite: { '^/tutos/': '' },
    },
    '/outils/': {
      target: 'https://back2023.herokuapp.com/outils',
      changeOrigin: true,
      pathRewrite: { '^/outils/': '' },
    },
    '/token/': {
      target: 'https://back2023.herokuapp.com/token',
      changeOrigin: true,
      pathRewrite: { '^/token/': '' },
    },
    '/accounts/': {
      target: 'https://back2023.herokuapp.com/accounts',
      changeOrigin: true,
      pathRewrite: { '^/accounts/': '' },
    },
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'token/login/',
            method: 'post',
            propertyName: 'auth_token',
          },
          logout: { url: 'token/logout/', method: 'post' },
          user: {
            url: 'accounts/data/',
            method: 'get',
            propertyName: false,
          },
        },
        tokenType: 'Token',
        tokenName: 'Authorization',
      },
      redirect: {
        login: '/login',
        home: '/',
      },
    },
  },

  googleAnalytics: {
    id: 'UA-237994907-1',
  },
}
