<template>
  <div id="app">
    <div>
      <router-link tag="span" to="/a">a组件</router-link>
      <router-link tag="span" to="/b">b组件</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";

  #app {
    .fontsize(14px)
  }
  .router-link-active {
    color:red;
  }
</style>
