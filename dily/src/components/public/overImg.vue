<template>
	<div>
		<div class="contain">
			<img :src="this.$store.state.overImg" alt="">
			<p>{{this.$store.state.title}}</p>
		</div>
	</div>
</template>

<script>
export default {
	name:"OverImg",
	data () {
		return {
			imgUrl:""
		}
	},
	mounted () {
		this.imgUrl = this.$store.state.overImg
	}
}
</script>

<style lang="stylus" scoped>
img
	width 100%
	margin-top -1.5rem
.contain
	position relative
	height 3.5rem
	overflow hidden
	width 98%
	margin .06rem
	border-radius .05rem
	margin-top .75rem
	p
		position absolute
		width 80%
		left 50%
		transform translateX(-50%)
		top 2.7rem
		font-size .37rem
		color #fff
		text-shadow 1px 1px 2px #535353 
</style>