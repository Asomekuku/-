import {getSwiper , fetchCatitems , getFloor} from '@/utils/api'

export default{
    namespaced:true,
    state:{
        swiperList:[],//轮播图
        catitemList:[],//导航
        floorList:[],//图片列表
    },
    mutations:{
        //轮播图
        swiper(state,payload){
            state.swiperList=payload
           
        },
        //导航
        catitem(state,payload){
            state.catitemList=payload
        },
        //图片列表
        getFloorList(state,payload){
            state.floorList=payload
        }
    },
    actions:{
        //轮播图
        getswiper(store,params){
            getSwiper(params).then(res=>{
                store.commit('swiper',res)
               
            })
        },
        //导航
        getcatitems(store,params){
            fetchCatitems(params).then(res=>{
                store.commit('catitem',res)
            })
        },
        //图片列表
        getFloors(store,params){
            getFloor(params).then(res=>{
                store.commit('getFloorList',res)
            })
        }
    }
}