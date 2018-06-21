<template>
  <div>
    <div @click="testclick">点击1111</div>
    <div class="test"></div>
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
  @import "~common/less/mixin.less";

  .test {
    background:red;
    opacity: .3;
    .vw(width,375);
    .vh(height,1334);
  }
</style>
