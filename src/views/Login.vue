<template>
  <div id="wrap">
    <Title type="xx登录注册" to="/home" />
    
    <div class="input-container">
        <div class="title">
            <div class="area-box" @click="region" v-show="circuit">
                <span>{{ this.$route.query.data ? this.$route.query.data : '+86' }}</span>
                <img src="../assets/LoginImg/bottomarrow.png" alt="">
            </div>
            <input type="text" :placeholder="phonePlaceHolder" maxlength="11" v-model="form.phone" >
        </div>
    </div>

    <div class="input-container">
        <div class="title">
            <input :type="captchaType" :placeholder="captchaPlaceHolder" maxlength="6" class="w-70" v-model="form.captcha" >
            <span class="w-30" @click="getcaptcha">{{captcha}}</span>
        </div>
    </div>

    <div class="btn" @click="btn">登&nbsp;&nbsp;录</div>

    <div class="quick-btn">
        <span class="left" @click="accountBtn">{{quickAccout}}</span>
        <span class="right" @click="phoneBtn">手机快速注册</span>
    </div>


    <div class="otherBtn">
        <div class="w-30"></div>
        <div class="w-40">其他方式登录</div>
        <div class="w-30"></div>
    </div>

    <div class="quick-type">
        <div v-for="key in img" :key="key.title">
            <img :src="key.url" alt="" @click="thirdParty(key.title)" >
            <span>{{key.title}}</span>
        </div>
    </div>

    <div class="policy_tip">
        <input type="checkbox" name="" id="" v-model="form.checked" >
        <span>{{footerTitle}}</span>
        <span class="color-blue" v-show="circuit">xx用户注册协议，</span>
        <span class="color-blue" @click="skip">用户隐私政策</span>
    </div>

  </div>
</template>

<script>
import nav from '../components/Nav.vue';
import { Toast } from 'vant';
export default {
    
    components :{
        Title : nav,
    },
    
    data(){
        return {
            phoneflag : false,   // 手机号的判断
            infoflag : false,   // 账号密码的判断
            form : {
                phone : '',
                captcha : '',
                checked : false,
            },
            img : [
                {
                    title : 'QQ',
                    url : require('../assets/LoginImg/QQ.png')
                },
                {
                    title : '微信',
                    url : require('../assets/LoginImg/wechat.png')
                },
                {
                    title : '苹果',
                    url : require('../assets/LoginImg/apple.png')
                }
            ],
            circuit : true,
            quickAccout : '账号密码登录',
            phonePlaceHolder : '请输入手机号',
            captchaPlaceHolder : '请输入收到的验证码',
            captchaType : 'text',
            captcha : '获取验证码',
            footerTitle : '若您输入的手机号未注册，将为您直接注册，注册即视为同意',
        }
    },
    methods : {
        // 路由跳转跳转的方法
        router(a){
            this.$router.push({
                path : a,
            })
        },
        // 登录的点击事件
        btn(){
            // 账号密码登录
            if(this.circuit){
                this.judgeInfo();
                if(!this.phoneflag)return;
                console.log('手机号信息完整');
            }else{
                this.userInfoCheck()
                if(!this.infoflag)return;
                console.log('用户信息完整');
            }
        },

        // 账号密码和短信验证码登录的点击事件
        accountBtn(){
            if(this.circuit){
                this.quickAccout = '短信验证码登录';
                this.phonePlaceHolder = '用户名/邮箱/手机号';
                this.captchaPlaceHolder = '请输入密码';
                this.captchaType = 'password';
                this.captcha = '忘记密码?';
                this.footerTitle = '登录即代表您已同意';
                this.form.phone = '';
                this.form.captcha = '';
                this.circuit = false;
            }else{
                this.quickAccout = '账号密码登录';
                this.phonePlaceHolder = '请输入手机号';
                this.captchaPlaceHolder = '请输入收到的验证码';
                this.captchaType = 'text';
                this.captcha = '获取验证码';
                this.footerTitle = '若您输入的手机号未注册，将为您直接注册，注册即视为同意';
                this.form.phone = '';
                this.form.captcha = '';
                this.circuit = true;
            }
        },

        // 手机快速注册的点击事件
        phoneBtn(){
            this.router('/phoneregister')
        },

        //判断手机号验证码校验的格式
        judgeInfo(){
            if(!this.form.checked){
                Toast('请先勾选阅读');
            }else if(!/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(this.form.phone)){
                Toast('手机格式不正确');
            }else if(this.form.captcha.length<4 || this.form.captcha.length>6){
                Toast('验证码格式不正确');
            }else{
                this.phoneflag = true;
            }
        },

        // 判断用户账号密码的效验格式
        userInfoCheck(){
            if(!this.form.checked){
                Toast('请先勾选阅读');
            }else if(!this.form.phone){
                Toast('用户名不能为空');
            }else if(!this.form.captcha){
                Toast('密码不能为空');
            }else{
                this.infoflag = true;
            }
        },

        // 验证码的点击事件
        getcaptcha(){
            if(!this.circuit){
                // 进入这里是忘记密码
                this.router('/forgetpass')
            }else{
                if(/^1[0-9]{10}$/.test(this.form.phone)){
                    // console.log('手机格式正确');
                    let num = 60;
                    var a = setInterval(() => {
                        this.captcha = num--;
                    }, 1000);
                    setTimeout(() => {  
                        clearInterval(a);
                        this.captcha = '获取验证码'
                    }, 61000);
                }else{
                    Toast('手机号格式不正确');
                }
                
               
            }
        },

        // +86的点击事件
        region(){
            this.router('/region')
        },
        
        // 图标的点击事件
        thirdParty(a){
            if(!this.form.checked){
                Toast('请阅读并勾选协议');
            }else{
                switch (a) {
                    case 'QQ':
                        console.log('qq');
                        this.router('/qqlogin');
                        break;
                    case '微信' : 
                        console.log('微信');
                        break;
                    default:
                        console.log('苹果');
                        break;
                }
            }
        },
        // 跳转到隐私政策
        skip(){
            this.router('/privacy');
        },

    },
}
</script>

<style lang='less' scoped>
input::-webkit-input-placeholder{
    font-size: 0.28rem;
    color:rgba(0, 0, 0, .4);
}

#wrap{
    padding: 0 0.5rem 0.5rem 0.5rem;
    // 标题信息
    
    // 用户输入信息地方
    & .input-container{
        margin-top: 0.4rem;
        border-bottom: 1px solid #f3f3f3;
        & .title{
            height: 2rem;
            font-size: 0.36rem;
            display: flex;
            align-items: center;

            & .area-box{
                width: 1.5rem;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-size: 0.28;
                
                & img{
                    width: 0.4rem;
                }

            }
            

            & input{
                border: none;
                outline: none;
            }
            & .w-70{
                width: 70%;
            }
            & .w-30{
                display: inline-block;
                width: 30%;
                display: flex;
                align-items: center;
                justify-content: center;
                border-left: 1px solid #ccc;
                font-size: 0.24rem;
                color: #848689;
            }
        }

        
        

        
    }

    // 登录
    & .btn{
        margin-top: 0.6rem;
        width: 100%;
        height: 1.3rem;
        border-radius: 0.6rem;
        background-color: #ffcaba;
        text-align: center;
        line-height: 1.3rem;
        color: white;
        font-size: 0.36rem;
    }

    & .quick-btn{
        margin-top: 0.4rem;
        color: rgba(0, 0, 0, .4);

        & .left{
            float: left;
        }
        & .right{
            float: right;
        }
    }

    & .otherBtn{
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & div{
            float: left;
        }
        
        & .w-30{
            width: 30%;
            border-bottom: 1px solid #ccc;
        }
        & .w-40{
            widows: 40%;
            text-align: center;
            color: #ccc;
        }
    }

    & .quick-type{
        margin-top: 0.5rem;
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        & div{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            width: 1rem;
            & img{
                width: 1rem;
                height: 1rem;
                margin-bottom: 0.2rem;
            }
            & span{
                font-size: 0.24rem;
                color: rgba(0, 0, 0, .4);
            }
        }
    }

    & .policy_tip{
        margin-top: 0.2rem;
        color: #ccc;
        text-align: center;
        font-size: 0.36rem;
        & .color-blue{
            color: #4a90e2;
        }

        
    }


}
</style>