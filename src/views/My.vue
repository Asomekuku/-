<template>
  <div class="my">
      <TopTabbar title="我的" :bol='false'/>

      <div v-show="token">欢迎您{{name}}</div>
      <div v-show="!token"><van-button type="primary" >登录</van-button></div>
      
      <BotTabbar/>
  </div>
</template>

<script>
import { Button } from 'vant'
const BotTabbar=()=>import('@/components/common/bottomTabbar.vue')
const TopTabbar=()=>import('@/components/common/topTabbar.vue')
export default {
   components:{
     TopTabbar,
    BotTabbar,
    [Button.name]:Button,
    
  } ,
  data(){
    return{
      token:'',
      name:''
    }
  },
  mounted(){
    this.token=localStorage.getItem('token')
    this.name=localStorage.getItem('name')
  }
}
</script>

<style>

</style>