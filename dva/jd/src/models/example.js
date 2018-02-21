//import { routerRedux } from 'dva/router'
export default {

  namespace: 'example',

  state: {
    x: 0
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ x }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save',x});
      //yield put({ type: 'save111',x : 9 })
    },
    *fetch({ x }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save1', x });
      //yield put({ type: 'save111',x : 9 })
    },
  },

  reducers: {
    save(state, action) {
      console.log(action,'===action')
      return { ...state, x: state.x+1 };
    },
    save1(state, action) {
      return { ...state, x: state.x -1 };
    },
    
    /* save111(state, action) {
      return { ...state, x: action.x };
    }, */
  },

};
