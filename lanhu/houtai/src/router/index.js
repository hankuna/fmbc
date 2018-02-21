import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Content from '@/components/Home/Content'

Vue.use(Router)

const routers = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/content',
        name: 'Content',
        component: Content
      }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
const user = window.localStorage.userInfo && JSON.parse(window.localStorage.userInfo)
const isLogin = user && user.name

//路由守卫
routers.beforeEach((to,from,next) => {
  if (!window.localStorage.userInfo && to.path !== '/login'){
    next('/login')
  }else{
    next()
  }
})

export default routers
