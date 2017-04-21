import Backbone from 'backbone'
	
var STORE = Object.assign({},Backbone.Events,{
	data: {
		currentUser: null,
		currentProfile: null,
		profiles: [],
		redirectTo: false
	},

	set: function(obj){
		this.data = Object.assign(this.data,obj)
		this.trigger('dataUpdated')
	},

	setWithoutTrigger: function(obj){
		this.data = Object.assign(this.data,obj)
	}
})
export default STORE