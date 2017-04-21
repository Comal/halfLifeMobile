import React from 'react';
import {AppRegistry,
  		StyleSheet,
  		Text,
  		TextInput,
  		View,
  		TouchableOpacity,
  		KeyboardAvoidingView
		} from 'react-native'
import {Link} from 'react-router-native'
import styles from './../styles'
import ACTIONS from '../actions/Actions.js'
import STORE from './../store'
import ProfileSelection from './ProfileSelection'

var AllProfiles = React.createClass({
	componentWillMount: function(){
		ACTIONS.fetchAllProfiles()
	},
	getInitialState: function(){
		return {
			profiles: this.props.profiles
		}
	},
	
	render: function(){
    	return (
    		<View style={{flex: 1, justifyContent: 'center'}}>
    			<View> 
					{this.props.profiles.map( (profile) => {
						return (
							<ProfileSelection key={profile._id} profile={profile} />
						)
					})}
				</View>
				<Link 
					to="/profiles/new">
					<Text style={styles.linkText}>Create New Profile</Text>
				</Link>
    		</View>
    	)
  	}
})

export default AllProfiles