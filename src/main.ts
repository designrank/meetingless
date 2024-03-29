import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

import VueClipboards from 'vue-clipboards';
Vue.use(VueClipboards)

import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)

Vue.config.productionTip = false

import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
