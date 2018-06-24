<template>
  <div class="achievement">
    <header class="header">公司业绩</header>
    <div class="banner">
      <img src="./image/banner2.jpg" alt="">
      <div class="banner-content">
        <h1>坚持实施精品战略</h1>
        <h1>坚持打造精品工程</h1>
        <div class="banner-text3">Adhere to the implementation of the boutique strategy to build a high-quality project.</div>
      </div>
    </div>
    <div class="tab">
      <router-link to="/achievement/a">获奖工程</router-link>
      <router-link to="/achievement/b">土建工程</router-link>
      <router-link to="/achievement/c">市政工程</router-link>
    </div>
    <transition name="move">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";
  @import "~common/less/variable.less";

  .achievement {
    .banner {
      width:100%;
      .vh(height,400);
      position: relative;
      img {
        width:100%;
        height:100%;
        display:block;
      }
      .banner-content {
        color:#fff;
        position: absolute;
        text-align: center;
        top:30%;
        left:0;
        .vw(width,450);
        h1 {
          font-size:20px;
          padding:3px;
        }
        
        .banner-text3 {
          .vh(margin-top,14);
          font-size:10px;
          opacity: .5;
          text-align: center;
        }
      }
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
