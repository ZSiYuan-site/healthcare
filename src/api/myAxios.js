import axios from 'axios'

import store from '../store/index'

export const baseURL = '/api'

const instance = axios.create({
    baseURL,
    timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
    if (store.state.token) {
        config.headers['Authorization'] = store.state.token
    }
    return config
})

// 响应拦截器
instance.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        console.log(error.message)
        return Promise.reject(error)
    }
)

export default instance