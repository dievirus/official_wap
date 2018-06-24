<template>
  <div class="achievement pd15 min-height">
    <List v-show="isList" :url="url" :type="type"></List>
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
        isList:true,
        url:'',
        type:null
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.url = to.meta.url
        vm.type = to.meta.type
      })
    },
    mounted() {
      if(this.$route.params.id) {
        this.isList = false
      }else {
        this.isList = true
      }
    },
    watch: {

      '$route' (to, from) {
        // 对路由变化作出响应...
        if(this.$route.params.id) {
          this.isList = false
        }else {
          this.isList = true
        }
      },
    },
    components: {
      List
    },
    
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";
  @import "~common/less/variable.less";
  .achievement {
    position: relative;
    .detail {
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
