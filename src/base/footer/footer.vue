<template>
  <div class="footer ">
    <div class="text1">全国服务热线:028-8231-2656</div>
    <div class="text2">地址：四川省崇州市滨江路南一段19号</div>
    <div class="text3">Copyright © 2018 大划建筑版权所有</div>
    <div class="text4">川公网安备 31010402000179号 川ICP备 09000473号-4</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";
  @import "~common/less/variable.less";

  .footer {
    background:#30313C;
    width:100%;
    .vh(height,240);
    overflow: hidden;
    text-align: center;
    .text1 {
      font-size:16px;
      color:@color3;
      .vh(margin-top,40);
      .vh(margin-bottom,30)
    }
    .text2,.text3,.text4 {
      font-size:10px;
      color:#B9B9B9;
    }
    .text3 {
      .vh(margin-top,10);
      .vh(margin-bottom,30);
    }
  }
</style>
