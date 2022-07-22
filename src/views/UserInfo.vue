<template>
  <div>
    用户信息页
    <van-button type="danger" class="r-b-r" @click="login">登录</van-button>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods : {
    login(){
      this.$router.push({
        path : '/'
      })
    }
  }
}
</script>

<style lang='less' scoped>

</style>