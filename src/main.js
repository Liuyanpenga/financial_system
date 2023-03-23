import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import Axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/cssreset.css'
import './assets/css/global.css'
import EMenu from '@/components/EMenu.vue'
import EBread from '@/components/EBread.vue'
import EDropdown from '@/components/EDropdown.vue'
import ECharts from './components/ECharts.vue';
import EForm from './components/EForm.vue';
import ETable from './components/ETable.vue';
import EColumn from './components/EColumn.vue';
import ESearch from './components/ESearch.vue';
import {dragTable} from '@/directives/index'
import tableFilter from '@/filters/index'
Vue.use(dragTable)
Vue.use(tableFilter)


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$ajax = Axios


Vue.component(EMenu.name, EMenu)
Vue.component(EBread.name, EBread)
Vue.component(EDropdown.name, EDropdown)
Vue.component(ECharts.name, ECharts)
Vue.component(EForm.name, EForm)
Vue.component(ETable.name, ETable)
Vue.component(EColumn.name, EColumn)
Vue.component(ESearch.name, ESearch)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
