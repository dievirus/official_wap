<template>
  <div id="app">
    <Nav></Nav>
    <transition name="move">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
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

  #app {
    position: relative;
  }
  .router-link-active {
    color:red;
  }
  .move-enter-active, 
    .move-leave-active {
        transition: all .7s;
    }

    .move-enter,
    .move-leave{
        transform: translate3d(0, 10px, 0);
        opacity: 0;
    }
    .move-enter-to {
      opacity: 1;
    }
</style>
