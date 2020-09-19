<template>
  <div>
     <van-tabbar route>
        <van-tabbar-item replace to="/home" icon="home-o">
            首页
        </van-tabbar-item>
        <van-tabbar-item replace to="/class" icon="search">
            分类
        </van-tabbar-item>
        <van-tabbar-item replace to="/cart/0" icon="setting-o">
            购物车
        </van-tabbar-item>
        <van-tabbar-item replace to="/my" icon="friends-o">
            我的
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// vant
import { Tabbar, TabbarItem , Icon } from 'vant'
export default {
    components:{
        [Tabbar.name]:Tabbar,
        [TabbarItem.name]:TabbarItem,
        [Icon.name]:Icon 
    },
   
   
}
</script>

<style>

</style>