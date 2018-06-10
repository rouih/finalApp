import React ,{ Component } from 'react';
import { TextInput,StyleSheet, Text, View, StatusBar,  TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Form from '../Components/Form';
import Logo from '../Components/Logo';
import signUp from '../Pages/SignUp';
import axios from 'axios'

export default class Login extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
          user:undefined,
          password:undefined,
          logged:undefined
        }
      }
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#00838f',
        },
        title: "Login",
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        fontWeight: 'bold',
        width:300,
        },
      };
    render(){
        const { navigation } = this.props;
        return (
            <View styles={styles.container}>
                <Logo/>
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
                    <Text style={styles.buttonText} onPress={this.login().bind(this)}>{this.props.type}Login</Text>
                </TouchableOpacity>  
                <View style={styles.signupTextCont}>
					<Text style={styles.signupText }>Don't have an account yet?</Text>
				    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>
				</View>
           </View>
        )      
    }

    login(){
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
      backgroundColor: '#00838f' ,
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500',
        width:70
    },
    signupTextCont: {
        backgroundColor: '#00838f' ,
        flexGrow: 4,
        alignItems:'center',
        justifyContent:'flex-end',
        marginVertical:16,
    },
    inputBox: {
        width:300,
        backgroundColor:'#00838f',
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

  


  /*
  const styles = StyleSheet.create({
  container : {
    backgroundColor: '#00838f',
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
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
  
}); */


  const LoginStack = createStackNavigator({
      Home:Login,
      SignUp:signUp
  })