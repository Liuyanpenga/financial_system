import store from '@/store'
import { isLogin } from '@/utils'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

// 判断角色
function convertRole(type){
  switch (type) {
    case 1:
      return '审批专员'
    case 2:
      return '录入专员'
    case 3:
      return '管理员'
  }
}

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  // 验证是否白名单
  if (whiteList.includes(to.path)) return next()
  // 验证是否登录
  let decoded = isLogin()
  console.log('解析的token',decoded)
  if (isLogin()) {
    let roleType = convertRole(decoded.type)
    console.log('交给Vuex管理的角色：',roleType)
    // Vuex 存储用户数据
    store.commit('user/changeUserInfo',{roleType})
    store.commit('user/changeLogin',true)
    // 登录过且加载过菜单
    if(store.getters['user/userMenu']){
      return next()
    } else{
      // 待加载菜单
      return  next()
    }
  }else{
    // 如果没登录过 就跳转到登录页
    let lastPath = to.fullPath
    return next({name:'login',query:{redirect:lastPath}})
  }

})


export default router
