import store from '@/store'
import { isLogin } from '@/utils'
import Axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Notfound from '../views/featrue/404.vue'
import Privilege from '../views/featrue/401.vue'
import Layout from '../views/layout/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  { path: '/notFound', name: 'notFound', component: Notfound },
  { path: '/privilege', name: 'privilege', component: Privilege }

]

const router = new VueRouter({
  routes
})

// 判断角色
function convertRole(type) {
  switch (type) {
    case 1:
      return '审批专员'
    case 2:
      return '录入专员'
    case 3:
      return '管理员'
  }
}

// 请求菜单数据
function loadAsyncRoutes() {
  return Axios.get('/menus.json')
}

// 菜单处理，动态路由
function asyncRoutesHandler(routes) {
  return routes.map(route => {
    if (route.component === 'Layout') {
      route.component = Layout;
    } else {
      // 子路由
      const filePath = route.component;
      route.component = () => import(`../views/${filePath}.vue`)
    }
    if (route.children) {
      route.children = asyncRoutesHandler(route.children)
    }
    return route;
  })
}

async function loadMenu(to, from, next) {
  // 请求菜单数据
  let res = await loadAsyncRoutes()
  // console.log('菜单数据', res)
  store.commit('user/setMenu', res.data)
  // 加载菜单
  const asyncRoutes = asyncRoutesHandler(res.data)
  asyncRoutes.forEach((route) => {
    // 动态加载路由
    router.addRoute(route)
  })
  router.addRoute({
    path: '*',
    redirect: { name: 'notFound' }
  });

  // 触发新的路由访问
  next({ ...to, replace: true })
}
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  // 验证是否白名单
  if (whiteList.includes(to.path)) return next()
  // 验证是否登录
  let decoded = isLogin()
  // console.log('解析的token', decoded)
  if (isLogin()) {
    let roleType = convertRole(decoded.type)
    // console.log('交给Vuex管理的角色：', roleType)
    // Vuex 存储用户数据
    store.commit('user/changeUserInfo', { roleType })
    store.commit('user/changeLogin', true)
    // 登录过且加载过菜单
    if (store.getters['user/userMenu'].length > 0) {
      return next()
    } else {
      // 待加载菜单
      return loadMenu(to, from, next)
    }
  } else {
    // 如果没登录过 就跳转到登录页
    let lastPath = to.fullPath
    return next({ name: 'login', query: { redirect: lastPath } })
  }

})


export default router
