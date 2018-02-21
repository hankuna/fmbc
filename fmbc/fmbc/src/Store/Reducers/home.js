import { 
    GET_NAV,
    GET_GAME_LIST,
    GET_SPORT_TYPE,
    GET_ORIGIN_NAV,
    GET_FILTER_LIST,
    GET_SLIDE_ID,
    GET_DETAIL_LIST
} from '../constant/Naiconstant'

const initalState = {
    Nav: null,
    gameList: null,
    SportType: "00",
    originNav: null,
    filterList: null,
    slideIndex: 0,
    detailList: null

}
export default (state = initalState, action) => {
    switch (action.type) {

        case GET_NAV:
            return Object.assign({}, state, { Nav: action.Nav})
        case GET_GAME_LIST:
            return Object.assign({}, state, { gameList: action.gameList})
        case GET_SPORT_TYPE:
            return Object.assign({}, state, { SportType: action.SportType})
        case GET_ORIGIN_NAV:
            return Object.assign({}, state, { originNav: action.originNav })
        case GET_FILTER_LIST:
            return Object.assign({}, state, { filterList: action.filterList })
        case GET_SLIDE_ID:
            return Object.assign({}, state, { slideIndex: action.slideIndex })
        case GET_DETAIL_LIST:
            return Object.assign({}, state, { detailList: action.detailList})
        break
        default:
            return state
    }
    return state
}