<template>
  <div class="about3 pd15">
    <ul>
      <li v-for="(item,index) in imgList" :key="index">
        <img  v-lazy="item.src" alt="">
        <div class="title">{{item.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        imgList: [
          {
            src:'/static/image/1.JPG',
            title:'重点纳税'
          },
          {
            src:'/static/image/2.JPG',
            title:'达标生产'
          },
          {
            src:'/static/image/3.JPG',
            title:'川建会员单位'
          },
          {
            src:'/static/image/4.JPG',
            title:'川建理事单位'
          },
          {
            src:'/static/image/5.JPG',
            title:'成都市企业诚信促进会会员单位'
          },
          {
            src:'/static/image/6.JPG',
            title:'国家调查企业'
          },
          {
            src:'/static/image/7.JPG',
            title:'文明施工工地'
          },
          {
            src:'/static/image/8.JPG',
            title:'资质证书'
          },
          {
            src:'/static/image/9.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/10.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/11.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/12.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/13.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/14.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/15.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/16.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/17.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/18.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/19.JPG',
            title:'守信企业'
          },
          {
            src:'/static/image/20.JPG',
            title:'守信守法单位'
          },
          {
            src:'/static/image/21.JPG',
            title:'A守信企业'
          },
          {
            src:'/static/image/22.JPG',
            title:'守信守法单位'
          },
          {
            src:'/static/image/23.JPG',
            title:'AA守信企业'
          },
          {
            src:'/static/image/24.JPG',
            title:'三星企业'
          },
          {
            src:'/static/image/25.JPG',
            title:'AAA守信'
          },
          {
            src:'/static/image/26.JPG',
            title:'守信企业'
          },
          {
            src:'/static/image/27.JPG',
            title:'守信企业'
          },
          {
            src:'/static/image/28.JPG',
            title:'诚信优质师范单位'
          },
          {
            src:'/static/image/29.JPG',
            title:'先进党支部'
          },
          {
            src:'/static/image/30.JPG',
            title:'先进单位'
          },
          {
            src:'/static/image/31.JPG',
            title:'先进单位'
          },
          {
            src:'/static/image/32.JPG',
            title:'先进集体'
          },
          {
            src:'/static/image/33.JPG',
            title:'先进集体'
          },
          {
            src:'/static/image/34.JPG',
            title:'优质结构工程'
          },
          {
            src:'/static/image/35.JPG',
            title:'优质结构工程1'
          },
          {
            src:'/static/image/36.JPG',
            title:'先进企业'
          },
          {
            src:'/static/image/37.JPG',
            title:'优质结构工程'
          },
          {
            src:'/static/image/38.JPG',
            title:'质管先进单位'
          },
          {
            src:'/static/image/39.JPG',
            title:'先进企业'
          },
          {
            src:'/static/image/40.JPG',
            title:'优质结构工程'
          },
          {
            src:'/static/image/41.JPG',
            title:'优质结构工程1'
          },
          {
            src:'/static/image/42.JPG',
            title:'质管先进'
          },
          {
            src:'/static/image/43.JPG',
            title:'质管先进'
          },
          {
            src:'/static/image/44.JPG',
            title:'先进党支部'
          },
          {
            src:'/static/image/45.JPG',
            title:'先进党支部'
          },
          {
            src:'/static/image/46.JPG',
            title:'优秀企业'
          },
        ],
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";
  @import "~common/less/variable.less";
  
  .about3 {
    box-sizing: border-box;
    ul {
      width:100%;
      display:flex;
      flex-wrap: wrap;
      justify-content:space-between;
      li {
        .vw(width,330);
        text-align: center;
        img {
          width:100%;
        }
        .title {
          font-size:14px;
          padding:15px 0;
          line-height:20px;
        }
      }
    }
  }
  
</style>
