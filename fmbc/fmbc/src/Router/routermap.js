import routers from './router'
export const routermap = {
    NAV:[
        {
            to:'/Home',
            text:'首页'
        },
        {
            to:'/Collection',
            text:'新鲜事'
        },
        {
            to: '/User',
            text: '个人'
        }
    ],
    ROUTE:[
        {
            path:"/Home",
            component:routers.Home
        },
        {
            path:"/Collection",
            component:routers.Collection
        },
        {
            path: "/User",
            component: routers.User
        },
        {
            path: '/Detail:id',
            component: routers.Detail
        }
    ]
}