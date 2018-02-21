//import { routerRedux } from 'dva/router'
import { getNav } from '../services/home'
export default {

    namespace: 'home',

    state: {
        nav: null
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *fetch({ x }, { call, put }) {  // eslint-disable-line
            const nav = yield call(getNav)
           // console.log(nav,'navnav')
            yield put({type:'saveNav',nav})
           // console.log(nav,"3333")
        }
    },

    reducers: {
        saveNav(state, action) {
            return { ...state, nav: action.nav };
        }

    },

};
