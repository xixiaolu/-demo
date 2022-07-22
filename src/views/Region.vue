<template>
  <div id="wrap">
    <div class="head">
        <Title type='选择国家或地区' ></Title>
    </div>
    
    <van-index-bar>
        <div v-for="key in arr" :key="key.index">
            <van-index-anchor :key="key.index" :index="key.index" />
            <van-cell @click="props(key2.phone)" v-for="(key2,index) in key.arr2" :key="index" :title="key2.url" :value="key2.phone" />
        </div>
    </van-index-bar>
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
            arr : [
                {
                    index : 'A',
                    arr2 : [
                        {
                            url : '香港',
                            phone : '+1',
                        },
                        {
                            url : '香港',
                            phone : '+2',
                        },
                        {
                            url : '香港',
                            phone : '+3',
                        },
                        {
                            url : '香港',
                            phone : '+4',
                        },
                    ],
                },
                {
                    index : 'B',
                    arr2 : [
                        {
                            url : '香港',
                            phone : '+852',
                        },
                        {
                            url : '香港',
                            phone : '+852',
                        },
                        {
                            url : '香港',
                            phone : '+852',
                        },
                        {
                            url : '香港',
                            phone : '+852',
                        },
                    ],
                },
            ],
        }
    },
    methods : {
        retur(){
            this.$router.push({
                path : '/',
            })
        },
        props(data){
            this.$router.push({
                path : '/',
                query: {
                    data: data
                }
            })
        }
    }
}
</script>

<style lang='less' scoped>
::v-deep .van-index-anchor{
    background-color: #f5f5f5;
    color: #999;
}
::v-deep .van-cell{
    border-bottom: 1px solid #dbdbdb;
}
::v-deep .van-index-bar__index{
    color: #2d90ff;
}

::v-deep .van-cell__value{
    display: block;
    margin-right: 0.2rem;
}
.head{
    padding-left: 0.5rem;
}
</style>