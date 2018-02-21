import axios from 'axios'
import routers from '../router'

const actions = {
    getUserInfo ({commit}) {
        axios.get('http://localhost:3000/users')
        .then (()=> {
            const res = {
                name: '可爱脸',
                age: '21',
                money: '9999999999'
            }
            window.localStorage.userInfo = JSON.stringify(res)
            console.log(routers,'===')
            routers.push('/')
           commit('getUserInfoMutain',res) 
        })
        
    },
    actionName(store, arg) {
        console.log(store,'===')
        store.commit('mutationName', arg)
    },
    jianAction({ commit }, arg) {
        commit('jianMutation', arg)
    },
    jiaAction({ commit }, arg) {
        commit('jiaMutation', arg)
    }
}

export default actions