import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './../styles'

class Log extends Component {
  render(){
    return <Text style={styles.header}>This is the Log</Text>
  }
}

export default Log