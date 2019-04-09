export default {
	overImg (ctx,img) {
		ctx.commit('sendImg',img)
	},
	title (ctx,txt) {
		ctx.commit('sendTitle',txt)
	}
}