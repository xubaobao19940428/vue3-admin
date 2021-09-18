import  home  from "./home"
import product from './product'
const routes = [
   
    {
        path:'/login',
        name:'login',
        component:()=>import('../view/login/login.vue')
    },
    {
        path: '/',
        redirect: '/dashboard/welcome'
    },
    {
        path:'/404',
        name:'404',
        component:()=>import('../view/404.vue')
    },
     home,
     product,
    { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true }
]
export default routes