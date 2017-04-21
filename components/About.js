import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './../styles'

var About = React.createClass({
  render: function(){
    return ( 
	    <ScrollView> 
	    	<View>
		    	<Text style={styles.titleText}>Disclaimer</Text> 
		    	<Text style={styles.bodyText}>HalfLife is not designed to and does not provide medical advice, professional diagnosis, opinion, treatment or services to you or to any other individual. The log and half life estimation that HalfLife provides are for general purposes only and are not to be relied on exclusively for the care of an individual. HalfLife is not a substitute for medical or professional care, and you should not use HalfLife in place of a visit, call, consultation, or the advice of your physician or other healthcare provider. HalfLife (and Comal Productions) is not liable or responsible for any course of treatement, diagnosis or any other information you obtain through this app. 
		    	</Text>
		    	<Text style={styles.bodyTextBold}>IF YOU BELIEVE YOU HAVE A MEDICAL EMERGENCY, YOU SHOULD IMMEDIATELY CALL 911 OR YOUR PHYSICIAN.
		    	</Text>
		    	<Text style={styles.bodyText}> If you believe you have any other health problem, or if you have any questions regarding your health or medical condition, you should promptly consult your physican or other healthcare provider. Never disregard medical or professional advice, or delay seeking it, because of HalfLife. Never rely on information in HalfLife in place of seeking professional medical advice. You should also ask your physician or other healthcare provider to assist you in interpreting any information in HalfLife, or in applying the information to your individual case. Reliance on any information with HalfLife is soley at your own risk. Do not rely on HalfLife for the care of the patient.
		    	</Text>
		    </View>
		 </ScrollView>
	   )
	  }
})

export default About