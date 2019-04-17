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
		data () {
			return {
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					},
					autoHeight:true,
					lazy:true,
					on : {
						slideChange: this.sendIndex
					},
					observer: true,
					observeParents: true
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
			index () {
				return this.$store.state.currentIndex
			}
		},
		watch: {
			index(newV,oldV) {
				this.$refs.mySwiper.swiper.slideTo(newV,100,false)
			}
		},
		mounted () {
			// this.$refs.mySwiper.swiper.update()
			this.$refs.mySwiper.swiper.slideTo(this.$store.state.currentIndex,100,false)
		},
		methods: {
			sendIndex () {
				this.$store.dispatch('currentindex',this.$refs.mySwiper.swiper.realIndex)
			}
		}
	}
</script>

<style lang="stylus" scoped>

</style>