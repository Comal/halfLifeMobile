import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './../styles';
import Calendar from 'react-native-calendar';

var ReactCalendar = React.createClass({
  render: function(){
  	// var Schedule = () => {
  	// 	var customStyle = {
	  // 		currentDayCircle: {
	  // 			backgroundColor: '#F4F4F4',
	  // 		}
	  // 		hasEventCircle: {
	  // 			backgroundColor: '#3EB7FE',
	  // 		},
	  // 		title: {
	  // 			color: '#E9383B',
	  // 		}
	  // 	}
  	// }
    return <Calendar
  				currentMonth={'2017-04-01'}       
  				eventDates={['2017-04-01', '2017-04-03', '2017-04-05', '2017-04-07']}                    
  				showControls={true}               
  				showEventIndicators={true}        
  				startDate={'2017-04-01'}          
  				titleFormat={'MMMM YYYY'}         
  				today={'2017-04-06'}              
  				weekStart={0}
          
          
			/>
  }
})

export default ReactCalendar