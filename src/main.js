import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// 引入Header组件
import Header from './components/header/Header.vue';
import TopNav from './components/topNav/TopNav.vue'
import Footer from './components/footer/Footer.vue'

// 引入权限拦截
import './permission'

// 注册为全局组件
Vue.component('Header', Header)
Vue.component('TopNav', TopNav)
Vue.component('Footer', Footer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')