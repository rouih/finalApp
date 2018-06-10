import React from 'react';
import {  StyleSheet,TouchableOpacity,Image,Button, View, Text } from 'react-native';
import { createStackNavigator,SafeAreaView } from 'react-navigation';

import Loogo from '../Components/Logo';
import login from '../Pages/Login';
var currentHour= new Date().getHours();

export default class Home extends React.Component {
      static navigationOptions = {
        headerStyle: {
          backgroundColor: '#00838f',
        },
        title: "Home",
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        fontWeight: 'bold',
        width:300,
        },
      };
    render() {
      let displayTime;
      if(currentHour<12){
        displayTime="Good Morning,";
      }
      else {
        if (currentHour>=12 && currentHour<16){
          displayTime="Have a nice day,";
        }
        else {
          if (currentHour>=16 && currentHour<19){
            displayTime="Good afternoon,";
        } 
        else displayTime="Good Evening,";
      }
      return (
       
        <View style={{ flex: 1,flexDirection: 'row',backgroundColor: '#00838f' }}>
          <Text>{displayTime} Itay</Text>
          <Text style={styles.signupButton}>Home</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.signupButton}>Login</Text>
          </TouchableOpacity>
        </View>
        
      );
    }
  }
}
  

  const styles = StyleSheet.create({
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500',
        width:70
    },
    container:{
      flexDirection: 'row'
    }
  });


  
 
  