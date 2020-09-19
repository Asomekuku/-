import axios from './fetch'
export function getSwiper(params){
    return axios({
        url:'/home/swiperdata',
        method:'GET',
        params
    })
}
export function fetchCatitems(params){
    return axios({
        url:'/home/catitems',
        method:'GET',
        params

    })
}
//图片列表
export function getFloor(params){
    return axios({
        url:'/home/floordata',
        method:'GET',
        params
    })
}
//分类
export function getCate(params){
    return axios({
        url:'/categories',
        method:'GET',
        params
    })
}
//商品列表
export function getGoodSetch(params){
    return axios({
        url:'/goods/search',
        method:'GET',
        params
    }) 
}
// 商品详情
export function getDetail(params){
    return axios({
        url:'/goods/detail',
        method:'GET',
        params
    })
}
//
import fetch from 'axios'
//注册接口
export function postPassword(data){
    return fetch({
            url:'http://s.linweiqin.com/api/s/createUser',
            method:'POST',
            data
        })
}
//获取验证码7
export function getMobileCode(params){
    return fetch({
        url:'http://s.linweiqin.com/api/s/getMobileCode',
        method:'GET',
        params
    })
}
//登录接口
export function loginChick(data){
    return fetch({
        url:'http://s.linweiqin.com/api/s/loginCheck',
        method:'POST',
        data
    })
}

export default {
    getSwiper,
    fetchCatitems
}
