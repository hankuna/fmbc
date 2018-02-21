import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import home from './modules/home'
import mine from './modules/mine'
import shopCart from './modules/shopCart'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
        home,
        mine,
        shopCart
    },
    plugins: [createLogger()]
})

export default store