<template>
	<div class="wrapper">
		<bottom-bar></bottom-bar>
		<ul>
			<li class='bar'>今日份</li>
			<router-link 
				tag="li" v-for="(item,indx) of totalData.stories" 
				:to="'/detail/'+item.id"
			>
				<p>{{item.title}}</p>
				<img :src="item.images" alt="">
				<div class="br"></div>
			</router-link>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
import BottomBar from '../public/bottomBar'
export default {
	name:"ColumnDetail",
	data () {
		return{
			totalData:''
		}
	},
	components: {
		BottomBar
	},
	methods: {
		getData () {
			axios.get("/api/3/section/"+this.$route.params.id)
				.then(this.showMessage)
		},
		showMessage (res) {
			this.totalData = res.data
			console.log(this.totalData)
		}
	},
	mounted () {
		this.getData()
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
	ul
		margin-top .75rem
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
		.show
			width 1rem 
			height 1rem 
			background black
</style>