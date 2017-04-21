import React from 'react';
import {AppRegistry,
  		StyleSheet,
  		Text,
  		TextInput,
  		View,
  		TouchableOpacity,
  		KeyboardAvoidingView
		} from 'react-native'
import { Link } from 'react-router-native'
import styles from './../styles'
import ACTIONS from '../actions/Actions.js'
import STORE from './../store'


var NewProfile = React.createClass({
	getInitialState: function(){
		return {
			profiles: this.props.profiles,
			userID: this.props.currentUser._id
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
		ACTIONS.createNewProfile(profile).then( () => {
			ACTIONS.redirectTo("/")
		})

	},
	
	render: function(){
    	return (
    		<View>
	    		<TextInput 
	    			placeholder="profile name"
	    			placeholderTextColor="#3d6098"
	    			style={styles.input}
	    			autoFocus={true}
	    			onChangeText={(profileName) => this.setState({profileName})}
			 	/>
			 	<TextInput
			 		placeholder="weight in lbs"
			 		placeholderTextColor="#3d6098"
			 		style={styles.input}
			 		onChangeText={(weight) => this.setState({weight})}
			 	/>

			 	<TextInput
			 		placeholder="medication"
			 		placeholderTextColor="#3d6098"
			 		style={styles.input}
			 		onChangeText={(drugName) => this.setState({drugName})}
			 	/>
			 	
			 	<TextInput
			 		placeholder="prophylaxis dosage in units"
			 		placeholderTextColor="#3d6098"
			 		style={styles.input}
			 		onChangeText={(prophyDosage) => this.setState({prophyDosage})}
			 	/>
			 	<TextInput
			 		placeholder="treatment dosage in units"
			 		placeholderTextColor="#3d6098"
			 		style={styles.input}
			 		onChangeText={(treatmentDosage) => this.setState({treatmentDosage})}
			 	/>
			 	<TextInput
			 		placeholder="half-life in hours"
			 		placeholderTextColor="#3d6098"
			 		style={styles.input}
			 		onChangeText={(halfLife) => this.setState({halfLife})}
			 	/>
			 
			<TouchableOpacity 
				onPress={this.handleSubmitForm} 
				style={styles.buttonContainer}>
				<Text style={styles.buttonText}>Create Profile</Text>
			</TouchableOpacity>


				<Link 
					to="/">
					<Text style={styles.linkText}>Cancel</Text>
				</Link>

    	</View>)
  	}

})

export default NewProfile