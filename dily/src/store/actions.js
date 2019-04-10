export default {
	overImg (ctx,img) {
		ctx.commit('sendImg',img)
	},
	title (ctx,txt) {
		ctx.commit('sendTitle',txt)
	},
	date (ctx,date) {
		ctx.commit('sendDate',date)
	},
	column (ctx,column) {
		ctx.commit('sendColumn',column)
	}
}