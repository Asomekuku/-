<template>
  <div class="dtail">
      <TopTabbar title="商品详情" :bol='true'/>
      <img :src="detailList.goods_small_logo" alt="">
      <div class="price">
          <span>￥{{detailList.goods_price}}</span>
          <div>
              <van-icon name="star-o" />
          </div>
      </div>
      <p>{{detailList.goods_name}}</p>
      <div v-html="detailList.goods_introduce"></div>
    <!-- 底部 -->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="shop-o" text="店铺" />
            <van-goods-action-button color="#FFBD1C" type="warning" text="加入购物车" 
                @click="goCart"
            />
            <van-goods-action-button color="#FD5332" type="danger" text="立即购买" />
        </van-goods-action>
  </div>
</template>

<script>
import {mapState , mapActions } from 'vuex'
import { Icon } from 'vant'
import Vue from 'vue';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
const TopTabbar=()=>import('@/components/common/topTabbar.vue')
export default {
    components:{
        TopTabbar,
        [Icon.name]:Icon,
        
    },
    mounted(){
        let goods_id=this.$route.params.goodId
        
         this.getDetailList({goods_id})
    },
    data(){
        return{

        }
    },
    computed:{
        ...mapState('classReducer',['detailList'])
    },
    methods:{
        ...mapActions('classReducer',['getDetailList']),
        //去到购物车
        goCart(){
            console.log(123)
            let goods_id=this.$route.params.goodId
            this.$router.push('/cart/'+goods_id)
        }
    }
}
</script>

<style lang='scss' scoped>
    .dtail{
        &>img{
            height: 8rem;
            margin-bottom: 0.266667rem;
        }
            overflow: hidden;
        .price{
            padding: 0 0.266667rem;
            display: flex;
            justify-content: space-between;
            font-size: 0.533333rem;
        }
        &>p{
            font-size: 0.333333rem;
            text-align: left;

            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .detail_bottom{
            box-sizing: border-box;
            width: 100%;
        }
    }
</style>