// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import Axios from 'axios'
import iView from 'iview'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import BScroll from 'better-scroll'
import store from './store'
import 'iview/dist/styles/iview.css'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'


Vue.prototype.$axios = Axios
// 配置跨域

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(iView)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data: {
  	eventHub: new Vue()
  }
})
