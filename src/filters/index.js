import { dataMap } from '@/conf/index'
import { dateConvert } from '@/utils'
export default {
  install(Vue) {
    // 表达式的值将作为参数传入到函数中
    Vue.filter('date',(val, ...args) => {
      return dateConvert(val)
    })
    for (let key in dataMap) {
      Vue.filter(key, (val, ...args) => {
        return dataMap[key][val]
      })
    }
  }
}