import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index'
import DetailNews from '@/components/news/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
    	path: '/detail/:id',
    	name: 'DetailNews',
    	component: DetailNews
    }
 ]
})
