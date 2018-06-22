<template>
  <div class="about4 pd15">
    <!-- <List></List> -->
    <transition name="move">
      <router-view class="detail"></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import List from '@/components/list/list.vue'

  export default {
    data() {
      return {
      }
    },
    components: {
      List
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";
  @import "~common/less/variable.less";
  .about4 {
    position: relative;
    .detail {
      position:absolute;
      width:100%;
      height:100%;
      left:0;
      top:0;
      z-index: 100;
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
  }
  
</style>
