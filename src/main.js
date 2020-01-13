import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Router from 'vue-router'
import VueLazyLoad from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import toast from 'components/common/Toast'
import FastClick from 'fastclick'
import 'swiper/dist/css/swiper.css'
import 'normalize.css'
import './assets/css/style.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
//事件总线
Vue.prototype.$bus = new Vue()
//使用Toast插件
Vue.use(toast)
//移动端300ms
FastClick.attach(document.body)
//导入懒加载插件
Vue.use(VueLazyLoad)
//
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
