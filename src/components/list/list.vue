<template>
  <div class="list">
    <ul class="content">
        <li v-for="item in list" :key="item.id">
          <router-link :to="url+item.id">
            <div class="img-wrap">
              <img v-lazy="item.img" alt="">
            </div>
            <div class="d-info">
              <div class="d-title nowrap2">{{item.title}}</div>
              <div class="d-date">{{item.createTime}}</div>
            </div>
          </router-link>
        </li>
    </ul>
    <div class="loading">{{isMore}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { query } from '@/api/api'
  import { yearMonthDay } from '@/utils/index'

  export default {
    data() {
      return {
        list:[],
        currentPage:1,
        totalPage:null,
        pageSize:10,
        loadingShow:false,
        isMore:'',
      }
    },
    props: {
      url:{},
      type:{}
    },
    watch: {
      type(val) {
        this.getList(1)
      }
    },
    mounted() {
      this.onScroll()
    },
    methods: {

      getList(page) {
        query({
          size:this.pageSize,
          page: page,
          type: this.type,
        }).then((res) => {
          if(res.data.code == '200') {
            this.list = this.list.concat(res.data.data.rows)
            this.totalPage = Math.ceil((res.data.data.count) / this.pageSize)
            this.list.map((item) => {
              item.createTime = yearMonthDay(item.createTime)
              if(item.img) {
                item.img = 'http://47.96.151.153:9000/' + item.img
              }else {
                item.img = '/static/image/default.png'
              }
            })

            
            if(this.totalPage == 1 || this.totalPage == this.currentPage) {
              this.isMore = '暂无更多数据'
            }else {
              // this.isMore = '上拉加载'
            }
          }else {
            alert('请求失败，清重试')
          }
        })
      },
      getScrollTop(){
      　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
      　　if(document.body){
      　　　　bodyScrollTop = document.body.scrollTop;
      　　}
      　　if(document.documentElement){
      　　　　documentScrollTop = document.documentElement.scrollTop;
      　　}
      　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
      　　return scrollTop;
      },
      getScrollHeight(){
      　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
      　　if(document.body){
      　　　　bodyScrollHeight = document.body.scrollHeight;
      　　}
      　　if(document.documentElement){
      　　　　documentScrollHeight = document.documentElement.scrollHeight;
      　　}
      　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
      　　return scrollHeight
      },
      getWindowHeight(){
      　　var windowHeight = 0;
      　　if(document.compatMode == "CSS1Compat"){
      　　　　windowHeight = document.documentElement.clientHeight;
      　　}else{
      　　　　windowHeight = document.body.clientHeight;
      　　}
      　　return windowHeight
      },
      onScroll() {
        window.onscroll = (() => {
          if(this.getScrollTop() + this.getWindowHeight() >= this.getScrollHeight() - 200){
            if(this.currentPage < this.totalPage) {
              this.currentPage++
              this.isMore = '加载中...'
              this.getList(this.currentPage)
            }
            
          }
        })
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/mixin.less";
  @import "~common/less/variable.less";

  .content {
    li a{
      display: flex;
      .vh(margin-bottom,40);
      .img-wrap {
        .vw(width,240);
        .vh(height,180);
        img {
          width:100%;
          .vh(height,180)
        }
      }
      .d-info {
        flex:1;
        min-width:0;
        color:@color1;
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
  .loading {
      color:@color2;
      text-align: center;
      font-size:12px;
      padding:20px 0;
    }
</style>
