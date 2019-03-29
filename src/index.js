// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from '../store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from '@/plugins/i18n'
import Vuelidate from 'vuelidate'
// import vuexI18n from 'vuex-i18n'
// import translator from '@plugins/translator'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
// Vue.use(vuexI18n.plugin, store)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
