import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native'
import Profile from './components/Profile'
import Calendar from './components/Calendar'
import Log from './components/Log'
import About from './components/About'
import styles from './styles'

class Home extends Component {
  render(){
    return <Text style={styles.header}>Home</Text>
  }
}

export default class halfLifeMobile extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}>
          <Link
           to="/"
           underlayColor='#f0f4f7'
           style={styles.navItem}>
             <Text>Home</Text>
         </Link>
         <Link
           to="/calendar"
           underlayColor='#f0f4f7'
           style={styles.navItem} >
             <Text>Calendar</Text>
         </Link>
         <Link
           to="/log"
           underlayColor='#f0f4f7'
           style={styles.navItem} >
             <Text>Log</Text>
         </Link>
         <Link
           to="/profile"
           underlayColor='#f0f4f7'
           style={styles.navItem} >
             <Text>Profile</Text>
         </Link>
         <Link
           to="/about"
           underlayColor='#f0f4f7'
           style={styles.navItem}>
             <Text>About</Text>
         </Link>
         
          </View>

          <Route exact path="/" component={Home}/>
          <Route path="/calendar" component={Calendar}/>
          <Route path="/log" component={Log}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/about" component={About}/>
          

        </View>

      </NativeRouter>
    );
  }
}



AppRegistry.registerComponent('halfLifeMobile', () => halfLifeMobile);


