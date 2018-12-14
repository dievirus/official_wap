<template>
  <div class="test">
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide >
      <img src="./bg1.png" >
       <div class="slide1-wrap">
          <div class="slide1-text1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="" swiper-animate-delay="0.5s">50余载匠心如一</div>
          <div class="slide1-text2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="" swiper-animate-delay="1.1s">工程质量至上</div>
          <div class="slide1-text3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="" swiper-animate-delay="1.6s">安全文明施工第一</div>
          <div class="slide1-text4 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="" swiper-animate-delay="2s"></div>
          <div class="slide1-text5 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="" swiper-animate-delay="2.3s">更多精彩，尽在大划建筑</div>
        </div>
    </swiper-slide>
    <swiper-slide >
      <img src="./bg2.png" >
      <div class="slide2-wrap">
        <div class="slide2-text1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="" swiper-animate-delay="0.2s">以诚信务实构建和谐企业</div>
        <div class="slide2-text2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="" swiper-animate-delay="0.9s">用科学管理打造精品工程</div>
      </div>
    </swiper-slide>
    <swiper-slide >
      <img src="./bg3.png" >
      <div class="slide3-wrap">
        <div class="slide3-text1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="" swiper-animate-delay="0.2s">创新 协作</div>
        <div class="slide3-text2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="" swiper-animate-delay="0.9s">敬业 奉献</div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data () {
      return {
        swiperOption: {
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          autoplayDisableOnInteraction: false,
          
          paginationType:"bullets",
          pagination : {
            el:'.swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              const activeColor = '1'
              const normalColor = '.3'
              let color = ''
              let paginationStyle = ''
              let html = ''
              for (let i = 1; i <= total; i++) {
                if (i === current) {
                  color = activeColor
                } else {
                  color = normalColor
                }
                paginationStyle = `background:#fff;width:8px;height:8px;opacity:${color};border-radius:100%;margin-left:15px;`
                html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
              }
              return html
            }
          },
          loop: true,
        },
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {


    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "./animate.min.css";
  @import "~common/less/mixin.less";

  img {
    width:100%;
    display:block;
  }
  .swiper-slider {
    position:relative;
  }
  .slide1-wrap {
    position: absolute;
    left:0;
    .vh(top,160);
    z-index:100;
    color:#fff;
    text-align: center;
    width:100%;
    .slide1-text1 {
      font-size:30px;
    }
    .slide1-text2,.slide1-text3, {
      font-size:18px;
    }
    .slide1-text2 {
      .vh(margin-top,30);
      .vh(margin-bottom,30);
    }
    .slide1-text4 {
      .vw(width,300);
      height:1px;
      background:#fff;
      opacity: .6;
      margin:0 auto;
      .vh(margin-top,16);
      .vh(margin-bottom,16);
    }
    .slide1-text5 {
      font-size:12px;
      opacity: .6;
    }
  }
  .slide2-wrap {
    position: absolute;
    left:0;
    .vh(top,160);
    z-index:100;
    color:#fff;
    text-align: center;
    width:100%;
    font-size:30px;
    .slide2-text2 {
      .vh(margin-top,30)
    }

  }
  .slide3-wrap {
    position: absolute;
    left:0;
    .vh(top,160);
    z-index:100;
    color:#fff;
    text-align: center;
    width:100%;
    font-size:30px;
    .slide3-text2 {
      .vh(margin-top,30)
    }
  }
</style>
