import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import { createStackNavigator } from 'react-navigation';


import axios from 'axios'
import animals from '../Pages/Animals'

export default class Form extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      user:undefined,
      password:undefined,
      logged:undefined
    }
  }

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              onChangeText={(text)=>{this.setState({user:text})}}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              onChangeText={(text)=>{this.setState({password:text})}}
              ref={(input) => this.password = input}
              />  
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Login')}>{this.props.type}Login</Text>
           </TouchableOpacity>  
  		</View>
			)
  }
  /*onPress={this.login().bind(this)}*/
  
  login(nav){
    this.setState({logged:false})
    axios.get('https://autofeeder.herokuapp.com/',{
          params: {
            username: this.state.user,
            password: this.state.password
        }
    }).then((data)=>{
      this.setState({logged:true})
    }).catch((error) =>{
      alert(error)
    })
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#00838f',
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10,
    paddingVertical: 13
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});

const FormStack= createStackNavigator(
  {
  Home:Form,
  Animals:animals
  },
  {
    initialRouteName: 'Home',
  }
)