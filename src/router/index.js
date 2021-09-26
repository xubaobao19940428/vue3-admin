import { createRouter, createWebHashHistory } from 'vue-router'
import { updateLocalLang } from '@/utils/index.js'
import store from '../store'
import { getToken } from '@/utils/auth'
import routes from './routes'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
const whiteList = ['/login']// no redirect whitelist

router.beforeEach((to, from, next) => {
    // 设置语言
    if (to.query.lang &&
        ((store.state.user.lang && store.state.user.lang !== to.query.lang) ||
            !store.state.user.lang)) {
        store.commit('SET_LANGUAGE', to.query.lang)
    } else {
        updateLocalLang()
    }
    if (getToken()) {
        next()
    } else {
        /* has no token */
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next('/login')
        }
    }
})
export default router
