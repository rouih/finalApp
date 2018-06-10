import React from 'react';
import {  StyleSheet,TouchableOpacity,Image,Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import logodes from '../Components/Logo';
import Loogo from '../Components/Logo';
import axios from 'axios'


export default class UserProfile extends React.Component {
      static navigationOptions = {
        headerStyle: {
          backgroundColor: '#00838f',
        },
        title: "Your Details",
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        fontWeight: 'bold',
        width:300,
        },
      };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#00838f' }}>
          <Loogo/>
          <Text style={styles.signupButton}>Your Details</Text>
        </View>
        
      );
    }
  }


  const styles = StyleSheet.create({
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500',
        width:70
    },
  });

 
  