<template>
  <div class="login">
      <TopTabbar :title="title" :bol='false'/>

      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="password"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info"  native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
      <span>{{isTouken}}</span>
      <van-button plain type="info" @click="register">注册</van-button>
  </div>
</template>

<script>


import {Button , Field ,  Form} from 'vant';
import {loginChick} from '@/utils/api'



const TopTabbar=()=>import('@/components/common/topTabbar.vue')
export default {
  components:{
    TopTabbar,
    [Form.name]:Form,
    [Field.name]:Field,
    [Button.name]:Button
  },
  mounted(){
    
  },
  data(){
    return{
      username:'',
      password:'',
       value: '',
      showArea: false,
      areaList: {}, // 数据格式见 Area 组件文档
      // 用户名，密码，登录
      title:'登录',


 
      isTouken:'还没有账号?'
    }
  },
  methods:{
    goHome(){
      this.$router.push('/home')
    },
    onConfirm(values) {
      this.value = values.map((item) => item.name).join('/');
      this.showArea = false;
    },
    //登录
    onSubmit(){
      console.log(123)
      let data={
        username:this.username,
        password:this.password
      }
      loginChick(data).then(res=>{
        console.log(res)
        if(res.data.msg=='登录成功'){
          localStorage.setItem('name',this.username)
          localStorage.setItem('token',res.data.wdata.oauth_token)
          this.$router.push('/home')
        }
      })
    },
    
  
    //去注册页面
    register(){
      this.$router.push('/regi')
    }
  }
}
</script>

<style lang='scss' scoped>
  .inp{
   
    width:80%;
    height: 30px;
    display: block;
    margin: auto;
  }
</style>