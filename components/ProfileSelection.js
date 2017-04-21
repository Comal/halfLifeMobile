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


var ProfileSelection = React.createClass({
	handleProfileSelection: function(){
		ACTIONS.selectProfile(this.props.profile)
		ACTIONS.redirectTo("/")	
	},
	
	render: function(){
		return (
			<TouchableOpacity 
				onPress={this.handleProfileSelection} 
				style={styles.buttonContainer}>
					<Text key={this.props.profile._id} style={styles.buttonText}>{this.props.profile.profileName}</Text>
			</TouchableOpacity>
	)
	}
})

export default ProfileSelection