<template>
  <div id="wrap">
    <h2>注册成功</h2>
    <h6>{{num}}秒后自动跳转到登录页</h6>
  </div>
</template>

<script>
export default {
    data(){
        return{
            num : 3,
        }
    },
    methods : {
        aaa(){
            var a = setInterval(() => {
                this.num--;
            }, 1000);
            setTimeout(() => {
                clearInterval(a);
                this.$router.push({
                    path : '/',
                })
            }, 3000);
        }
    },
    created(){
        this.aaa();
    }
}
</script>

<style lang='less' scoped>
#wrap{
    padding: 0 0.5rem 0.5rem 0.5rem;
    text-align: center;
}
</style>