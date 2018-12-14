<template>
  <div class="detail">
    <div class="c-title">{{detailData.title}}</div>
    <div class="date">{{detailData.createTime}}</div>
    <div class="text" v-html="detailData.content">
    </div>
   </div>
</template>

<script type="text/ecmascript-6">
import { query } from '@/api/api'
import { yearMonthDay } from '@/utils/index'

  export default {
    data() {
      return {
        id:'',
        detailData:{}
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      
      getData() {
        query({
          id:this.$route.params.id
        }).then((res) => {
          this.detailData = res.data.data.rows[0]
          this.detailData.createTime = yearMonthDay(this.detailData.createTime)
        })
      }
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        this.getData()
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";
  @import "~common/less/variable.less";

  .detail {
    .c-title {
      line-height:30px;
      padding-bottom:0;
    }
    .date {
      font-size:12px;
      color:@color2;
      .vh(margin-top,20);
    }
    .img-wrap {
      width:100%;
      .vh(margin-top,40);
      img {
        width:100%;
      }
    }
    .text {
      font-size:15px;
      line-height:24px;
      .vh(margin-top,37);
    }
  }
    
</style>
