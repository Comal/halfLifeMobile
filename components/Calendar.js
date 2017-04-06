import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './../styles';
import Calendar from 'react-calendar';

class ReactCalendar extends Component {
  render(){
    return <Calendar
  				currentMonth={'2017-04-01'}       
  				customStyle={{day: {fontSize: 15, textAlign: 'center'}}}
  				eventDates={['2017-04-01', '2017-04-03', '2017-04-05']}                    
  				showControls={true}               
  				showEventIndicators={true}        
  				startDate={'2017-04-01'}          
  				titleFormat={'MMMM YYYY'}         
  				today={'2017-04-06'}              
  				weekStart={1} 
			/>
  }
}

export default ReactCalendar