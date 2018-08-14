import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld'
import './components/common/common.styl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
