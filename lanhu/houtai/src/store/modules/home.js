const home = {
    state: {
        homeName: 'home',
        a: 0,
        count: 9
    },
    actions: {
        aa (store,arg) {
            console.log(store,'22222')
            store.commit('aam',arg)
        }
    },
    mutations: {
        aam (state,arg) {
            state.a = arg
        }
    },
    getters: {
        getTotal(state,getters,rootState){
            return state.count
        }
    }
}

export default home