import React from 'react';
import {AppRegistry,
  		StyleSheet,
  		Text,
  		TextInput,
  		View,
  		TouchableOpacity,
  		ScrollView,
  		KeyboardAvoidingView
		} from 'react-native'
import {Link} from 'react-router-native'
import styles from './../styles'
import ACTIONS from '../actions/Actions.js'
import STORE from './../store'
import LoggedDoseEntry from './LoggedDoseEntry'

var LogDose = React.createClass({
	getInitialState: function(){
		return {
			profiles: this.props.profiles,
			profile: this.props.currentProfile
		}
	},
	
	render: function(){
    	return (
    		<View>
    		
    			<Link to="/logdose/new">
	    			<View style={styles.buttonContainer}>
		    			<Text style={styles.buttonText}>Log New Dose</Text>
	    			</View>
    			</Link>

    			<Text style={styles.titleText}>{this.props.currentProfile.profileName}'s Log</Text>
			 
				<ScrollView>
					{this.props.currentProfile.dosageLog.map( (dosage) => {
						return <LoggedDoseEntry key={dosage._id} currentProfile={this.props.currentProfile} loggedDose={dosage} />
					})}
				</ScrollView>
    	</View>)
  	}

})

export default LogDose