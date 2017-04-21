import Backbone from 'backbone'
import {Alert} from 'react-native'
import STORE from './../store'
import ACTIONS from './../actions/Actions'
var app_name = 'halfLifeMobile'
var domain = 'https://awo-halflifefinal.herokuapp.com'

// ..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
const UserAuthModel = Backbone.Model.extend({
	urlRoot: '/api/users',
	idAttribute: '_id'
})

UserAuthModel.register = function(newUserData) {
	if(typeof newUserData !== 'object') {  throw new Error("User.register needs to be of type object with email & password properties") }
	if(!newUserData.email || !newUserData.password) {  throw new Error("object needs email + password properties") }

	return fetch(domain + '/auth/register', {
		method: 'POST',
		headers: {
			"Content-Type": 'application/json',
			"Accept": 'application/json'
		},
		body: JSON.stringify(newUserData)
	})
	.then( (response) => {
		if (response.ok) {
			response.json().then( function(userData){
				
				
			})		
		} else {
			response.text().then( function(text){
				Alert.alert(text)
			})			
		}
	})
}

UserAuthModel.login = function(email, password) {
	if(!email || !password || email === '' || password === '') {  
		throw new Error("User.login(«email», «password») method needs strings for email, password arguments") 
	}

	if(typeof email !== 'string' || typeof password !== 'string' ) {  
		throw new Error("User.login(«email», «password») email + password arguments should both be strings") 
	}


	return fetch(domain + '/auth/login', {
		method: 'POST',
		headers: {
			"Content-Type": 'application/json',
			"Accept": 'application/json'
		},
		body: JSON.stringify({
			email: email,
			password: password
		})
	})
	.then( (response) => {
		if (response.ok) {
			response.json().then( function(userData){
				STORE.set({
					currentUser: userData
				})	
			})	
		} else {
			response.text().then( function(text){
				Alert.alert(text)
			})			
		}
	})
}

UserAuthModel.logout = function() {
	STORE.set({
				currentUser: null,
				currentProfile: null,
				profiles: []
			})
}

UserAuthModel.getCurrentUser = function() {
	return STORE.data.currentUser
}

// ..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
// ^^ DO NOT TOUCH ^^

// but, you may extend the UserAuthModel Constructor (which is a Backbone Model)
const User = UserAuthModel.extend({
	initialize: function(){

	}
})

export default User