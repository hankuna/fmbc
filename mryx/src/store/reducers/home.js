import { CHANGE_A_SUCESS, CHANGE_B, CHANGE_A_REQUEST } from '../constants/homeType'

const initalState = {
    content: null,
    mryxList: null,
    detail: null
}
export default (state = initalState,action) => {
    switch (action.type) {
        case CHANGE_A_REQUEST:
            return Object.assign(
                {}, state,
                { content: [], mryxList: state.mryxList })
        case CHANGE_A_SUCESS:
            return Object.assign(
                {}, state, 
                { content: action.content,mryxList: action.mryxList })
        case CHANGE_B:
            return Object.assign(
                {}, state, 
                { content: action.content })
        case 'GET_DETAIL_SUCESS':
            return Object.assign(
                {}, state,
                { 
                    content: state.content, 
                    mryxList: state.mryxList,
                    detail: action.detail 
                })
        default:
            return state
    }
}