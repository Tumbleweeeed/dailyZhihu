<template>
	<div class="contain">
		<div class="icon" @click="back"></div>
	</div>
</template>

<script>
export default {
	name:"BottomBar",
	methods: {
		back () {
			this.$router.go(-1)
		}
	}
}
</script>

<style lang="stylus" scoped>
	.contain
		width 100%
		height .7rem
		background #0084ff
		position fixed
		top 0
		z-index 9
		.icon
			width .5rem
			height .5rem
			background #fff
</style>