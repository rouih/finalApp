import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import logodes from '../Components/Logo';
import Logo from '../Components/Logo';

export default class MachineDetails extends React.Component {
  static navigationOptions = {

    headerStyle: {
      backgroundColor: '#00838f'
    },
    title: "Live Stats",
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
      width: 1000
    },
  };
  render() {
    return (
      <View style={{
        backgroundColor: '#00838f',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
        <View style={{
          flex: 0,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Logo style={{
            flex:'2'
          }}/>


          <Text style={{
            color: 'blue',
            fontSize: 22,
            fontWeight: '500',
            width: 300,
       
          }}>Your machine state:Online</Text>
          <Text style={{
            color: 'red',
            fontSize: 28,
            fontWeight: '800',
            width: 300,
        
          }}>Tank:Half-Full</Text>
        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    width: 70
  },
});


