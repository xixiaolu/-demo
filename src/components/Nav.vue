<template>
    <div class="header">
        <div class="leftArrwo" @click="re"></div>
        <span>{{type}}</span>
    </div>
</template>

<script>
export default {
    props : ["type","to"],
    data(){
        return{
            router : '',
        }
    },
    methods : {
        re(){
            if(this.to){
                this.$router.replace({
                    path : this.to,
                })
            }else{
                this.$router.push({
                    path : this.router,
                })
            }
        }
    },
    created(){
        let res = localStorage.getItem('route');
        // if(res == '/captcha'){
        //     res = '/'
        // }
        this.router = res;
    }
}
</script>

<style lang='less' scoped>
// 左箭头
.leftArrwo{
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    margin-top: 0.3rem;
}
.leftArrwo::after{
    content: '';
    width: 0.2rem;
    height: 0.2rem;
    border-width: 0 0 3px 3px;
    border-color: #000000b9;
    border-style: solid;
    transform:matrix(0.71,0.71,-0.71,0.71,0,0);
    position: absolute;
}
.header{
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.3rem;
}
</style>