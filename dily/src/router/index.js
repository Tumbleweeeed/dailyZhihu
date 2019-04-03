import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index'
import TodayNews from '@/components/news/home'
import PopNews from '@/components/popular/home'
import PopColumn from '@/components/column/PopColumn'
import PastNews from '@/components/pastNews/pastnews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/todaynews',
      component: HelloWorld,
      children:[
	    {
	      path: 'todaynews',
	      name: 'TodayNews',
	      component: TodayNews
	    },
	    {
	      path: 'popnews',
	      name: 'PopNews',
	      component: PopNews
	    },
	    {
	      path: 'column',
	      name: 'PopColumn',
	      component: PopColumn
	    },
	    {
	      path: 'pastnews',
	      name: 'PastNews',
	      component: PastNews
	    }   	
      ]
    }
 ]
})
