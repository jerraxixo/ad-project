import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import fb from '@firebase/app'
require('firebase/auth')

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: "AIzaSyA9307qSEanxinu3DcId6tThPJkMmzkXF8",
      authDomain: "ad-project-8b8cf.firebaseapp.com",
      projectId: "ad-project-8b8cf",
      storageBucket: "ad-project-8b8cf.appspot.com",
      messagingSenderId: "916149778376",
      appId: "1:916149778376:web:4f7cb7837e5b33ae84b2fd",
      measurementId: "G-L41RZ1GC2S"
    })

    fb.default.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
