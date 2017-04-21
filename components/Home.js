import React from 'react';
import {AppRegistry,
  		StyleSheet,
  		Text,
  		TextInput,
  		View,
  		TouchableOpacity,
  		KeyboardAvoidingView
		} from 'react-native'
import styles from './../styles'
import STORE from './../store'
import Dude from './Dude'

var Home = React.createClass({
	calculateFactorLevelForSpecificDose: function(dose, numberOfHoursAgo, halfLifeInHours, weight){
		var currentDose = dose * Math.pow(.5, (numberOfHoursAgo / halfLifeInHours));
		var fullDose = (weight / 4.4) * 100
		var percentage = (currentDose / fullDose) * 100
		if (percentage > 0){
			return Math.round(percentage,0)
		} else {
			return 0
		}
	},

	calculateFactorLevel: function(){
		var totalLevel = 0
		this.props.currentProfile.dosageLog.forEach( (loggedDose) => {
			var dose = loggedDose.dose
			var now = new Date()
			var then = new Date(loggedDose.givenAt)
			var numberOfHoursAgo = (now - then) / 1000 / 60 / 60
			var halfLifeInHours = this.props.currentProfile.halfLife
			var weight = this.props.currentProfile.weight

			var thisLevel = this.calculateFactorLevelForSpecificDose(dose, numberOfHoursAgo, halfLifeInHours, weight)
			console.log(dose, numberOfHoursAgo, halfLifeInHours, weight)

			totalLevel = totalLevel + thisLevel
		})
		return totalLevel
	},

	render: function(){
		var percentage = this.calculateFactorLevel()
		return (
			<View>
				<Dude percentage={percentage} profileName={this.props.currentProfile.profileName} />
			</View>				
		)
	}
})

export default Home