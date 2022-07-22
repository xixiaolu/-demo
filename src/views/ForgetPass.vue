<template>
  <div id="wrap">

    <Title type="忘记密码"></Title>


    <div class="input-container">
        <div class="title">
            <span>账号</span>
            <input type="text" placeholder="用户名/邮箱/手机号" maxlength="11" v-model="form.phone" >
        </div>
    </div>

    <Button type='/useridentity'></Button>

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
            form : {
                phone : ''
            },
        }
    },
}
</script>

<style lang='less' scoped>
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
            // 下箭头
            & .rightArrow{
                width: 0.4rem;
                height: 0.4rem;
                margin-top: 0.1rem;
                margin-left: 0.3rem;
            }

            & .rightArrow::after{
                content: '';
                width: 0.2rem;
                height: 0.2rem;
                border-width: 0 0.06rem 0.06rem 0;
                border-color: #ccc;
                border-style: solid;
                transform:matrix(0.71,0.71,-0.71,0.71,0,0);
                position: absolute;
            }

            & input{
                border: none;
                outline: none;
                margin-left: 0.3rem;
                background-color: transparent;
            }
        }  
    }
}
</style>