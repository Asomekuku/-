<template>
  <div class="class">
    <TopTabbar title="商品分类" :bol='true'/>
    <Setch/>
      <div class="class_content">
        <van-row>
          <van-col class="col1" span="6">
            <!-- 左边列表 -->
            <p v-for="(li,index) in cateList"
              :key="li.cat_id"
              v-text="li.cat_name"
              @click="actives(index)"
              :class='{"on":index==initNum}'
            >
            </p>
          </van-col>
          <van-col class="col2"  span="18">
            <!-- 右边商品 -->        
            <div>
              <div class="content_right"
                v-for="item in cateList[initNum].children"
                :key="item.cat_id"
              >
                  <p>{{item.cat_name}}</p>
                  <!-- 商品 -->
                  <div v-if="item.children">
                      <div
                        
                        v-for="ele in item.children"
                        :key="ele.cat_id"
                        @click="goGoodList(ele.cat_id)"  
                      >
                        <img :src="ele.cat_icon" alt="">
                        <span>{{ele.cat_name}}</span>
                      </div>
                  </div>
              </div>
            </div>           
          </van-col>
        </van-row>
      </div>
      <BotTabbar/>
  </div>
</template>

<script>
import { Col, Row } from 'vant'
import {mapState , mapActions} from 'vuex'
const BotTabbar=()=>import('@/components/common/bottomTabbar.vue')
const TopTabbar=()=>import('@/components/common/topTabbar.vue')
const Setch=()=>import('@/components/common/setch.vue')

export default {
  components:{
    BotTabbar,
    TopTabbar,
    Setch,
    [Col.name]:Col,
    [Row.name]:Row
  },
  computed:{
    ...mapState('classReducer',['cateList'])
  },
  mounted(){
     
     this.cateList.length ? this.cateList.length : this.getcateList()
    //  {cid:4,pagesize:9,pagenum:1}
    // this.getGoodList({cid:4,pagesize:9,pagenum:1})
     
  },
  data(){
    return{
      initNum:0,
      goodId:''
    }
  },
  methods:{
    ...mapActions('classReducer',['getcateList']),
    actives(idx){
      this.initNum=idx
    },
    //获取商品id
    goGoodList(_id){
      //调取相应的数据
      //跳转
      
      this.$router.push('/goodlist/'+_id)
     
    }
  }
}
</script>

<style lang='scss' >
.class{
  height: 100%;
 
  .class_content{
  height: 100%;
 
  .van-row{
    height: 100%;
     overflow: hidden;
    .van-col{
      overflow-y: auto;
      border: 1px solid #000;
      height: 100%;
      background: #F3F3F3;
      padding-bottom: 1.333333rem;
    }
    .col1{
       &>p{
        font-size: 0.4rem;
        height: 0.666667rem;
        line-height: 0.666667rem;
      }
    }
    .col2{
      //  margin-top: -39px;
         background: #ffffff;
        overflow: auto;
        //商品列表右边
       .content_right{
        overflow: hidden;
        min-height:  100px;
 
        &>p{
          font-size: 0.186667rem;
          font-weight: bold;
        }
        &>div{
          width: 100%;      
         
          overflow: hidden;
          &>div{
            width: 33.3%;
            box-sizing: border-box;
            float: left;
            text-align: center;
            margin: 15px 0;
            &>img{
              width: 90%;
              height: 80%;
              display: block;
              margin: 0;
              padding: 0;
            }
            &>span{
              display: block;
              line-height: 20px;
              padding: 0;
              
              font-size: 12px;
              height: 20px;
            }
          }
        }
      }
    }
  }
 
}
}
//点击颜色
.on{
  color:#E9434F;
}
</style>