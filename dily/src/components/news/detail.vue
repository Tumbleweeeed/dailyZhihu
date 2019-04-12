<template>
	<div class="wrapper">
		<bottom-bar></bottom-bar>
		<over-img></over-img>
		<div v-html="this.detailData.data.body">
			{{this.detailData.data.body}}
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import OverImg from '../public/overimg'
import BottomBar from '../public/bottomBar'
export default {
	name: "DeatilNews",
	data () {
		return {
			detailData:''
		}
	},
	components:{
		OverImg,
		BottomBar
	},
	methods: {
		getData () {
			axios.get("/api/4/news/"+this.$route.params.id)
				.then(this.showMessage)
		},
		showMessage (res) {
			this.detailData = res
			this.$store.dispatch('overImg',this.detailData.data.image)
			this.$store.dispatch('title',this.detailData.data.title)
		}
	},
	mounted () {
		this.getData()
	}
}
</script>

<style lang="stylus">
img
	width 100%
.content-image
	width 100%
.url
	display block
	text-overflow ellipsis
	overflow hidden
.wrapper
	width 100%
	height 100%
	top 0
	background #e6e6e6
.content-wrap
	background #f6f6f6
	width 98%
	margin .06rem
	border-radius .05rem
	padding .4rem
.question-title
	font-size .4rem
	line-height 1.4em
	margin .4rem 0
	font-weight 600
.meta
	white-space nowrap
	text-overflow ellipsis
	overflow hidden
	font-size .3rem
	color #b8b8b8
	.avatar
		width .4rem
	.author
		color #444
.content
	margin .4rem 0
	line-height 1.8em
	font-size .3rem
	p
		margin .3rem 0
	h2
		font-size .35rem
		font-weight 700
.view-more
	a
		color #0084ff
</style>