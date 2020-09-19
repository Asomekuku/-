<template>
  <div class="cart">

    <div class="cart_content">
        <div class="vart_main"
          v-for="(item,idx) in cartList"
          :key="idx"
        >
          <h1>
            <van-checkbox v-model="item.is_promote" @click="isbol(!item.is_promote)"></van-checkbox>
            </h1>
          <img :src="item.goods_small_logo" alt="">
          <div>
            <p>{{item.goods_name}}</p>
            <div>
              <span>￥{{item.goods_price}}</span>
              <div class="addSub">
                <van-icon name="add-o" 
                  @click="add(idx)"
                />
                <span>{{item.hot_mumber}}</span>
                <van-icon name="close" 
                  @click="sub(idx)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
   
   
      <van-submit-bar class="submit"  :price="price" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
       
      </van-submit-bar>
      <!-- 底部 -->
      <BotTabbar/>
    
  </div>
</template>

<script>
import {mapState  } from 'vuex'
import {Checkbox, CheckboxGroup ,Icon , SubmitBar} from 'vant'
const BotTabbar=()=>import('@/components/common/bottomTabbar.vue')

export default {
  components:{
    BotTabbar,
    [Checkbox.name]:Checkbox,
    [CheckboxGroup.name]:CheckboxGroup,
    [Icon.name]:Icon,
    [SubmitBar.name]:SubmitBar
  },
  data(){
    return{
      checked:false,
      num:0,
      price:55,
      
    }
  },
  mounted(){
    this.priceFn()
  },
  methods:{
    
    //加
    add(idx){
      this.cartList[idx].hot_mumber++
      this.priceFn()
    },
    //减
    sub(idx){
      
      if(this.cartList[idx].hot_mumber<=1){
        this.cartList[idx].hot_mumber=1
      }else{
        this.cartList[idx].hot_mumber--
      }
      this.priceFn()
    },
    //计算价格
    priceFn(){
      this.price=0
      this.cartList.map(ele=>{
        if(ele.is_promote){
          this.price += (ele.hot_mumber*ele.goods_price)*100
        }
       
      })
    },
    //提交
    onSubmit(){

    },
    //是否选中
    isbol(){
      this.priceFn()
      //判断是否全选
      let num=0
      this.cartList.map(ele=>{
        if(ele.is_promote){
          num++
        }
      })
      num==this.cartList.length ?  this.checked=true : this.checked=false
    },
    //全选
    checkAll(){
      this.cartList.map(ele=>(
        ele.is_promote=this.checked
      ))
      this.priceFn()
    }
  },
  computed:{
    ...mapState('classReducer',['cartList']),

  }
}
</script>

<style lang='scss' scoped>
.cart{
  height: 100%;
 padding-bottom: 2.666667rem;
   overflow: hidden;
  .cart_content{
    height: 100%;
    overflow: auto;
    margin-bottom: 100px;
  }
  .vart_main{
    display: flex;
    height: 3.6rem;
    margin: 0.266667rem 0;
    &>h1{
      padding: 0 0.266667rem;
    }
    &>img{
      width: 3.466667rem;
      display: block;
    }
    &>div{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100px;
      flex: 1;
     
      &>p{
        height: 30px;
        width: 100%;
        font-size: 0.266667rem;
        overflow:hidden;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
      }
      &>div{

       
        display: flex;
        font-size: 0.533333rem;
        justify-content: space-between;
        .addSub{
          display: flex;
          align-items: center;
          padding-right: 10px;
          &>span{
            padding: 0 0.266667rem;
          }
        }
      }
    }
  }
  // //提交
  .submit{
    position: fixed;
    bottom: 1.333333rem;
  }
  
 
}
</style>