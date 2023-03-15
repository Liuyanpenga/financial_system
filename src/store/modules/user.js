export default {
  state: {
    isLogin: false,
    userInfo: {},
    menu: []
  },
  getters: {
    userMenu(state) {
      return state.menu
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
  actions: {}
}