<template>
	<div>
		  <swiper :options="swiperOption">
		    <swiper-slide 
		    	v-for="(item, index) in swiperSlides" 
		    	:key="index"
		    >
		    	<keep-alive>
		    		<component :is="item.component"></component>
		    	</keep-alive>
		    </swiper-slide>
		  </swiper>
	</div>
</template>

<script>
	import TodayNews from '@/components/news/home'
	import PopNews from '@/components/popular/home'
	import PopColumn from '@/components/column/PopColumn'
	import PastNews from '@/components/pastNews/pastnews'
	export default{
		name:"SlideShow",
		components:{
			TodayNews,
			PopNews,
			PopColumn,
			PastNews
		},
		data () {
			return {
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					}
				},
				swiperSlides: [
					{path:'/todaynews',component:TodayNews},
					{path:'/popnews',component:PopNews},
					{path:'/column',component:PopColumn},
					{path:'/pastnews',component:PastNews}
				]
			}
		},
		computed: {
			swiper() {  
		      return this.$refs.mySwiper.swiper;  
		    } 
		},
		mounted () {
			var mySwiper = swiper('.swiper-container',{
				initialSlide: this.$route.path === '/todaynews' ? 0 : this.$route.path === '/popnews' ? 1 : this.$route.path === '/column' ? 2 : this.$route.path === '/pastnews' ? 3 : 0
			})
			console.log(mySwiper)
		}
	}
</script>