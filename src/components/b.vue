<template>
  <div>
    <div @click="testclick">点击1111</div>
    <router-view></router-view>
  </div>

</template>

<script>

  export default {
    methods: {
      testclick() {
        this.$router.push({
          path: '/b/1'
        })
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
