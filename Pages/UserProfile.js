import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Button, View, Text } from 'react-native';
import { createStackNavigator, SafeAreaView } from 'react-navigation';

import Logo from '../Components/Logo';
import login from '../Pages/Login';
var currentHour = new Date().getHours();

export default class UserProfile extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#00838f',
    },
    title: "Your Dashboard",
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
      width: 1000,
    },
  };
  constructor(props) {
    super(props)
    this.state = {
      userInfo: null,
      logged: false
    }
  }
  render() {
    !this.state.logged ? <Button title="Log In" onPress={() => this.props.navigation.navigate('login')}> Hello Friends </Button> : null    // const userInfo = navigation.getParam('userInfo', 'Not Logged In!');
   
    
    let displayTime;
    if (currentHour < 12 && currentHour>=6) {
      displayTime = "Good Morning, Welcome!";
    }
    else {
      if (currentHour >= 12 && currentHour < 16) {
        displayTime = "Have a nice day,Welcome!";
      }
      else {
        if (currentHour >= 16 && currentHour < 19) {
          displayTime = "Good afternoon,Welcome!";
        }
        else displayTime = "Good Evening,Welcome!";
      }
    }
    return (
      <View style={{
        backgroundColor: '#00838f',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo/>
       <Text>{this.state.logged}</Text>
        <Text style={{ fontSize: 22 }}>{displayTime}</Text>
        <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.signupButton}>Login</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

_rednderUserInfo = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={{ uri: this.state.userInfo.picture.data.url }}
        style={{ width: 100, height: 100, borderRadius: 50 }} />
      <Text style={{ fontSize: 20 }}>{this.state.userInfo.name}</Text>
      <Text style={{ fontSize: 20 }}>ID:{this.state.userInfo.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    width: 70
  },
  container: {
    flexDirection: 'row'
  }
});




