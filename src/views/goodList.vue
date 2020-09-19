<template>
  <div>
      <TopTabbar title="商品列表" :bol='true'/>
      <Setch/>
      <!--  -->
      <van-tabs >
        <van-tab title="标签 1" name="a"></van-tab>
        <van-tab title="标签 2" name="b"></van-tab>
        <van-tab title="标签 3" name="c"></van-tab>
      </van-tabs>
        <!-- 列表 -->
      <van-row class="good_row" 
        v-for="item in goodSetchList.goods"
        :key="item.goods_id"
        @click="goDetail(item.goods_id)"
      >
        <van-col class="good_col" span="7">
            <img :src="item.goods_big_logo" alt="">
        </van-col>
        <van-col class="good_col" span="17">
            <p>{{item.goods_name}}</p>
            <div>￥{{item.goods_price}}</div>
        </van-col>
      </van-row>
      <!-- 列表结束 -->
  </div>
</template>

<script>
import { Tab, Tabs, Col , Row} from 'vant'
import {mapState , mapActions} from 'vuex'
const TopTabbar=()=>import('@/components/common/topTabbar.vue')
const Setch=()=>import('@/components/common/setch.vue')
export default {
    components:{
        TopTabbar,
        Setch,
        [Tab.name]:Tab,
        [Tabs.name]:Tabs,
        [Col.name]:Col,
        [Row.name]:Row
    },
    computed:{
        ...mapState('classReducer',['goodSetchList'])
    },
    methods:{
        ...mapActions('classReducer',['getGoodList']),
        //跳转详情页面
        goDetail(goods_id){
            this.$router.push('/detail/'+goods_id)
        }
    },
    mounted(){
        let id=this.$route.params.id
        this.getGoodList({cid:id,pagesize:9,pagenum:1})
        
    }
}
</script>

<style lang='scss' scoped>
.good_row{
    .good_col:nth-child(1){
        height: 3.466667rem;
       
        border: 1px solid #000;
        &>img{
            width: 100%;
            height: 100%;
        }
    }
    .good_col:nth-child(2){
        height: 3.466667rem;
        
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        font-size: 14px;

        &>p{
            text-align: left;
            text-indent: 0.24rem;
            
            width: 6.666667rem;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        &>div{
            text-align: left;
            text-indent: 18px;
        }
    }
}
</style>