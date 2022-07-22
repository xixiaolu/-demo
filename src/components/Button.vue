<template>
  <div id="wrap">
    <div class="btn" @click="btn" >{{ this.title ? this.title : "下一步"  }}</div>
  </div>
</template>

<script>
export default {
    props : ['type','title'],
    methods : {
        btn(){
            this.$router.push({
                path : this.type,
            })
        }
    },
}
</script>

<style lang='less' scoped>
.btn{
    margin-top: 1rem;
    height: 1rem;
    border-radius: 0.4rem;
    background-color: #ffbcb3;
    box-shadow: 10px 10px 10px #ffbcb3;
    text-align: center;
    line-height: 1rem;
    color: #fff;
    font-size: 0.32rem;
}
</style>