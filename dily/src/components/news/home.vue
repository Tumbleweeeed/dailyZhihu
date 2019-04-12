<template>
	<div class="wrapper">
		<slide-img :sendTop="totalData.top_stories"></slide-img>
		<ul>
			<li class='bar'>今日份</li>
			<router-link 
				tag="li" v-for="(item,indx) of totalData.top_stories" 
				:to="'detail/'+item.id"
			>
				<p>{{item.title}}</p>
				<img :src="item.image" alt="">
				<div class="br"></div>
			</router-link>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
import SlideImg from './slideImg'
export default{
	name:"TodayNews",
	data () {
		return{
			totalData:''
		}
	},
	components:{
		SlideImg
	},
	methods: {
		getData () {
			axios.get("/api/4/news/latest")
				.then(this.showMessage)
		},
		showMessage (res) {
			this.totalData = res.data
		}
	},
	mounted () {
		this.getData()
	},
	computed: {
		pages () {
			const pages = []
			this.totalData.data.stories.forEach((currentValue)=>{
				pages.push(currentValue)
			})
			return pages
		}
	}

}
</script>

<style lang="stylus" scoped>
	ul
		margin-top .05rem
	.wrapper
		background #fff
		color #333
		height 16rem
		margin .06rem
	.bar
		width 98%
		background #0084ff
		border-radius .1rem
		color #fff
		height .5rem
		line-height .15rem
		padding-left .5rem
	li
		overflow hidden
		padding .2rem
		line-height .4rem
		p
			margin-right 1.8rem
			height 1rem
			padding-top .2rem
		img
			width 1.5rem
			margin-top -1rem
			float right
		.br
			width 100%
			height .02rem
			background #0084ff
			margin-top .7rem
</style>