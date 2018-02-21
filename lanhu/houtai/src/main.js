import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import tools from './utils/tools'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import echarts from "echarts"

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts 
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(tools)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  render: h => h(App)
})
