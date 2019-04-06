<template>
	<div>
		  <swiper :options="swiperOption" ref="mySwiper">
		    <swiper-slide 
		    	v-for="(item, index) in swiperSlides" 
		    	:key="index"
		    >
		    	<component :is="item.component"></component>
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
		props:{
			sendIndex:Number
		},
		data () {
			return {
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					}
				},
				swiperSlides: [
					{component:TodayNews},
					{component:PopNews},
					{component:PopColumn},
					{component:PastNews}
				]
			}
		},
		computed: {
			swiper() {
			    return this.$refs.mySwiper.swiper
			}
		},
		watch: {
			sendIndex(val){
				console.log(this.$refs.mySwiper.swiper)
				this.$refs.mySwiper.swiper.slideTo(val,100,false)
			}
		},
		mounted () {
			console.log('this is current swiper instance object', this.swiper)
		}
	}
</script>