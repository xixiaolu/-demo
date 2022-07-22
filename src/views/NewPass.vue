<template>
  <div id="wrap">
    <Title type='忘记密码'></Title>
    <div class="main">
        <div class="consignee">
            <p>请填写历史收货人姓名</p>
            <input type="text" placeholder="历史已完成订单中的收货人">
        </div>
        <div class="consignee mt-20">
            <p>请填写历史收货人姓名</p>
            <input type="password" placeholder="8-20位，不能与旧密码相同">
        </div>
        <p class="quick">备注：请将密码设置为8-20位，并且由字母，数字和符号两种以上组成，不能与旧密码相同</p>

        <Button type='/' title='完成' ></Button>

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
.mt-20{
    margin-top: 0.4rem;
}
p{
    margin: 0;
}
#wrap{
    padding: 0 0.5rem 0.5rem 0.5rem;
    & .main{
        margin-top: 0.4rem;

        & .consignee{
            & input{
                margin-top: 0.1rem;
                outline: none;
                border: none;
                padding: 0.3rem 0;
            }
            border-bottom: 1px solid #eaeaea;
        }

        & .quick{
            color: #ccc;
            font-size: 0.28rem;
            margin-top: 0.2rem;
        }
    }
}
</style>