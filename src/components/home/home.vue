<template>
  <div class="home">
    <header class="header">大划建筑</header>
    <slider></slider>
    <section class="section section1">
      <div class="title">
        公司业务
        <span></span>
      </div>
      <div class="content">
        <ul >
          <li >
            <img src="./image/yfw_on.png" alt="">
            <div class="text">房屋建筑工程施工总承包一级</div>
          </li>
          <li>
            <img src="./image/yshiz_on.png" alt="">
            <div class="text">市政公用工程施工总承包二级</div>
          </li>
          <li >
            <img src="./image/ydiji_on.png" alt="">
            <div class="text">地基与基础工程专业承包一级</div>
          </li>
          <li >
            <img src="./image/yxiaof_on.png" alt="">
            <div class="text">消防设施工程专业承包一级</div>
          </li>
          <li >
            <img src="./image/yfangs_on.png" alt="">
            <div class="text">防水防腐保温工程专业承包二级</div>
          </li>
          <li >
            <img src="./image/yzhuangs_on.png" alt="">
            <div class="text">建筑装饰装修工程专业承包一级</div>
          </li>
          <li >
            <img src="./image/ymuq_on.png" alt="">
            <div class="text">建筑幕墙工程专业承包二级</div>
          </li>
          <li >
            <img src="./image/ytez_on.png" alt="">
            <div class="text">特种工程专业承包不分等级</div>
          </li>
          <li >
            <img src="./image/ybans_on.png" alt="">
            <div class="text">模板脚手架专业承包不分等级</div>
          </li>
          <li >
            <img src="./image/yshig_on.png" alt="">
            <div class="text">模板脚手架专业承包不分等级</div>
          </li>
        </ul>
      </div>
    </section>
    <section class="section section2">
      <div class="title">
        公司业绩
        <span></span>
      </div>
    </section>
    <section class="section section3">
      <div class="title">
        公司动态
        <span></span>
      </div>
      <ul class="d-content">
        <li>
          <div class="img-wrap">
            <img src="./image/1.jpg" alt="">
          </div>
          <div class="d-info">
            <div class="d-title nowrap2">一文读懂「用户行为数据」的采集、分析和应用首付水电费水电费是的f</div>
            <div class="d-date">2017-12-12</div>
          </div>
        </li>
        <li>
          <div class="img-wrap">
            <img src="./image/1.jpg" alt="">
          </div>
          <div class="d-info">
            <div class="d-title nowrap2">一文读懂「用户行为数据」的采集、分析和应用</div>
            <div class="d-date">2017-12-12</div>
          </div>
        </li>
      </ul>
      <a href="" class="more">查看更多</a>
    </section>
    <section class="section section4">
      <div class="title">
        合作伙伴
        <span></span>
      </div>
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
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'components/slider/slider.vue'

  export default {
    components: {
      Slider
    },
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";
  @import "~common/less/variable.less";

  .home {
    background:#f2f2f2;
    .header {
      background:#fff
    }
    .section {
      background:#fff;
      overflow: hidden;
    }
    .section1 {
      .content {
        ul {
          display:flex;
          flex-wrap: wrap;
          li {
            text-align: center;
            width:33.333%;
            .vh(margin-bottom,64);
            img {
              .vw(width,120);
              .vh(height,120);
            }
            .text {
              font-size:12px;
              line-height:18px;
              .vw(width,180);
              text-align: center;
              margin:0 auto;
              .vh(margin-top,27);
            }
          }
        }
      }
    }
    .section2,.section3,.section4 {
      .vh(margin-top,12);
    }
    .section3 {
      .vw(padding-left,30);
      .vh(padding-right,30);
      box-sizing: border-box;
      .d-content {
        li {
          display: flex;
          .vh(margin-bottom,40);
          .img-wrap {
            .vw(width,240);
            .vh(height,180);
            border:1px solid black;
            img {
              width:100%;
            }
          }
          .d-info {
            flex:1;
            min-width:0;
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
      .more {
        display:block;
        margin:0 auto;
        .vw(width,360);
        .vh(height,80);
        .vw(margin-top,40);
        .vw(margin-bottom,60);
        color:#fff;
        font-size:16px;
        text-align: center;
        .vh(line-height,80);
        border-radius: 20px;
        background:@color3;

      }
    }
    .section4 {
      .content {
        .vw(padding-left,30);
        .vw(padding-right,30);
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
  }
</style>
