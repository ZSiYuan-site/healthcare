# vuex状态管理
> 安装 ："vuex": "^3.1.2"

```
cnpm i vuex
```

> store文件下 创建 index.js state.js mutations.js actions.js  getters.js

> store/state.js :

```
export default {
    initState: '初始化数据'
}
```

> 在 src/store/index.js ：

```
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// 生成store对象
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

// 暴露
export default store
```

>  在main.js :

```
import store from './store/index'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
```

> 在api/index.js ：

```
export const getAddress = (latitude,longitude) => myAxios({
    url:`/postion/${lititude},${longitude}`
})

// get请求，并且有参数 方式二 ：
export const getAddress = (latitude,longitude) => myAxios({
    url:'/postion',
    params:{
      latitude,
      longitude
    }
})

```

> 在state.js :

```
export default {
  address:'',
}
```

> 在mutations-type.js :

```
export const SAVE_ADDRESS = 'save_address'
```

> 在mutations.js :

```
import {
  SAVE_ADDRESS
} from './mutations-type.js'

export default {
  [SAVE_ADDRESS] (state,address){
    state.address = address
  }
}
```

> 在actions.js :

```
import {getAddress } form '../api'

import {
  SAVE_ADDRESS
} from './mutations-type.js'

export dafault {
  async getAddressAction({commit}){
    let result = await getAddress(40,116)
    <!-- if(result.code === 0){
      commit(SAVE_ADDRESS,result.data)      
    } -->
    // 简写
    result.code === 0 && commit(SAVE_ADDRESS,result.data)
  }
}
```

> 在组件中的created中：

```
import {mapState} from 'vuex

this.$store.dispatch('getAddressAction)

computed:{
  ...mapState({
    xxx:state => state.address
  })
}

// 使用 address.name
```

# 挂载 $API 
> 如果有些请求，不需要保存到vuex中，而是直接发送请求，获取数据，比如 发送短信验证码

> 在api/index.js :

```
// 发送短信验证码 
export const sendCode = (phone) =>myAxios({
  url:'/sendcode',
  params:{
    phone
  }
})
```

> 在main.js :
```
import * API from './api'
Vue.prototype.$API  = API
```

> 在组件中 ：

```
let result = await this.$API.sendCode(phone)
console.log(result)
```

# vuex模块化
