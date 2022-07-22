<template>
  <div id="wrap">
    <Title type='设置密码'></Title>
    <div class="main">
        <div class="pass-title">请输入创建密码:</div>
        <div class="pass">
            <input type="text" placeholder="请输入密码">
        </div>
    </div>

    <Button type='registersucceed' title='完成'></Button>
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
#wrap{
    padding: 0 0.5rem 0.5rem 0.5rem;

    & .main{
        height: 1rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #f3f3f3;
        margin-top: 0.4rem;
        & div{
            height: 0.6rem;
            display: flex;
            align-items: center;
        }

        & .pass-title{
            width: 30%;
            font-size: 0.24rem;
        }

        & .pass{
            width: 70%;
            & input{
                outline: none;
                border: none;
                background-color: transparent;
            }
        }
        
    }

}
</style>