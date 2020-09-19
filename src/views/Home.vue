<template>
  <div class="home">
    <TopTabbar title="优购商城" :bol='false'/>
    <Setch/>
    <!-- 加载状态 -->
    <van-loading type="spinner" v-if="longding"/>  
      <!-- 轮播图 -->
      <div v-else>
        <van-swipe :autoplay="4000">
          <van-swipe-item v-for="(image) in swiperList" :key="image.goods_id">
            <img v-lazy="image.image_src" />
          </van-swipe-item>
        </van-swipe>
        <!-- 分类 秒杀 超市 -->
        <van-row class="row">
          <van-col span="6"
            v-for="item in catitemList"
            :key="item.image_src"
          >
            <img :src="item.image_src" alt="">           
          </van-col>       
        </van-row>
      </div>
     <!-- 轮播图结束 -->

    <!-- 图片列表 -->
    <div class="imgList"
      v-for="box in floorList"
      :key='box.floor_title.image_src'
    >
      <van-row type="flex">
        <van-col  span="24">
          <img :src="box.floor_title.image_src" alt="">
        </van-col>
      </van-row>
      <!-- 底部 -->
        <van-row type="flex">
          <!-- 左 -->
          <van-col class="bottom_left" span="7">
            <img :src="box.product_list[0].image_src" alt="">
          </van-col>
          <!-- 右 -->
          <van-col class="bottom_right" span="17">
            <div
              v-for="(idx) in box.product_list.length-1"
              :key="idx"
            >
              <img :src="box.product_list[idx].image_src" alt="">
            </div>
         
          </van-col>
        </van-row>
    </div>

    <BotTabbar/>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapActions, mapState} from 'vuex'
//vant
import { Swipe, SwipeItem , Lazyload , Loading ,Col, Row } from 'vant'
Vue.use(Lazyload)
const BotTabbar=()=>import('@/components/common/bottomTabbar.vue')
const TopTabbar=()=>import('@/components/common/topTabbar.vue')
const Setch=()=>import('@/components/common/setch.vue')

export default {
  name: 'Home',
  components: {
    BotTabbar,
    TopTabbar,
    Setch,
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
    [Lazyload.name]:Lazyload,
    [Loading.name]:Loading,
    [Col.name]:Col,
    [Row.name]:Row
  },
  computed:{
   
    ...mapState('home',['swiperList','catitemList','floorList'])
  },
  mounted(){
    //判断是否已经存在数据,不存在就调接口
    this.swiperList.length ? this.swiperList : this.getswiper()
    this.catitemList.length ? this.catitemList : this.getcatitems()
    this.floorList.length ? this.floorList : this.getFloors()
    this.token=localStorage.getItem('token')
  },

  data(){
    return{
      longding:false,//加载
      imgList:[],//图片列表
      token:''
    }
  },
  //方法
  methods:{
    ...mapActions('home',['getswiper','getcatitems','getFloors'])
  }
}
</script>

<style lang='scss' scoped>
.home{
  font-size:0.533333rem;
  padding-bottom: 1.333333rem;
  .van-swipe{
    .van-swipe-item{
      img{
        width: 10rem;
        height: 6rem;
      }
    }
  }
  .row{
    margin-bottom: 0.266667rem;
    .van-col{
      display: flex;
      justify-content: center;
      img{
        width: 80%;
        display: block;
      }
    }
  }
  //图片列表
  .imgList{
   
    background: #fff;
    .van-row:nth-child(1){
      background: #fff;
      .van-col{
       
        height: 1.333333rem;
        &>img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .van-row:nth-child(2){
      background: #fff;
      height: 6.666667rem;
      .van-col{
        

      }
      .bottom_left{
        &>img{
          width: 100%;
          height: 100%;
        }
      }
      .bottom_right{
       
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        
        align-items: center;
        div{
        width: 40%;
        height: 40%;
        background: #000;
        
        &>img{
          width: 100%;
          height: 100%;
        }
      }
    }
    }
  }
}
</style>
