import React from 'react';
import {AppRegistry,
		Alert,
		DatePickerIOS,
  		StyleSheet,
  		Text,
  		TextInput,
  		View,
  		TouchableOpacity,
  		KeyboardAvoidingView
		} from 'react-native'
import {Redirect} from 'react-router-native'
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import styles from './../styles'
import ACTIONS from '../actions/Actions.js'
import STORE from './../store'


var NewLogDose = React.createClass({
	// componentDidMount: function(){
	// 	ACTIONS.fetchAllProfiles()
	// },
	
	getInitialState: function(){
		return {
			profiles: this.props.profiles,
			userID: this.props.currentUser._id,
			profile: this.props.currentProfile,
			givenAt: new Date(),
			value: ""
		}
	},

	onDateChange: function(givenAt){
		this.setState({givenAt: givenAt})
	},

	handleSubmitForm: function(){
		var logDose = {
			profileID: this.state.profile._id,
			dose: this.state.dose,
			givenAt: this.state.givenAt
		}
		if (logDose.dose > 0){
			ACTIONS.createNewLogDose(logDose).then( () => {
				ACTIONS.redirectTo("/")
			})
		}
	},

	handleSegmentSelection(theSelection){
		if (theSelection === 'Prophy'){
			this.setState({
				dose: this.state.profile.prophyDosage,
				selectedDoseSize: theSelection
			})

		} else if (theSelection === 'Treatment'){
			this.setState({
				dose: this.state.profile.treatmentDosage,
				selectedDoseSize: theSelection
			})
		}

	},
	render: function(){
    	var options = [
	      'Prophy',
	      'Treatment',
	    ]
    	return (
    		<View>
    			{this.state.dose > 0 && 
	    			<Text style={styles.logDoseTitle}>Selected Dose: {this.state.dose}</Text>
    			}
			      <View>
			        <SegmentedControls
			          options={ options }
			          onSelection={ this.handleSegmentSelection }
			          selectedOption={ this.state.selectedDoseSize }
			        />
			      </View>

			 	<DatePickerIOS
		          date={this.state.givenAt}
		          mode="datetime"
		          onDateChange={this.onDateChange}
		        />
			 
			<TouchableOpacity 
				onPress={this.handleSubmitForm} 
				style={styles.buttonContainer}>
				<Text style={styles.buttonText}>Record Dose Given</Text>
			</TouchableOpacity>
    	</View>)
  	}

})

export default NewLogDose