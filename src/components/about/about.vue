<template>
  <div class="about">
    <header class="header">关于我们</header>
    <div class="banner">
      <img src="./image/banner1.jpg" alt="">
      <div class="banner-content">
        <h1>企业经营方针</h1>
        <div class="banner-text1 clearfix">
          <span class="ll banner-text1-l">提高质量意识</span>
          <span class="rr">开拓业务前景</span>
        </div>
        <div class="banner-text2 clearfix">
          <span class="banner-text2-l ll">以质量求生存</span>
          <span class="banner-text2-m ll">以管理求效应</span>
          <span class="banner-text2-r ll">以诚信求发展</span>
        </div>
        <div class="banner-text3">The quality of survival to manage the efficiency of the development of intergrity</div>
      </div>
    </div>
    <div class="tab">
      <router-link to="/about/a">公司介绍</router-link>
      <router-link to="/about/b">发展历程</router-link>
      <router-link to="/about/c">荣誉资质</router-link>
      <router-link to="/about/d">大事记</router-link>
      <router-link to="/about/e">联系方式</router-link>
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

  .about {
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
        left:50%;
        .vw(margin-left,-250);
        .vw(width,500);
        h1 {
          font-size:30px;
        }
        .banner-text1 {
          font-size:12px;
          border-top:1px solid #fff;
          border-bottom:1px solid #fff;
          .vh(margin-top,20);
          .vh(margin-bottom,20);
          .vh(padding-top,14);
          .vh(padding-bottom,14);
          .banner-text1-l {
            border-right:1px solid rgba(255,255,255,.5);
            width:50%;
            text-align: left;
          }
        }
        .banner-text2 {
          font-size:10px;
          opacity: .5;
          span {
            width:33.3333%;
          }
          .banner-text2-m {
            text-align: center;
          }
          .banner-text2-r {
            text-align: right;
          }
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
