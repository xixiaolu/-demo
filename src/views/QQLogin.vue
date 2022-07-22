<template>
  <div id="wrap">

      <div class="page_header_upice">
          <div class="logo_upice">
              <img :src="img" alt="">
              <p>亿万用户已选择QQ帐号登录应用</p>
          </div>
      </div>
      <div class="page_content">
        <div class="btn">
            一键登录
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            img : require('../assets/LoginImg/QQlogo.png'),
        }
    }
}
</script>

<style lang='less' scoped>
#wrap{

    & .page_header_upice{
        padding: 0.8rem 0.6rem 0.6rem 0.6rem;

        & .logo_upice{
            text-align: center;
            & img{
                height: 3.32rem;
            }
            p{
                margin-top: 0.6rem;
                color: #777;
                font-weight: 400;
                font-size: 0.28rem;
            }
        }
    }

    & .page_content{
        padding: 0 0.55rem;
        & .btn{
            margin: 0 auto;
            height: 0.8rem;
            width: 6.4rem;
            background-color: rgb(18, 183, 245);
            color: rgb(255, 255, 255);
            text-align: center;
            line-height: 0.8rem;
            font-size: 0.36rem;
        }
    }

    
}
</style>