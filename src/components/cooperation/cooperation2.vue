<template>
  <div class="cooperation min-height">
    <div class="content">
        <div><img src="./image/1.jpg" alt=""></div>
        <div><img src="./image/2.jpg" alt=""></div>
        <div><img src="./image/3.jpg" alt=""></div>
        <div><img src="./image/4.jpg" alt=""></div>
        <div><img src="./image/5.jpg" alt=""></div>
        <div><img src="./image/6.jpg" alt=""></div>
        <div><img src="./image/7.jpg" alt=""></div>
        <div><img src="./image/8.jpg" alt=""></div>
        <div><img src="./image/9.jpg" alt=""></div>
        <div><img src="./image/10.jpg" alt=""></div>
        <div><img src="./image/11.jpg" alt=""></div>
        <div><img src="./image/12.jpg" alt=""></div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import List from '@/components/list/list.vue'
  

  export default {
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";
  @import "~common/less/variable.less";
  .cooperation {
    .content {
        .vw(padding-left,30);
        .vw(padding-right,30);
        margin-top:15px;
        display:flex;
        flex-wrap: wrap;
        div {
          width:33.33333%;
          text-align: center;
          .vw(margin-bottom,30);
        }
        img {
          .vw(width,210);
          box-shadow: 0px 0px 20px #ddd;
        }
      }
  }
  
</style>
