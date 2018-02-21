import Loadable from 'react-loadable'
import Loading from '../components/common/Loading'

const Home = Loadable({
    loader: () => import('../views/Home'),
    loading: Loading
})
const News = Loadable({
    loader: () => import('../views/News'),
    loading: Loading
})
const ShopCart = Loadable({
    loader: () => import('../views/ShopCart'),
    loading: Loading
})
const Vips = Loadable({
    loader: () => import('../views/Vips'),
    loading: Loading
})
const Mine = Loadable({
    loader: () => import('../views/Mine'),
    loading: Loading
})
const NotFound = Loadable({
    loader: () => import('../components/common/NotFound'),
    loading: Loading
})
const Detail = Loadable({
    loader: () => import('../views/Detail'),
    loading: Loading
})
const Login = Loadable({
    loader: () => import('../views/Login/index.js'),
    loading: Loading
})

export default {
    Home,
    News,
    ShopCart,
    Vips,
    Mine,
    NotFound,
    Detail,
    Login
}