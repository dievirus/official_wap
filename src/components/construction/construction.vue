<template>
  <div class="achievement">
    <header class="header">公司党建</header>
    <div class="banner">
      <img src="./image/banner6.jpg" alt="">
      <div class="banner-content">
        <h1>敬业之路 以率先垂范引领全员</h1>
        <div class="banner-text3">Dedication to the road to lead by example</div>
      </div>
    </div>
    <div class="tab">
      <router-link to="/construction/a">工会工作</router-link>
      <router-link to="/construction/b">建筑业协会</router-link>
      <router-link to="/construction/c">党风廉洁</router-link>
      <router-link to="/construction/d">党建工作</router-link>
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
        top:40%;
        left:50%;
        .vw(margin-left,-300);
        .vw(width,600);
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
