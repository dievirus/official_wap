<template>
  <div id="app">
    <Nav></Nav>
    <router-view ></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from  '@/base/nav/nav.vue'
import Footer from  '@/base/Footer/Footer.vue'


export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";

  .router-link-active {
    color:red;
  }
</style>
