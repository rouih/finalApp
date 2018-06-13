import React from 'react';
import {  StyleSheet,TouchableOpacity,Image,Button, View, Text } from 'react-native';
import { createStackNavigator,SafeAreaView } from 'react-navigation';

import Loogo from '../Components/Logo';
import login from '../Pages/Login';
var currentHour= new Date().getHours();

class Home extends React.Component {
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
      constructor(props){
        super(props)
        this.state = {
          userInfo : null
        }
      }
    render() {
     
      const { navigation } = this.props;
      {!this.state.userInfo ? (<Button title="Login with Facebook"  onPress={() => this.props.navigation.navigate('Login')}/>): (this._rednderUserInfo())}
      const userInfo = navigation.getParam('userInfo', 'Not Logged In!');
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
_rednderUserInfo = () => {
  return(
    <View style={{alignItems: 'center'}}>
      <Image 
        source = {{uri: this.state.userInfo.picture.data.url}}
        style = {{width:100 , height:100,borderRadius:50}}/>
        <Text style={{fontSize:20}}>{this.state.userInfo.name}</Text>
        <Text style={{fontSize:20}}>ID:{this.state.userInfo.id}</Text>
    </View>
  )
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

  
 
export default Home;