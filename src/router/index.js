import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由数组
import route from './router'
const Login =()=>import('@/views/Login.vue')

Vue.use(VueRouter)
//循环路由数组
let arr=[]

route.map(ele=>{
     arr.push({path:ele.path, component:ele.component})
}) 




const routes = [
  ...arr,

  {
    path:'/login',
    component:Login
  },
  {
    path:'/*',
    redirect:'/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
