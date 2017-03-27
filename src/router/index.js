import Vue from 'vue'
import Router from 'vue-router'

// import view
import Hello from '@/components/Hello'
import Home from '@/view/Home'
import MutliTable from '@/view/MutliTable'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: 'mutliTable',
        name: 'MutliTable',
        component: MutliTable
      }]
    }
  ]
})
