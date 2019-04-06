<template>
	<div>
		<ul>
			<router-link 
				tag="li" v-for="(item,indx) of totalData.stories" 
				:to="'detail/'+item.id"
			>
				<p>{{item.title}}</p>
				{{item.id}}
				<img :src="item.images" alt="">
			</router-link>
		</ul>		
	</div>
</template>

<script>
import axios from 'axios'
export default{
	name:"TodayNews",
	data () {
		return{
			totalData:''
		}
	},
	methods: {
		getData () {
			axios.get("/4/news/latest")
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
	div
		background #fff
		height 100%
		background #444
		color white
	li
		overflow hidden
		p
			margin-right 1.8rem
			height 1rem
		img
			width 1.5rem
			margin-top -1rem
			float right
</style>