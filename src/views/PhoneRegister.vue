<template>
  <div id="wrap">
    <!-- 模态框 -->
    <van-overlay :show="show">
        <div class="wrapper">
            <div class="block">
                <div class="title">注册协议及隐私政策</div>
                <div class="main">
                    <span>在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，</span>
                    <span class="t-d-u">请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：</span>
                    <p>《京东用户注册协议》</p>
                    <p>《京东用户注册协议》</p>
                    <p>《京东用户注册协议》</p>
                    <span class="t-d-u">【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容；并表明您也同意京东可以依据以上的隐私政策内容来处理您的个人信息。</span>
                </div>
                <div class="protocol-notice">
                    <p>如您对以上协议内容有任何疑问，您可随时与京东客服联系。</p>
                    <p>如您对以上协议内容有任何疑问，您可随时与京东客服联系。</p>
                </div>
                <van-button type="default" class="l-b-r" @click="noagree">不同意</van-button>
                <van-button type="danger" class="r-b-r" @click="agree" >同意</van-button>
            </div>
        </div>
    </van-overlay>

    <Title type='xx注册' to="/" ></Title>

    <div class="input-container">
        <div class="title">
            <span>+86</span>
            <img src="../assets/LoginImg/bottomarrow.png" alt="">
            <input type="text" placeholder="请输入手机号" maxlength="11" v-model="form.phone" >
        </div>
    </div>

    <Button type='/captcha'></Button>
    
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
        return {
            form : {
                phone : ''
            },
            show : true,
            router : '',
        }
    },
    methods:{
        // 同意按钮的点击事件
        agree(){
            this.show = false;
        },
        // 不同意的点击事件
        noagree(){
            this.$router.push({
                path : '/',
            })
        },
    },
}
</script>

<style lang='less' scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .block {
        width: 90%;
        background-color: #fff;
        border-radius: 0.2rem;
        font-size: 0.4rem;
        & button{
            width: 50%;
        }

        & .title{
            text-align: center;
            padding: 0.24rem 0;
        }

        & .main{
            padding: 0 0.5rem;
            height: 260px;
            overflow: scroll;

            & .t-d-u{
                text-decoration: underline;
            }
        }

        & .protocol-notice{
            padding: 0.18rem 0.5rem 0.28rem 0.5rem;
            box-shadow: 0px 0px 0.2rem #ccc;
        }

        & .l-b-r{
            border-radius:  0 0 0 0.2rem;
        }

        & .r-b-r{
            border-radius: 0 0 0.2rem 0;
        }

    }
}


#wrap{
    padding: 0 0.5rem 0.5rem 0.5rem;
    
    & .input-container{
        margin-top: 0.4rem;
        border-bottom: 1px solid #f3f3f3;
        & .title{
            height: 1rem;
            font-size: 0.36rem;
            display: flex;
            align-items: center;
            
            & img{
                width: 0.4rem;
                margin: 0 0.2rem;
            }

            & input{
                border: none;
                outline: none;
            }
        }  
    }
}
</style>