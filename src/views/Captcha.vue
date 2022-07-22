<template>
  <div id="wrap">

    <Title type = 'xx注册'></Title>

    <div class="img-wrap">
        <img :src= 'img' alt="">
    </div>

    <p class="notice-text">我们将以短信或电话的形式将验证码发送给您，请注意接听0575/025/0592/010等开头的电话</p>

    <div class="input-box">
        <input type="text" placeholder="请输入手机号验证码">
        <button>获取验证码</button>
    </div>

    <Button type='/registerpass'></Button>

    <div class="question-box">
        <span>遇到问题？请</span>
        <span class="blue">联系客服</span>
    </div>
  </div>
</template>

<script>
import nav from '../components/Nav.vue';    // 最上面的导航
import button from '../components/Button.vue';   // 底下的下一步
export default {
    components : {
        Title : nav,
        Button : button,
    },
    data(){
        return{
            img : require('../assets/LoginImg/captcha-img.png'),
        }
    },
}
</script>

<style lang='less' scoped>
#wrap{
    padding: 0 0.5rem 0.5rem 0.5rem;

    & .img-wrap{
        margin-top: 0.4rem;
        text-align: center;

        & img{
            width: 1.76rem;
            height: 1.4rem;
        }
    }

    & .notice-text{
        padding-top: 0.4rem;
        font-size: 0.32rem;
    }

    & .input-box{
        margin-top: 0.4rem;
        border-bottom: 1px solid #ccc;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & input{
            height: 0.6rem;
            width: 60%;
            border: none;
            outline: none;
        }

        & button{
            background-color: rgba(226, 35, 30, .2);
            color: #e2231a;
            width: 2rem;
            height: 0.6rem;
            outline: none;
            border-radius: 0.4rem;
            border: none;
            line-height: 0.6rem;
            text-align: center;
            font-size: 12px;
        }
    }

    & .question-box{
        margin-top: 0.4rem;
        color: #999;
        font-size: 0.24rem;

        & .blue{
            color: #3b7adb;
        }
    }
}
</style>