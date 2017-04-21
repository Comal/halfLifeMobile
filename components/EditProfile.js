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
import ACTIONS from '../actions/Actions.js'
import STORE from './../store'


var EditProfile = React.createClass({
	getInitialState: function(){
		return {
			profiles: this.props.profiles,
			userID: this.props.currentProfile.userID,
			profileName: this.props.currentProfile.profileName,
			weight: this.props.currentProfile.weight,
			drugName: this.props.currentProfile.drugName,
			prophyDosage: this.props.currentProfile.prophyDosage,
			treatmentDosage: this.props.currentProfile.treatmentDosage,
			halfLife: this.props.currentProfile.halfLife
		}
	},

	handleSubmitForm: function(){
		var profile = {
			userID: this.state.userID,
			profileName: this.state.profileName,
			weight: this.state.weight,
			drugName: this.state.drugName,
			prophyDosage: this.state.prophyDosage,
			treatmentDosage: this.state.treatmentDosage,
			halfLife: this.state.halfLife
		}
		ACTIONS.updateExistingProfile(this.props.currentProfile._id, profile).then( () => {
			ACTIONS.redirectTo("/")
		})

	},
	
	render: function(){
    	return (
    		<KeyboardAvoidingView>
	    		<View>
		    		<TextInput 
		    			placeholder="profile name"
		    			placeholderTextColor="#3d6098"
		    			style={styles.input}
		    			value={this.state.profileName}
		    			onChangeText={(profileName) => this.setState({profileName})}
				 	/>
				 	<TextInput
				 		placeholder="weight in lbs"
				 		placeholderTextColor="#3d6098"
				 		style={styles.input}
		    			value={this.state.weight.toString()}
				 		onChangeText={(weight) => this.setState({weight})}
				 	/>

				 	<TextInput
				 		placeholder="medication"
				 		placeholderTextColor="#3d6098"
				 		style={styles.input}
		    			value={this.state.drugName}
				 		onChangeText={(drugName) => this.setState({drugName})}
				 	/>
				 	
				 	<TextInput
				 		placeholder="prophylaxis dosage in units"
				 		placeholderTextColor="#3d6098"
				 		style={styles.input}
		    			value={this.state.prophyDosage.toString()}
				 		onChangeText={(prophyDosage) => this.setState({prophyDosage})}
				 	/>
				 	<TextInput
				 		placeholder="treatment dosage in units"
				 		placeholderTextColor="#3d6098"
				 		style={styles.input}
		    			value={this.state.treatmentDosage.toString()}
				 		onChangeText={(treatmentDosage) => this.setState({treatmentDosage})}
				 	/>
				 	<TextInput
				 		placeholder="half-life in hours"
				 		placeholderTextColor="#3d6098"
				 		style={styles.input}
		    			value={this.state.halfLife.toString()}
				 		onChangeText={(halfLife) => this.setState({halfLife})}
				 	/>
				 
				<TouchableOpacity 
					onPress={this.handleSubmitForm} 
					style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Update Profile</Text>
				</TouchableOpacity>
	    	</View>
    	</KeyboardAvoidingView>)
  	}

})

export default EditProfile