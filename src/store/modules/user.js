import { logout } from "@/api/user";

export default {
  state: {
    isLogin: false,
    userInfo: {},
    menu: []
  },
  getters: {
    userMenu(state) {
      return state.menu
    },
    userInfo(state){
      return state.userInfo
    }
  },
  mutations: {
    changeUserInfo(state, userData) {
      state.userInfo = userData
    },
    changeLogin(state, login) {
      state.isLogin = login
    },
    setMenu(state, menu) {
      state.menu = menu
    }
  },
  actions: {
    async doLogout({commit}){
      await logout()
      window.sessionStorage.removeItem('token')
      // 选择性清空数据
      commit('changeUserInfo',null)
      commit('changeLogin',false)
      commit('setMenu',[])
      // 退出清空 tags
      commit('tags/cleanTags',{},{root:true})
      // 跳转
    }
  }
}