import Loadable from 'react-loadable'

import loading from '../Common/Loading' 
const Home= Loadable({
  loader: () => import('../containers/Home/Home.jsx'),
  loading: loading
})
const Collection= Loadable({
  loader: () => import('../containers/Collection/Collection.jsx'),
  loading: loading
})
const User= Loadable({
  loader: () => import('../containers/User/User.jsx'),
  loading: loading
})
const Detail= Loadable({
  loader: () => import('../containers/Detail/Detail.jsx'),
  loading: loading
})

export default{
    Home,
    Collection,
    User,
    Detail
    
}