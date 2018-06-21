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
    <swiper-slide ><img src="./bg1.png" ></swiper-slide>
    <div class="swiper-pagination" id="test" slot="pagination"></div>
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
            delay: 30000000,
            disableOnInteraction: false
          },
          autoplayDisableOnInteraction: false,
          paginationType:"bullets",
          pagination : {
            el:'.swiper-pagination',
            bulletClass : 'my-swiper-pagination-bullet',
            bulletActiveClass : 'my-swiper-pagination-bullet-active'
          },
          loop: true,
        },
        img:[
            {
              url:'/static/1.jpg'
            },
            {
              url:'/static/2.jpg'
            }
        ]
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
    .vh(top,180);
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
</style>
