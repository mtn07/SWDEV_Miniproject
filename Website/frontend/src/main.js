import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bulma/css/bulma.css'
import axios from "axios";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { Table, Input } from 'buefy'

Vue.use(Buefy)
Vue.use(Table)
Vue.use(Input)

axios.defaults.withCredentials = true
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
