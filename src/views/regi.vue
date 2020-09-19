<template>
  <div class="login">
      <TopTabbar :title="title" :bol='false'/>

      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="手机号"
          placeholder="Name"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
              
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="Password"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        
        <!-- 注册 -->
        <van-field
            v-model="sms"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
            >
            <template #button>
                <van-button size="small" type="primary" @click="send">发送验证码</van-button>
            </template>
        </van-field>

        <div style="margin: 16px;">
          <van-button round block type="info" :disabled='disabled' native-type="submit" @click="zhuce">
            立即注册
          </van-button>
        </div>
      </van-form>


     <div class="denglu">
         <van-button round type="info" @click="gosign">去登陆?</van-button>
     </div>
  </div>
</template>

<script>


import {Button , Field ,  Form , Notify } from 'vant';
import {getMobileCode , postPassword} from '@/utils/api'



const TopTabbar=()=>import('@/components/common/topTabbar.vue')
export default {
  components:{
    TopTabbar,
    [Form.name]:Form,
    [Field.name]:Field,
    [Button.name]:Button,
     [Notify.name]: Notify  
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
      title:'注册',
  
  
      isTouken:'还没有账号?',
      sms:'',
      disabled:true,//是否禁用
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
    onSubmit(){

    },
    //发送验证码
    send(){
        //获取验证码接口
        getMobileCode({mobile:this.username}).then(res=>{
            this.disabled=false
            console.log(res)
        })
     
    },
    //注册
    zhuce(){
        let data={
            mobile:this.username,
            username:this.username,
            password:this.password,
            code:this.sms
        }
        postPassword(data).then(res=>{
            console.log(res)
            if(res.data.msg=='新增成功'){
                Notify({ type: 'success', message: '通知内容' })
            }
        })
    },
    //去登录
    gosign(){
        this.$router.push('/login')
    }
  }
}
</script>

<style lang='scss' scoped>
 .denglu{
     .van-button{
         float: right;
     }
 }
</style>