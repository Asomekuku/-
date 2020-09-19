<template>
  <div class="setch">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        input-align="center"
      />
  </div>
</template>

<script>
import { Search } from 'vant'
export default {
    components:{
        [Search.name]:Search
    },
    data(){
        return{
            value:''
        }
    }
}
</script>

<style lang='scss'>
.setch{
    // background-color: #E9434F;
    .van-search{
        background-color: #E9434F;
    }
}
</style>