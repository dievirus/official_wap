<template>
  <div>
    <slider></slider>
  </div>

</template>

<script type="text/ecmascript-6">
  import Slider from 'components/slider/slider.vue'
  import {test} from 'api/test.js'

  export default {
    components: {
      Slider
    },
    created() {
      test().then((res) => {
        console.log(res)
      })
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";
  @import "~common/less/variable.less";

</style>
