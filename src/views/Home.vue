<template>
  <div class="home">
    首页
    <van-button type="danger" class="r-b-r" @click="agree" >我的</van-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return{

    }
  },
  methods : {
    agree(){
      this.$router.push({
        path : '/oneclicklogin'
      })
    }
  }
}
</script>
