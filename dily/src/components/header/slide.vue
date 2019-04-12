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
					},
					autoHeight:true,
					lazy:true
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
			},
			currentIndex () {
				return this.$refs.mySwiper.swiper.activeIndex
			}
		},
		watch: {
			sendIndex(newV,oldV){
				this.$refs.mySwiper.swiper.slideTo(newV,100,false)
				console.log(this.currentIndex)
				console.log(this.sendIndex)
			},
			currentIndex(newV,oldV){
				this.sendIndex = newV
			}
		},
		mounted () {
			this.$refs.mySwiper.swiper.update()
		}
	}
</script>

<style lang="stylus" scoped>

</style>