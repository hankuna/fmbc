import { createSelector } from 'reselect'

const getNavData = (state) => {
    //console.log(state,'====')
    if(!state.home.nav) return
    return state.home.nav.data.recommend.wareInfoList
}

export const homeSelectorNav = createSelector(
    [getNavData],
    (a) => {
        return a
    }
)