import STORE from './../store'
import User from './../models/UserModel'
import Backbone from 'backbone'
import {Alert} from 'react-native'
var domain = "https://awo-halflifefinal.herokuapp.com"


var ACTIONS = {
	fetchAllProfiles: function(){
		fetch(domain + "/api/profiles?userID=" + STORE.data.currentUser._id)
		.then( (response) => response.json())
		.then( (profiles) => {
			STORE.set({
				profiles: profiles
			})
		})
	},
	selectProfile: function(profile){
		return STORE.set({
			currentProfile: profile
		})
	},
	refreshProfile: function(profile){
		fetch(domain + "/api/profiles/" + profile._id + "?userID=" + STORE.data.currentUser._id)
		.then( (response) => response.json())
		.then( (profile) => {
			STORE.set({
				currentProfile: profile
			})
		})
	},
	redirectTo: function(newPath){
		STORE.set({
			redirectTo: newPath
		})
	},
	clearRedirection: function(){
		STORE.set({
			redirectTo: false
		})
	},
	createNewProfile: function(profileData){
		return fetch(domain + "/api/profiles",{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(profileData)
		})
		.then( (response) => {
			if (response.ok) {
				ACTIONS.fetchAllProfiles()
				response.json().then( (newProfile) => {
					ACTIONS.refreshProfile(newProfile)
				})
			} else {
				response.text().then( (error) => {
					Alert.alert("Could not create profile", error)
				})
			}
		})
	},
	deleteLoggedDose: function(loggedDose){
		var currentProfile = STORE.data.currentProfile
		var id = currentProfile._id

		// remote the loggedDose
		currentProfile.dosageLog = currentProfile.dosageLog.filter( (logDose) => {
			return (logDose._id !== loggedDose._id)
		})

		return ACTIONS.updateExistingProfile(id, currentProfile)
	},
	updateExistingProfile: function(id, profileData){
		return fetch(domain + "/api/profiles/" + id, {
			method: "PUT",
			headers: {
				"content-Type": "application/json"
			},
			body: JSON.stringify(profileData)
		})
		.then( (response) => {
			if (response.ok) {
				ACTIONS.fetchAllProfiles()
				ACTIONS.refreshProfile(STORE.data.currentProfile)
			} else {
				response.text().then( (error) => {
					Alert.alert("Could not update profile", error)
				})
			}
		})
	},

	registerUser(formData){
		User.register(formData)
			.done(
				function(response){
					console.log('user registered', response)
					Alert.alert(`new user registered!`)
					ACTIONS.loginUser(formData.email, formData.password)
				}
			)
	},
	loginUser: function(email,password){
		return User.login(email,password)
	},
	logoutUser: function(){
		return User.logout()
	},
	createNewLogDose: function(logDose){
		var currentProfile = STORE.data.currentProfile
		currentProfile.dosageLog.push(logDose)
		return fetch(domain + "/api/profiles/" + currentProfile._id,{
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(currentProfile)
		})
		.then( (response) => {
			if (response.ok) {
				ACTIONS.refreshProfile(currentProfile)
				Alert.alert(`success!`)
			} else {
				response.text().then( (error) => {
					Alert.alert("Could not update profile", error)
				})
			}
		})
	}
}
export default ACTIONS