export default {
	sendImg (state,img) {
		state.overImg = img
	},
	sendTitle (state,txt) {
		state.title = txt
	},
	sendDate (state,date) {
		state.date = date
	},
	sendColumn (state,column) {
		state.column = column
	}
}