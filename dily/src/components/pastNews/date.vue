<template>
    <Row>
        <Col span="12">
            <DatePicker 
	            type="date" 
	            placeholder="Select date" 
	            style="width: 200px"
	            confirm
	            :options="option1"
	            @on-change="dateChange"
	            size="small"
            >
            </DatePicker>
        </Col>
    </Row>
</template>

<script>
export default {
	name:"NewsDate",
	data () {
		return {
			option1: {
				disabledDate (date) {
					var initdate = new Date('2013/05/31')
					return (date && date.valueOf() < initdate - 86400000) || (date && date.valueOf() > Date.now() - 86400000);
				}
			}
		}
	},
	mounted () {

	},
	methods:{
		dateChange (date) {
			var str = date
			var pastdate = str.split('-').join("")
			this.$store.dispatch('date',pastdate)
		}
	}
}
</script>

<style lang="stylus" scoped>
	.ivu-row
		position fixed
		left 50%
		transform translateX(-50%)
</style>