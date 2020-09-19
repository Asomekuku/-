<template>
  <div class="top_tabbar">
     <van-nav-bar
      :title="title"
      left-text=""
      right-text=""
      :left-arrow='bol'
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="top"
    />
  </div>
</template>

<script>
// vant
import { NavBar  } from 'vant'
export default {
    components:{
       [NavBar.name]:NavBar 
    },
    data(){
      return{

      }
    },
    
      props:['title','bol']
    ,
    mounted(){
      // console.log(this.title)
    },
    methods:{
         onClickLeft() {
          console.log('返回');
            console.log(this.$router)
            console.log(this.$route)
            this.$router.go(-1)
          },
          onClickRight() {
            console.log('按钮');
          },
        },
    
}
</script>

<style lang='scss' >
.top_tabbar{
  .top{
    background-color: #E9434F;
    .van-nav-bar__left{
      .van-nav-bar__text{
        color: #ffffff;
      }
      .van-icon-arrow-left{
        color: #ffffff;
      }
    }
    .van-nav-bar__title{
      color: #ffffff;
    }
  }
}

</style>