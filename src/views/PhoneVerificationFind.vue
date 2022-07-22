<template>
  <div id="wrap">
    <Title type='忘记密码'></Title>
    <div class="main">
        <img src="../assets/LoginImg/JD.png" alt="">
        <p>wdB****DoaM</p>
        <p class="page-notice">
            验证码将发送到绑定手机号
            <br>
            111****1111
        </p>

        <div class="input-container">
            <input type="text" placeholder="请输入验证码" >
            <div>获取验证码</div>
        </div>

        <Button type='/newpass'></Button>

        <div class="tip-text">遇到问题</div>  

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
    
}
</script>

<style lang='less' scoped>
input::-webkit-input-placeholder{
    color:rgba(0, 0, 0, .4);
}
p{
    margin: 0;
}
#wrap{
    padding: 0 0.5rem 0.5rem 0.5rem;
    & .main{
        text-align: center;
        font-size: 0.4rem;
        & img{
            width: 1.12rem;
            height: 1.12rem;
            margin-top: 0.6rem;
            border: 2px solid #f5f5f5;
            border-radius: 50%;
        }

        & .page-notice{
            margin-top: 0.4rem;
        }

        & .input-container{
            margin-top: 0.2rem;
            padding: 0.2rem 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #efefef;

            & input{
                outline: none;
                border: none;
            }
            & div{
                width: 2.2rem;
                height: 0.68rem;
                background-color: rgba(226,35,30,.2);
                color: #e2231a;
                border: 0 solid rgba(226,35,30,.2);
                font-size: 0.28rem;
                border-radius: 0.4rem;
                text-align: center;
                line-height: 0.68rem;
            }
        }
        & .tip-text{
            margin-top: 0.4rem;
            width: 1.4;
            height: 0.88rem;
            text-align: center;
            line-height: 0.88rem;
            color: rgba(0,0,0,.3);
            font-size: 0.28rem;
        }
    }   
}
</style>