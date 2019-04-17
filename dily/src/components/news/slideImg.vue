<template>
	<div>
		  <swiper :options="swiperOption" ref="mySwiper">
		    <swiper-slide 
		    	v-for="(item, index) in sendTop" 
		    	:key="index"
		    >
		    	<p>{{item.title}}</p>
		    	<router-link :to="'detail/'+item.id">
		    		<img :src="item.image" alt="">
		    	</router-link>
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
	</div>
</template>

<script>
export default {
	name:"SlideImg",
	props:{
		sendTop:Object
	},
	data () {
		return {
			swiperOption: {
				pagination: {
						el: '.swiper-pagination'
				},
				loop : true,
				autoplay: {
					delay:2000,
					disableOnInteraction: false,
				}
			}
		}
	},
	computed: {
	  swiper() {
	    return this.$refs.mySwiper.swiper;
	  }
	},
	updated() {
	  console.log(this.sendTop);
	  if (this.sendTop.length>1) {
	    console.log(this.swiper);
	    this.swiper.init();
	  }
	},
}
</script>

<style lang="stylus" scoped>
	.swiper-container
		height 4rem
	.swiper-slide
		height 4rem
		img
			width 98%
			margin-top -1.5rem
		p
			position absolute
			width 80%
			left 50%
			transform translateX(-50%)
			top 2.9rem
			font-size .37rem
			color #fff
			text-shadow 1px 1px 2px #535353
			line-height .5rem
	.swiper-pagination-bullets
		margin-left 2rem
		bottom 0
			
</style>