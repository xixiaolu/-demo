<template>
  <div id='wrap'>
    <h2 @click='aaa'>x</h2>
    <div class="main">
        <img src="../assets/LoginImg/logo.png" alt="">

        <div class="phoneNumber">123&nbsp;&nbsp;****&nbsp;&nbsp;1234</div>

        <div class="title">中国移动为您提供本机号码认证服务</div>

        <div class="mustRead">
            <input type="radio" name="" id="">
            <span class="ccc">使用手机号码登录并同意</span>
            <span class="blue">《xx隐私政策》</span>
            <span class="blue"> 《中国移动认证服务调款》 </span>
        </div>

        <div class="btn">本机号码一键登录</div>

        <div class="footer">
            <div class="quick">其他方式登录</div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods : {
        // 一键登录的返回页面
        aaa(){
            this.$router.push({
                path : '/userinfo'
            })
        }
    }
}
</script>

<style lang='less' scoped>
#wrap{
    
    & h2{

        margin: 0;
        background-image: linear-gradient(#fbe8ee, #fff);
        padding: 0.6rem 0 0.6rem 0.6rem;
    }
    & .main{
        padding: 0 0.5rem 0.5rem 0.5rem;
        text-align: center;
        & img{
            border-radius: 100%;
            padding-bottom: 0.4rem;
        }
        & .phoneNumber{
            color: black;
            font-size: 0.56rem;
            font-weight: 700;
            padding-bottom: 0.2rem;
        }
        & .title{
            color: #fff;
            font-size: 0.24rem;
        }

        & .mustRead{
            width: 73%;
            margin: 0 auto;
            font-size: 0.24rem;
            & .ccc{
                color: #ccc;
            }
            & .blue{
                color: #6890c1;
            }
        }

        & .btn{
            height: 0.8rem;
            line-height: 0.8rem;
            border-radius: 0.4rem;
            margin-top: 0.4rem;
            background-color: #ff4359;
            color: white;
        }

        & .footer{
            position: fixed;
            bottom: 10%;
            width: 85%;
            display: flex;
            justify-content: center;


            & .quick{
                width: 31%;
                padding: 0.1rem 0.2rem;
                border-radius: 0.4rem;
                background-color: #f2f2f2;
                color: #878787;
                
            }

        }
    }
}
</style>