<template>
  <div id="wrap">
      <Title type="身份验证"></Title>
      <p class="title">请选择任意一种验证方式，验证通过即可设置新密码</p>
      <div class="methodList">
        <span>手机号验证+身份信息验证</span>
        <img src="../assets/LoginImg/rightarrow.png" alt="" @click="btn">
      </div>
  </div>
</template>

<script>
import nav from '../components/Nav.vue'
export default {
    components : {
        Title : nav,
    },
    methods : {
        btn(){
            this.$router.push({
                path : '/phoneverificationfind'
            })
        }
    }
}
</script>

<style lang='less' scoped>
#wrap{
    padding: 0 0.5rem 0.5rem 0.5rem;

    & .title{
        margin-top: 0.4rem;
        margin-bottom: 0.6rem;
    }

    & .methodList{
        height: 0.6rem;
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        padding: 0.2rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & img{
            width: 0.3rem;
        }
    }
}
</style>