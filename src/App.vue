<template>
  <div id="app">
    
      <router-view />
      <!-- <Login v-else/> -->
    
    
   
  </div>
</template>

<script>
//引入登录页面和其他总页面
// import Login from '@/views/Login.vue'

export default {
  components:{
    // Login
   
  },
  data(){
    return{
      token:''
    }
  },
  mounted(){
    this.token = localStorage.getItem('token')
    if(!this.token){
      this.$router.replace('/login')
    }else{
      this.$router.push('/home')
    }
  },

}
</script>

<style>
html,body{
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
