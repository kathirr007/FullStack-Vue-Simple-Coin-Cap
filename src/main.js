import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'semantic-ui-css/semantic.css'
import Cryptoicon from 'vue-cryptoicon'
import icon from 'vue-cryptoicon/src/icons'
Cryptoicon.add(icon)
Vue.use(Cryptoicon)

import VueSelect from 'vue-select'
Vue.component('v-select', VueSelect)
import 'vue-select/dist/vue-select.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
