<template>
	<div class="contain">
		<router-link to="/">
		</router-link>
	</div>
</template>

<script>
export default {
	name:"BottomBar"
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