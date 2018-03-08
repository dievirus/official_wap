<template>
  <div class="test">
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide ><img src="./1.jpg" ></swiper-slide>
    <swiper-slide ><img src="./2.jpg" ></swiper-slide>
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
            delay: 3000,
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
    .px2rem(width, 750)
  }

  .test .swiper-pagination-bullet-active {
    border:5px solid red !important;
  }
  .hehe {
    border:4px solid red
  }
</style>
