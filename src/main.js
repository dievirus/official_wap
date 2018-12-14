import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import lazyLoad from 'vue-lazyload'
// import 'lib-flexible'

import 'common/less/index.less'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(lazyLoad)



// 解决移动端click事件300ms延迟
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
