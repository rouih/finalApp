import React from 'react';
import {  StyleSheet,TouchableOpacity,Image,Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import logodes from '../Components/Logo';
import Loogo from '../Components/Logo';

export default class Animals extends React.Component {
    static navigationOptions = {
      headerStyle: {
        backgroundColor: '#00838f',
      },
      title: "Your Animals",
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
          <View style={styles.Images}>
          <Image
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
          style={styles.v1}
        />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.v1}>Login</Text>
          </TouchableOpacity>
          </View>
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
    Images:{
      flexDirection: 'row'
    },
    v1: {
      flex:2,
      backgroundColor:'red',
      padding:10, 
      height: 140, 
      width: 200 
  },
    v2: {
        flex:1,
        backgroundColor:'green',
        padding:10
    },
    v3: {
        flex:1,
        backgroundColor:'black',
        padding:10
    },
  });

 
  