import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 引入用户模块的vuex
import user from './modules/user'

Vue.use(Vuex)

// 生成store对象
const store = new Vuex.Store({
    modules: {
        user
    },
    state,
    mutations,
    actions,
    getters
})

// 暴露
export default store