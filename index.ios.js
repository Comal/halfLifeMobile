import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { NativeRouter, Route, Link, Redirect } from 'react-router-native'
import AllProfiles from './components/AllProfiles'
import NewProfile from './components/NewProfile'
import EditProfile from './components/EditProfile'
import ReactCalendar from './components/Calendar'
import LogDose from './components/LogDose'
import About from './components/About'
import styles from './styles'
import SignIn from './components/SignIn'
import UserModel from './models/UserModel'
import SignOut from './components/SignOut'
import STORE from './store'
import Registration from './components/Registration'
import NewLogDose from './components/NewLogDose'
import Home from './components/Home'
import ACTIONS from './actions/Actions'


var HalfLifeMobile = React.createClass({
  getInitialState: function(){
      return {
        currentUser: null,
        currentProfile: null,
        profiles: [],
        redirectTo: false
      }
  },

  componentWillMount: function(){
    STORE.on('dataUpdated', () => {
        this.setState({
          currentUser: STORE.data.currentUser,
          currentProfile: STORE.data.currentProfile,
          profiles: STORE.data.profiles,
          redirectTo: STORE.data.redirectTo
        })
      })
  },

  render: function(){
    if (!!!this.state.currentUser){
      return this.renderSignInPage()
    }
    if (!!!this.state.currentProfile){
      return this.renderSelectProfile()
    }
    return this.renderSignedIn()
  },

  renderSignInPage: function(){
    return (
      <NativeRouter>
           <View style={styles.routes}>
              <Route exact path="/" render={() => {
              return <SignIn 
                        currentProfile={this.state.currentProfile} 
                        profiles={this.state.profiles}
                        currentUser={this.state.currentUser}  />
            }}/>
              <Route path="/sign-up" render={() => {
              return <Registration 
                        currentProfile={this.state.currentProfile} 
                        profiles={this.state.profiles}
                        currentUser={this.state.currentUser}  />
            }}/>

             <Route path="/signout" render={() => {
              return <Redirect to={{
                        pathname: "/"
                      }}/>
            }}/>

            </View>
      </NativeRouter>
    )
  },



  renderSelectProfile: function(){
    return (
      <NativeRouter>
        <View style={styles.mainContainer}>
            <View style={styles.topNav}>
            </View>

           <View style={styles.routes}>
              <Route exact path="/" render={() => {
              return <AllProfiles 
                        currentProfile={this.state.currentProfile} 
                        profiles={this.state.profiles}
                        currentUser={this.state.currentUser}  />
            }}/>
              <Route path="/profiles/new" render={() => {
              return <NewProfile 
                        currentProfile={this.state.currentProfile} 
                        profiles={this.state.profiles}
                        currentUser={this.state.currentUser}  />
            }}/>
            </View>

            <View>
            </View>
        </View>
      </NativeRouter>
    )
  },

  renderRedirect: function(){
    ACTIONS.clearRedirection()  

    return (
      <Redirect to={{
          pathname: "/"
        }}/>
    )
  },

  renderSignedIn: function() {

    var whatToRender = null

    if (this.state.redirectTo !== false) {
      whatToRender = this.renderRedirect()
    } else {
      whatToRender = this.renderMainApp()
    }
    return (
      <NativeRouter>
        {whatToRender}
      </NativeRouter>
    )
  },

  renderMainApp: function() {

    return (
      <View style={styles.mainContainer}>
          <View style={styles.topNav}>
            <Link to="/profiles"><Text style={styles.titleText}>{this.state.currentProfile.profileName}</Text></Link>
          </View>
          <View style={styles.routes}>
            <Route exact path="/" render={() => {
              return <Home 
                        currentProfile={this.state.currentProfile} 
                        profiles={this.state.profiles}
                        currentUser={this.state.currentUser}  />
            }}/>
            <Route path="/calendar" render={() => {
              return <ReactCalendar
                        currentProfile={this.state.currentProfile}
                        profiles={this.state.profiles}
                        currentUser={this.state.currentUser} />
            }}/>
            <Route exact path="/profiles" render={() => {
              return <AllProfiles
                        currentProfile={this.state.currentProfile}
                        profiles={this.state.profiles}
                        currentUser={this.state.currentUser} />
            }}/>
            <Route exact path="/profile/edit" render={() => {
              return <EditProfile
                        currentProfile={this.state.currentProfile}
                        profiles={this.state.profiles}
                        currentUser={this.state.currentUser} />
            }}/>
            <Route path="/profiles/new" render={() => {
              return <NewProfile 
                        currentProfile={this.state.currentProfile} 
                        profiles={this.state.profiles}
                        currentUser={this.state.currentUser}  />
             }}/>           
            <Route exact path="/logdose" render={() => {
              return <LogDose 
                        currentProfile={this.state.currentProfile}
                        profiles={this.state.profiles}
                        currentUser={this.state.currentUser} />
            }}/>
            <Route path="/logdose/new" render={() => {
              return <NewLogDose
                        currentProfile={this.state.currentProfile}
                        profiles={this.state.profiles}
                        currentUser={this.state.currentUser} />
            }}/>
            <Route path="/about" render={() => {
              return <About 
                        currentProfile={this.state.currentProfile}
                        profiles={this.state.profiles}
                        currentUser={this.state.currentUser} />
            }}/>
            <Route path="/signout" render={() => {
              return <SignOut
                        currentProfile={this.state.currentProfile}
                        profiles={this.state.profiles}
                        currentUser={this.state.currentUser} />
            }}/>
          </View>


          <View style={styles.nav}>
           <Link
             to="/profile/edit"
             underlayColor='#f0f4f7'
             style={styles.navItem}>
             <Image source={ require("./images/profile.png")} style={styles.navImage} />
           </Link>

           <Link
             to="/logdose"
             underlayColor='#f0f4f7'
             style={styles.navItem}>
              <Image source={ require("./images/log.png")} style={styles.navImage} />
           </Link>

           <Link
             to="/"
             underlayColor='#f0f4f7'
             style={styles.navItem}>
             <Image source={ require("./images/percent.png")} style={styles.navImagePercent} />
           </Link>

           <Link
             to="/about"
             underlayColor='#f0f4f7'
             style={styles.navItem}>
              <Image source={ require("./images/about.png")} style={styles.navImage} />
           </Link>

            <Link
             to="/signout"
             underlayColor='#f0f4f7'
             style={styles.navItem}>
              <Image source={ require("./images/signout.png")} style={styles.navImage} />
           </Link>
          </View>

        </View>
    );
  }
})



AppRegistry.registerComponent('halfLifeMobile', () => HalfLifeMobile);


