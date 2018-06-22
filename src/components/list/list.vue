<template>
  <div class="list">
    <ul class="content">
      <router-link to="/about/d/detail">
        <li>
          <div class="img-wrap">
            <img src="./test.jpg" alt="">
          </div>
          <div class="d-info">
            <div class="d-title nowrap2">一文读懂「用户行为数据」的采集、分析和应用首付水电费水电费是的f</div>
            <div class="d-date">2017-12-12</div>
          </div>
        </li>
      </router-link>
    </ul>
      
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    components: {
    },
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";
  @import "~common/less/variable.less";

  .content {
    li {
      display: flex;
      .vh(margin-bottom,40);
      .img-wrap {
        .vw(width,240);
        img {
          width:100%;
        }
      }
      .d-info {
        flex:1;
        min-width:0;
        color:@color1;
        .vw(padding-left,30);
        .d-title {
          font-size:16px;
          line-height:24px;
          
        }
        .d-date {
          font-size:12px;
          color:@color2;
          .vh(margin-top,64)
        }
      }
    }
    
  }
</style>
