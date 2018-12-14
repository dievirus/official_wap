<template>
  <div class="cooperation min-height">
    <div class="content">
        <div><img src="../home/image/1.jpg" alt=""></div>
        <div><img src="../home/image/2.jpg" alt=""></div>
        <div><img src="../home/image/3.jpg" alt=""></div>
        <div><img src="../home/image/4.jpg" alt=""></div>
        <div><img src="../home/image/5.jpg" alt=""></div>
        <div><img src="../home/image/6.jpg" alt=""></div>
        <div><img src="../home/image/7.jpg" alt=""></div>
        <div><img src="../home/image/8.jpg" alt=""></div>
        <div><img src="../home/image/9.jpg" alt=""></div>
        <div><img src="../home/image/10.jpg" alt=""></div>
        <div><img src="../home/image/11.jpg" alt=""></div>
        <div><img src="../home/image/12.jpg" alt=""></div>
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
  </div>
</template>

<script type="text/ecmascript-6">
  import List from '@/components/list/list.vue'
  

  export default {
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";
  @import "~common/less/variable.less";
  .cooperation {
    .content {
        .vw(padding-left,30);
        .vw(padding-right,30);
        margin-top:15px;
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
  
</style>
