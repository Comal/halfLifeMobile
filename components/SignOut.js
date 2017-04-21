import React, { Component } from 'react';
import {AppRegistry,
		StyleSheet,
		Text,
		TextInput,
		TouchableOpacity,
		View,
		KeyboardAvoidingView
		} from 'react-native';
import styles from './../styles'
import ACTIONS from './../actions/Actions'
import UserModel from './../models/UserModel'
import STORE from './../store'

	var SignOut = React.createClass({
		getInitialState: function(){
      		return {
        		currentUser: this.props.currentUser
      		}
  		},

		handleSignOut: function(){
        	ACTIONS.logoutUser()
		},
		
		render: function(){
    		return ( 
		    		<View style={{flex: 1, justifyContent: 'center'}}>
		    				<TouchableOpacity 
			    				onPress={this.handleSignOut}
			    				style={styles.buttonContainer}>
		    					<Text style={styles.buttonText}>Sign Out</Text>
		    				</TouchableOpacity>
		    		</View>
	    	)
		}
	})

export default SignOut