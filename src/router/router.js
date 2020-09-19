const Home = ()=>import('@/views/Home.vue')
const Class = ()=>import('@/views/Class.vue')
const My = ()=>import('@/views/My.vue')
const Cart = ()=>import('@/views/Cart.vue')
const GoodList = ()=>import('@/views/goodList.vue')
const Detail = ()=>import('@/views/detail.vue')
const Regi = ()=>import('@/views/regi.vue')
const routes=[
            {
                id:1,
                path:'/home',
                component:Home
            },
            {
                id:2,
                path:'/class',
                component:Class
            },
            {
                id:3,
                path:'/my',
                component:My
            },
            {
                id:4,
                path:'/cart/:cartId',
                component:Cart
            },
            {
                id:5,
                path:'/goodlist/:id',
                component:GoodList
            },
            {
                id:6,
                path:'/detail/:goodId',
                component:Detail
            },
            {
                id:7,
                path:'/regi',
                component:Regi
            }
        
   
   
    
]

export default routes