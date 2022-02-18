import myAxios from './myAxios'

// 登录
export const login = (loginForm) => myAxios({
    url: '/api/user/login',
    method: 'post',
    data: loginForm
})

