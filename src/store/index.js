import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
let modulesFn = require.context('./modules', true, /\.js$/)
const reg = /\.\/(.*?)\.js$/;
modulesFn.keys().forEach((path) => {
  let moduleObj = modulesFn(path).default
  moduleObj.namespaced = true;
  const regRes = reg.exec(path);
  const moduleName = regRes && regRes[1]
  moduleName && store.registerModule(moduleName, moduleObj)
})
export default store
