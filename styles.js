import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import url('https://fonts.googleapis.com/css?family=Francois+One');

var styles = StyleSheet.create({
	appName: {
    fontFamily: 'AvenirNextCondensed-BoldItalic',
    fontSize: 60,
    textAlign: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
	bodyText: {
      fontFamily: 'AvenirNextCondensed-Medium',
  	},
  	bodyTextBold: {
      fontFamily: 'AvenirNextCondensed-Medium',
  		fontWeight: 'bold',
  	},
  	button: {
    	alignSelf: 'stretch',
    	backgroundColor: '#01b7fe',
    	borderColor: '#01b7fe',
    	borderRadius: 8,
    	borderWidth: 1,
    	height: 36,
    	justifyContent: 'center',
    	marginBottom: 10,
  	},
  	buttonContainer: {
  		backgroundColor: '#01b7fe',
  		paddingVertical: 15,
      marginVertical: 15
  	},
  	buttonText: {
      fontFamily: 'AvenirNextCondensed-Medium',
  		alignSelf: 'center',
  		color: 'white',
  		fontSize: 18,
  		fontWeight: '700',
  		textAlign: 'center',
  	},
  	container: {
  		flex: 1,
  	},
    formDivider: {
      height: 50,
    },
  	header: {
      fontFamily: 'AvenirNextCondensed-Medium',
    	fontSize: 20,
      backgroundColor: 'transparent'
  	},
  	input: {
      fontFamily: 'AvenirNextCondensed-MediumItalic',
  		backgroundColor: '#e7e7e7',
  		height: 40,
  		marginBottom: 10,
  		paddingHorizontal: 10,
  	},
    linkText: {
      fontFamily: 'AvenirNextCondensed-Medium',
      alignSelf: 'center',
      color: '#213159',
      fontSize: 18,
      fontWeight: '700',
      textAlign: 'center',
    },
    logDoseTitle: {
      fontFamily: 'AvenirNextCondensed-DemiBold',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
    loggedDose: {
      fontFamily: 'AvenirNextCondensed-DemiBold'
    },
    loggedDoseRow: {
      flexDirection: 'row',
      marginTop: 15,
      paddingBottom: 5,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderBottomColor: 'grey'
    },
    mainImage: {
      flex: 2,
      height: 250,
      width: 250,
      marginTop: 20,
      alignSelf: 'center'
    },
  	mainContainer: {
  		backgroundColor: 'white',
  		flex: 1,
  		justifyContent: 'center',
	    paddingTop: 15,
      padding: 20
  	},
  	nav: {
    	flexDirection: 'row',
    	justifyContent: 'space-around',
      alignItems: 'center',
      height: 70
  	},
    navImage: {
      height: 30,
      width: 30,
    },
    navImagePercent: {
      height: 65,
      width: 65,
    },
  	navItem: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    	alignItems: 'center',
    	flex: 1,
  	},
  	routes: {
  		flex: 1,

  	},
    signinContainer: {
      flex: 2
    },
  	subNavItem: {
    	padding: 5,
  	},
  	title: {
      fontFamily: 'AvenirNextCondensed-Medium',
  		alignSelf: 'center',
  		fontSize: 30,
  		marginBottom: 30,
  	},
  	titleText: {
      fontFamily: 'AvenirNextCondensed-Medium',
      textAlign: 'center',
  		fontSize: 20,
  		fontWeight: 'bold',
  	},
    topic: {
      fontSize: 15,
      textAlign: 'center',
  	}, 
    topNav: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 20
    },
    trashcan: {
      width: 24,
      height: 30,
    },


    dudeContainer: {
      position: 'relative'
    }
  

})

export default styles