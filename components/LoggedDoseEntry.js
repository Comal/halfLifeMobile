import React from 'react';
import {Alert,
		AppRegistry,
		Image,
		KeyboardAvoidingView,
  		StyleSheet,
  		Text,
  		TextInput,
  		TouchableOpacity,
  		View,
		} from 'react-native'
import {Link} from 'react-router-native'
import styles from './../styles'
import ACTIONS from '../actions/Actions.js'
import STORE from './../store'
import moment from 'moment'


var LogDose = React.createClass({
	deleteEntry: function(){

    Alert.alert(
      'Are you sure?',
      '',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => ACTIONS.deleteLoggedDose(this.props.loggedDose)   },
      ],
      { cancelable: false }
    )
	},
	
	render: function(){

    var givenAt = this.props.loggedDose.givenAt
    var formattedGivenAt = moment(givenAt).format('dddd MMM Do YYYY h:mm a')
    	return (
		<View style={styles.loggedDoseRow}>
			<Text style={styles.loggedDose}>{this.props.loggedDose.dose}</Text>
			<Text style={styles.loggedDose}>{formattedGivenAt}</Text>
    		<TouchableOpacity onPress={this.deleteEntry}> 
    			<Image source={ require("./../images/trash.png")} 
    			 style={styles.trashcan} 
    			 />
    		</TouchableOpacity>
    	</View>)
  	}

})

export default LogDose