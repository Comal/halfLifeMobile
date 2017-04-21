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

	var SignIn = React.createClass({
		getInitialState: function(){
			return {
				email: 'awo@example.com',
				password: '12345678',
				currentUser: this.props.currentUser
			}
		},
		
		handleSignin: function(){
			var email = this.state.email
			var password = this.state.password
        	ACTIONS.loginUser(email,password)
		},
		
		render: function(){
    		return (
    			<KeyboardAvoidingView behavior="padding" style={styles.container}> 
				    <View style={styles.mainContainer}> 
				    	<Image source={ require("./../images/blood.png")} style={styles.mainImage} />
			    		<View style={styles.signinContainer}>
					    		<View style={styles.container}>

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
				    					onPress={this.handleSignin}
				    					style={styles.buttonContainer}>
				    					<Text style={styles.buttonText}>LOGIN</Text>
				    				</TouchableOpacity>

				    				<Link
							            to="/sign-up"
							            underlayColor='#f0f4f7'
							            style={styles.navItem}>
							            <Text style={styles.linkText}>Sign Up</Text>
							        </Link>
							    </View>
			    	</View>
		    	</View>
		    </KeyboardAvoidingView>
	    	)
		}
	})

export default SignIn