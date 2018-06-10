import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image 
} from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class Logo extends React.Component {
	render(){
		return(
      <View style={styles.container}>
      <Image style={{width:100, height: 100}} source={require('../images/logo3.jpg')} />
      </View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    alignItems: 'center',
    backgroundColor: '#00838f'
  },
  logoText : {
  	marginVertical:15,
  	fontSize:28,
  	color:'rgba(255, 255, 255, 0.7)'
  }
});