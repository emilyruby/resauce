import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import VueAuthenticate from 'vue-authenticate'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

Vue.use(VModal, { dialog: true })
Vue.use(VueFire)
Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:8080', // Your API domain

  providers: {
    twitter: {
      clientId: '',
      redirectUri: 'http://localhost:8080/auth/callback' // Your client app URL
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  methods: {
    authenticate: function (provider) {
      this.$auth.authenticate(provider).then(function () {
      })
    }
  }
})
