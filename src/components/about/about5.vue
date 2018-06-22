<template>
  <div class="about5 pd15">
    <ul>
      <li class="title">四川省崇州市大划建筑工程有限公司</li>
      <li>纳税人识别号：9151018420262759X8</li>
      <li>地址：四川省崇州市崇阳镇向荣街</li>
      <li class="line">电话：028-82209286</li>
      <li>收件地址：四川省崇州市滨江路南一段</li>
      <li>收件人：王雪</li>
      <li>电话：13658068208</li>
      <li>邮编：611230</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";
  @import "~common/less/variable.less";
  
  .about5 {
    font-size:12px;
    ul {
      li {
        color:@color2;
        margin-bottom:15px;
        &.title {
          color:@color1;
        }
        &.line {
          padding-bottom:15px;
          border-bottom:1px solid #ddd;
        }
      }
    }
  }
  
</style>
