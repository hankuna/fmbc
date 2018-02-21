import {
    GET_NAV,
    GET_GAME_LIST,
    GET_SPORT_TYPE,
    GET_ORIGIN_NAV,
    GET_FILTER_LIST,
    GET_SLIDE_ID,
    GET_DETAIL_LIST
} from '../constant/Naiconstant'

export const getNavList = (Nav) => {
    return {
        type: GET_NAV,
        Nav
    }
}
export const GetList = (gameList)=>{
 return {
     type: GET_GAME_LIST,
     gameList
 }
}
export const getSportType = (SportType)=>{
    return {
        type: GET_SPORT_TYPE,
        SportType
    }
}

export const originNav = (originNav) => {
    return {
        type: GET_ORIGIN_NAV,
        originNav
    }
}

export const getFilterJson = (filterList) => {
    return {
        type: GET_FILTER_LIST,
        filterList
    }
}

export const getSlideIndex = (slideIndex) => {
    return {
        type: GET_SLIDE_ID,
        slideIndex
    }
}

export const getDetailList = (detailList) => {
    return {
        type: GET_DETAIL_LIST,
        detailList
    }
}