export default {
  state: {
    isLogin: false,
    userInfo: {}
  },
  getters: {},
  mutations: {
    changeUserInfo(state, userData) {
      state.userInfo = userData
    },
    changeLogin(state, login) {
      state.isLogin = login
    }
  },
  actions: {}
}