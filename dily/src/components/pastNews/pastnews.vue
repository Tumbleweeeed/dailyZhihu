<template>
	<div class="wrapper">
		<news-date></news-date>
		<div class="bar"></div>
		<ul>
			<router-link 
				tag="li" v-for="(item,indx) of newsData.stories" 
				:to="'detail/'+item.id"
			>
				<p>{{item.title}}</p>
				<img :src="item.images" alt="">
				<div class="br"></div>
			</router-link>
		</ul>
	</div>
</template>

<script>
import NewsDate from './date'
import axios from 'axios'
export default{
	name:"PastNews",
	data () {
		return {
			newsData:''
		}
	},
	components: {
		NewsDate
	},
	methods: {
		getData (date) {
			axios.get("/api/4/news/before/"+date)
				.then(this.showData)
		},
		showData (res) {
			this.newsData = res.data
		}
	},
	computed:{
		date () {
			return this.$store.state.date
		}
	},
	watch: {
		date: function(newD,oldD){
			this.getData(newD)
		}
	},
	mounted () {
		this.getData(20190410)
	}
}
</script>

<style lang="stylus" scoped>
	.wrapper
		background #fff
		height 100%
		color #333
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
		margin-top .1rem
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