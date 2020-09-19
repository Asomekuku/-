import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 引入api挂载在原型上
import http from './utils/api'
Vue.prototype.$http=http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
