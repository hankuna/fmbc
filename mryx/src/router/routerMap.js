import routers from './router'
export const ROUTER_MAP = {
    NAV: [
        {
            to: '/',
            text: '首页',
            icon: 'iconfount home'
        },
        {
            to: '/news',
            text: '新闻',
            icon: 'iconfount home'
        },
        {
            to: '/vips',
            text: '会员',
            icon: 'iconfount home'
        },
        {
            to: '/shopcart',
            text: '购物车',
            icon: 'iconfount home'
        },
        {
            to: '/mine',
            text: '我的',
            icon: 'iconfount home'
        }
    ],
    ROUTE: [
        {
            path: '/',
            component: routers.Home
        },
        {
            path: '/news',
            component: routers.News
        },
        {
            path: '/vips',
            component: routers.Vips
        },
        {
            path: '/shopcart',
            component: routers.ShopCart
        },
        {
            path: '/mine',
            component: routers.Mine
        },
        {
            path: '/login',
            component: routers.Login
        },
        {
            path: '/detail',
            component: routers.Detail
        }
    ]
}