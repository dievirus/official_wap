<template>
  <div class="nav clearfix">
    <div class="nav-wrap">
      <img src="./image/logo.png" alt="" class="logo ll">
      <img src="./image/menu.png" alt="" class="menu rr" @click="isMenuShow = !isMenuShow">
    </div>
    
    <transition name="menu">
      <div v-if="isMenuShow" class="menu-wrap">
        <router-link to="/home" @click.native="isMenuShow = !isMenuShow">首页</router-link>
        <router-link to="/about" @click.native="isMenuShow = !isMenuShow">关于我们</router-link>
        <router-link to="/achievement" @click.native="isMenuShow = !isMenuShow">公司业绩</router-link>
        <router-link to="/cooperation" @click.native="isMenuShow = !isMenuShow">投资合作</router-link>
        <router-link to="/information" @click.native="isMenuShow = !isMenuShow">公司资讯</router-link>
        <router-link to="/donate" @click.native="isMenuShow = !isMenuShow">爱心捐赠</router-link>
        <router-link to="/construction" @click.native="isMenuShow = !isMenuShow">公司党建</router-link>
        <img src="./image/close.png" alt="" class="close" @click="isMenuShow = !isMenuShow">
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isMenuShow: false
      }
    },
    methods: {
      tes() {
        console.log('j')
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";
  @import "~common/less/variable.less";
  
  .nav {
    .nav-wrap {
      .vh(margin-top,120);
      .vw(padding-left,30);
      .vw(padding-right,30);
      box-sizing: border-box;
      position:absolute;
      width:100%;
      z-index:9999;
      .logo {
        .vh(height,50);
      }
      .menu {
        .vw(width,40);
        .vh(height,35);
      }
    }
    .menu-wrap {
      padding:15px;
      position: fixed;
      width:100%;
      height: 100%;
      left:0;
      .vh(top,88);
      z-index: 9999999;
      background:rgba(0,0,0,.7);
      a {
        display:block;
        font-size:16px;
        color:#fff;
        .vh(margin-bottom,60);
        .vw(width,200);
        &.router-link-active {
          color:@color3;
        }
      }
      .close {
        position:absolute;
        .vw(width,36);
        .vw(right,90);
        .vh(top,30);
        z-index:99999999999

      }
    }
    .menu-enter-active, 
    .menu-leave-active {
        transition: all .3s;
    }

    .menu-enter,
    .menu-leave{
        transform: translate3d(-100%, 0, 0);
    }
    .menu-enter-to {
      transform: translate3d(0%, 0, 0);
    }
     .menu-leave-to{
        transform: translate3d(-100%, 0, 0);
    }
  }
  
</style>
