import React, { Component } from 'react';
import {AppRegistry,
		Image,
		StyleSheet,
		Text,
		TextInput,
		TouchableOpacity,
		View,
		KeyboardAvoidingView
		} from 'react-native';
import { Link } from 'react-router-native'
import styles from './../styles'
import ACTIONS from './../actions/Actions'
import UserModel from './../models/UserModel'
import STORE from './../store'

	var Registration = React.createClass({
		getInitialState: function(){
			return {
				email: '',
				password: ''
			}
		},
		handleRegistration: function(){
			var userData = {
				email: this.state.email,
				password: this.state.password
			}
         	ACTIONS.registerUser(userData)
		},
		render: function(){
    		return ( 
	    			<View style={styles.mainContainer}> 
	    			<Image source={ require("./../images/blood.png")} style={styles.mainImage} />
			    		<View style={styles.signinContainer}>
				    		<KeyboardAvoidingView behavior="padding" style={styles.container}> 

				    			<Text style={styles.appName}>HalfLife</Text>

			    				<TextInput 
			    					autoCapitalize='none'
			    					autoCorrect={false}
			    					autoFocus={true}
			    					placeholder="email"
			    					placeholderTextColor="#3d6098"
			    					keyboardType="email-address"
			    					style={styles.input}
			    					value={this.state.email}
			    					onChangeText={(email) => this.setState({email})}
			    				/>
			    				<TextInput
			    					placeholder="password"
			    					placeholderTextColor="#3d6098"
			    					secureTextEntry
			    					style={styles.input}
			    					value={this.state.password}
			    					onChangeText={(password) => this.setState({password})}
			    				/>
			    				<TouchableOpacity 
			    					onPress={this.handleRegistration}
			    					style={styles.buttonContainer} >
			    					<Text style={styles.buttonText}>SIGN UP</Text>
			    				</TouchableOpacity>
			    				<Link
						             to="/"
						             underlayColor='#f0f4f7'
						             style={styles.navItem}>
						               <Text style={styles.linkText}>Log In</Text>
						         </Link>
					    	</KeyboardAvoidingView>
					    </View>
			    	</View>
	    	)
		}
	})

export default Registration