import {getCate,getGoodSetch , getDetail } from '@/utils/api'

export default{
    namespaced:true,
    state:{
       cateList:[],
       goodSetchList:[],//商品列表
       detailList:[],//商品详情
       cartList:[],//购物车
    },
    mutations:{
       setcateList(state,payload){         
            state.cateList=payload
       },
       //商品列表
       setGoodList(state,payload){
            state.goodSetchList=payload
       },
       //商品详情
       setDetailList(state,payload){
           state.detailList=payload
           payload.hot_mumber=1//初始值
           state.cartList.push(payload)
       },
       //购物车
       setCartlist(state,payload){
            state.cartList=payload
       }
    },
    actions:{
        getcateList(store,params){
            getCate(params).then(res=>{
   
                store.commit('setcateList',res)
            })
        },
        //商品列表
        getGoodList(store,params){
            getGoodSetch(params).then(res=>{
                store.commit('setGoodList',res)
            })
        },
        //商品详情
        getDetailList(store,params){
            getDetail(params).then(res=>{
                store.commit('setDetailList',res)
            })
        }
    }
}