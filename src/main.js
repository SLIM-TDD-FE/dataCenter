// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iView'
import AppView from './view/App.vue'
import router from './router'

// iView 样式
import 'iview/dist/styles/iview.css'

Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(AppView)
  // template: '<App/>',
  // components: { App }
})
