import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './element'
import './assets/css/cssreset.css'
import './assets/css/global.css'


import {dragTable} from '@/directives/index'
import tableFilter from '@/filters/index'
import '@/plugins'

Vue.use(dragTable)
Vue.use(tableFilter)

console.log(process.env.VUE_APP_URL,'测试VUE_APP_变量')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
