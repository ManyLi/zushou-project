// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

// router.beforeEach((to, from, next) => {
//   console.log('to', to)
//   console.log('from', from)
//   console.log('next', next)
//   if (sessionStorage.getItem('userInfo')) {
//     next()
//   } else {
//     sessionStorage.setItem('userInfo', '123')
//     next({path: '/404'})
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
