import { combineReducers } from 'redux'
import home from './home'
import mine from './mine'
import news from './news'
import shopCart from './shopCart'
import vips from './vips'

const rootReducers = combineReducers ({
    home,
    mine,
    news,
    shopCart,
    vips
})

export default rootReducers