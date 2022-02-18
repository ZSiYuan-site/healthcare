/**
 * 权限拦截
 */

import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import router from './router/index'
import store from './store/index'

// 白名单
const whiteList = ['/login']

/**
 * 路由的前置守卫
 */
router.beforeEach((to, from, next) => {
    nprogress.start() // 开启进度条
    // 有token
    if (store.state.user.token) {
        if (to.path === '/login') {
            // 有token，并且想去登录页面，就直接跳转到主页
            next('/')
        } else {
            // 直接放行
            next()
        }
    } else { // 没有token
        // 并且跳转到的地址在白名单内
        if (whiteList.indexOf(to.path) > -1) {
            // 直接放行
            next()
        } else {
            // 没有token，并且不在白名单
            next('/login')
        }
    }
    // 为了解决手动切换地址时，进度条不关闭的问题
    nprogress.done()
})

/**
 * 路由的后置守卫
 */
router.afterEach(() => {
    // 关闭进度条
    nprogress.done()
})