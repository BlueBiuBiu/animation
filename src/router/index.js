import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('views/login/Login')
const TabBar =() => import('components/common/tabbar/TabBar')
const Index =() => import('views/home/Index')
const MoreAnimation =() => import('views/more/MoreAnimation')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/tabbar',
        component: TabBar
    },
    {
        path: '/more',
        component: MoreAnimation
    }
    
]

const router = new VueRouter({
    routes,
    mode: 'history',

})

export default router