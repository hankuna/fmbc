import { CHANGE_A } from '../constants/newsTypes'

export default (state = { a: 0}, action) => {
    switch (action.type){
        case CHANGE_A:
            return {a:action.a}
            break;
        default:
            return state
    }
}