import EMenu from '@/components/EMenu.vue'
import EBread from '@/components/EBread.vue'
import EDropdown from '@/components/EDropdown.vue'
import ECharts from '@/components/ECharts.vue';
import EForm from '@/components/EForm.vue';
import ETable from '@/components/ETable.vue';
import EColumn from '@/components/EColumn.vue';
import ESearch from '@/components/ESearch.vue';
export default {
  install(Vue) {
    Vue.component(EMenu.name, EMenu)
    Vue.component(EBread.name, EBread)
    Vue.component(EDropdown.name, EDropdown)
    Vue.component(ECharts.name, ECharts)
    Vue.component(EForm.name, EForm)
    Vue.component(ETable.name, ETable)
    Vue.component(EColumn.name, EColumn)
    Vue.component(ESearch.name, ESearch)
  }

}