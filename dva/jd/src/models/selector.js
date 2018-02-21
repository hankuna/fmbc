import { createSelector } from 'reselect'

const getVisibilityFilter = (state,props) => {
    return Object.keys(state)
}

const bb = (state,props) => {
    return props.history.action
}

export const makeFormatedBalance = createSelector(
    [getVisibilityFilter,bb],
    (arg1,arg2) => {
        return arg1 + arg2
    }
)