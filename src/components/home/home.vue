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
          <li >
            <img src="./image/gang.png" alt="">
            <div class="text">钢结构工程专业承包贰级</div>
          </li>
          <li >
            <img src="./image/other1.png" alt="">
            <div class="text">业务拓展中</div>
          </li>
        </ul>
      </div>
    </section>
    <section class="section section2">
      <div class="title">
        工程案例展示
        <span></span>
      </div>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item in list1" :key="item.id">
          <router-link :to="'/achievement/d/detail/'+item.id">
            <div class="s2-img-wrap"><img :src="item.img" alt=""></div>
            <div class="s2-title nowrap">{{item.title}}</div>
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      
    </section>
    <section class="section section3">
      <div class="title">
        公司动态
        <span></span>
      </div>
      <ul class="d-content">
        <li v-for="item in list" :key="item.id">
          <router-link :to="'/information/b/detail/'+item.id">
            <div class="img-wrap">
              <img :src="item.img" alt="">
            </div>
            <div class="d-info">
              <div class="d-title nowrap2">{{item.title}}</div>
              <div class="d-date">{{item.createTime}}</div>
            </div>
          </router-link>
          
        </li>
      </ul>
      <router-link to="/information/b" class="more">查看更多</router-link>
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
        <div><span>zh中房集团成都房地产开发有限公司</span></div>
        <div><span>四川省合丰置业发展有限责任公司</span></div>
        <div><span>成都智远金益房地产开发有限公司</span></div>
        <div><span>成都圣沅投资有限公司</span></div>
        <div><span>崇州天顺置业有限公司</span></div>
        <div><span>成都蓝润航瑞置业有限公司</span></div>
        <div><span>四川川出置业有限公司</span></div>
        <div><span>崇州市富邦皮革有限公司</span></div>
        <div><span>成都市蜀州城市建设投资有限公司</span></div>
        <div><span>成都合能兴进达房地产开发有限公司</span></div>
        <div><span>四川省合丰置业发展有限责任公司</span></div>
        <div><span>四川愿景实业有限公司</span></div>
        <div><span>大邑青禾置业有限公司</span></div>
        <div><span>成都市琉璃旅游投资开发有限责任公司</span></div>

        <div><span>成都唐人街置业有限公司</span></div>
        <div><span>成都瑞熙合能房地产开发有限公司</span></div>
        <div><span>成都泰江置业有限公司</span></div>
        <div><span>四川金联实业有限公司</span></div>
        <div><span>成都瑞进合能房地产开发有限公司</span></div>
        <div><span>四川恒昌房地产开发有限公司</span></div>
        <div><span>四川华炜投资有限公司</span></div>
        <div><span>中海信和成都物业发展有限公司</span></div>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import { query } from '@/api/api'
  import Slider from 'components/slider/slider.vue'
  import { yearMonthDay } from '@/utils/index'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data() {
      return {
        list: [],
        list1: [],
        swiperOption: {
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            
          },
          autoHeight: true, //高度随内容变化
          notNextTick: true,
          centeredSlides: true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          autoplayDisableOnInteraction: false,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper  
          observeParents:true,//修改swiper的父元素时，自动初始化swiper  
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination : {
            el:'.swiper-pagination',
          },
          loop: true,
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    components: {
      Slider,
      swiper,
      swiperSlide
    },
    mounted() {
      query({
        type: 7
      }).then((res) => {
        if(res.data.code == '200') {
          this.list = res.data.data.rows.slice(0,5)
          this.list.map((item) => {
            item.createTime = yearMonthDay(item.createTime)
            if(item.img) {
              item.img = 'http://47.96.151.153:9000/' + item.img
            }else {
              item.img = '/static/image/default.png'
            }
          })
        }
      }).catch((err) => {
        console.log(err)
      })

      query({
        type: 15
      }).then((res) => {
        if(res.data.code == '200') {
          this.list1 = res.data.data.rows.slice(0,6)

          this.list1.map((item) => {
            if(item.img) {
              item.img = 'http://47.96.151.153:9000/' + item.img
            }else {
              item.img = '/static/image/default.png'
            }
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    }
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
    .section2 {
      .swiper-slide {
        width:100%;
        .vh(height,630);
        .s2-img-wrap {
          overflow: hidden;
          width:100%;
          .vh(height,500);
        }
        .s2-title {
          text-align:center;
          margin-top:10px;
          padding:0 15px;
        }
        a {
          width:100%;
          .vh(height,630);
          display:block;
          color:@color1;

          img {
            width:100%;
            .vh(height,560);
            display:block;
          }
        }
      }
    }
    .section3 {
      .vw(padding-left,30);
      .vh(padding-right,30);
      box-sizing: border-box;
      .d-content {
        li {
          a {
            display: flex;
            .vh(margin-bottom,40);
            color:@color1;
          }
          
          .img-wrap {
            .vw(width,240);
            .vh(height,180);
            overflow: hidden;
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
              .vh(height,96);
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
          font-size:10px;
          span {
            display:block;
            .vw(width,210);
            margin:0 auto;
            height:70px;
            box-shadow: 0px 0px 20px #ddd;
            
            box-sizing: border-box;
            padding:0 10px;
            padding-top:20px;
            font-weight: 700;
            line-height:14px;
          }
        }
        img {
          .vw(width,210);
          box-shadow: 0px 0px 20px #ddd;
        }
      }
      
    }
  }
</style>
