import router from '../../router'

import {
    login
} from '../../api/index'

import {
    SAVE_USER_INFO,
    SAVE_TOKEN
} from '../mutations-type'

const state = {
    initTest: '用户模块的初始化数据',
    userInfo: {}, // 用户信息
    token: null, // token
}

const mutations = {
    // 保存用户信息
    [SAVE_USER_INFO](state, userInfo) {
        state.userInfo = userInfo
    },
    // 单独保存token
    [SAVE_TOKEN](state, token) {
        state.token = token
    },
}

const actions = {
    async getUserInfoAction({
        commit
    }, loginForm) {
        const result = await login(loginForm)
        if (result.status === 0) {
            // 单独存储token到user模块的vuex中
            commit(SAVE_TOKEN, result.data.token)
            // 将token存储到localStorage中
            localStorage.setItem('token_key', result.data.token)
            // 将token从结果中删除
            delete result.data.token
            // 保存用户信息到user模块的vuex中
            commit(SAVE_USER_INFO, result.data)
            // 跳转到首页
            router.push('/home')
        } else {
            console.log('登录失败了')
        }

    }
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}