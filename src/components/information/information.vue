<template>
  <div class="achievement">
    <header class="header">公司资讯</header>
    <div class="banner">
      <img src="./image/banner4.jpg" alt="">
      <div class="banner-content">
        <h1>创新之路 以务实创新构建企业</h1>
        <div class="banner-text3">The road of innovation builds an enterprise with practical innovation</div>
      </div>
    </div>
    <div class="tab">
      <router-link to="/information/a">通知公告</router-link>
      <router-link to="/information/b">公司动态</router-link>
      <router-link to="/information/c">人力资源</router-link>
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
        .vw(margin-left,-250);
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
