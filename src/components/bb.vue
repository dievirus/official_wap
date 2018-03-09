<template>
  <transition name="slide">
    <div class="bb">
      <div class="back" @click="back">back</div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
  .slide-enter-active,.slide-leave-active {
    transition: all 0.3s
  }
  .slide-enter,.slide-leave-to {
    transform: translate3d(100%,0,0)
  }
  .bb {
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background:red;
    z-index: 10;
  }
</style>
