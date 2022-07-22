<template>
  <div id="wrap">

    <Title type='xx注册'></Title>

    <div class="user-wrap">
        <img :src='img' alt="">
        <p class="user-account">j****y</p>
        <p>该手机号已经绑定以上京东帐号，请确认是否是你的帐号</p>
    </div>

    <div class="btn">是我的，立即登录</div>
    <div class="nobtn">不是我的，继续注册</div>
    <div class="question-box">
        <span>遇到问题？请</span><span class="blue">&nbsp;联系客服</span>
    </div>
  </div>
</template>

<script>
import nav from '../components/Nav.vue';
export default {
    components : {
        Title : nav,
    },
    data(){
        return{
            img : require('../assets/LoginImg/JD.png'),
        }
    }
}
</script>

<style lang='less' scoped>
.blue{
    color: #3b7adb;
}
#wrap{
    padding:  0 0.5rem 0.5rem 0.5rem;

    & .user-wrap{
        margin-top: 0.4rem;
        text-align: center;
        & img{
            width: 1.8rem;
            height: 1.8rem;
            border-radius: 50%;
            border: 2px solid #f1f1f1;
        }
        & .user-account{
            margin-top: 0.3rem;
            margin-bottom: 0.6rem;
        }
    }

    & .btn{
        margin-top: 1rem;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        border-radius: 0.4rem;
        background-color: #ff2000;
        box-shadow: 0 0.1rem 20px 0 rgb(255 62 62 / 20%);
        color: white;
    }

    & .nobtn{
        height: 1rem;
        margin-top: 0.4rem;
        border: 1px solid #878a8c;
        border-radius: 0.4rem;
        color: #686868;
        text-align: center;
        line-height: 1rem;
    }

    & .question-box{
        margin-top: 0.4rem;
        color: #999;
        font-size: 0.24rem;
    }
}
</style>