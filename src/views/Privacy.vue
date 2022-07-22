<template>
  <div id="wrap">
    <Title type='用户隐私政测'></Title>
    <h2>用户隐私政策</h2>
  </div>
</template>

<script>
import nav from '../components/Nav.vue'
export default {
    components : {
        Title : nav,
    }
}
</script>

<style lang='less' scoped>
#wrap{
    padding: 0 0.5rem 0.5rem 0.5rem;
}
</style>