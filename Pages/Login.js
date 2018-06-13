import React from 'react';
import { TextInput, StyleSheet, Text, View, StatusBar, TouchableOpacity, Button, Alert, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { LoginButton } from 'react-native-fbsdk';
import { Constants, Facebook } from 'expo';


import Form from '../Components/Form';
import DashBoard from '../Pages/Home'
import Settings from  '../Pages/Settings'
import Animals from '../Pages/Animals'
import Logo from '../Components/Logo';
import signUp from '../Pages/SignUp';
import axios from 'axios'

class Login extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#00838f',
    },
    title: "Login",
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
      width: 300,
    },
  };
  constructor(props) {
    super(props)
    this.state = {
      user: ' ',
      password: ' ',
      logged: undefined,
      userInfo: null
    }
  }
  _handleFacebookLogin = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '1436529893159333', // Replace with your own app id in standalone app
        { permissions: ['public_profile'] }
      );

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`);
          const userInfo = await response.json();
          this.setState({ userInfo });
          const pname = userInfo.name
          Alert.alert(
            'Logged in!',
            `Hi ${pname}!`,
          );
          this._rednderUserInfo()
          this.props.navigation.navigate('SignUp', { PrivateName: pname })
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      alert(
        e
      );
    }
  };

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

  render() {
    const { navigation } = this.props;
    return (
      <View style={{
        backgroundColor: '#00838f',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <Logo/>
      
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Email"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
          onChangeText={(text) => { this.setState({ user: text }) }}
        />
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          onChangeText={(text) => { this.setState({ password: text }) }}
          ref={(input) => this.password = input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={this.login.bind(this)}>{this.props.type}Login</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._handleFacebookLogin.bind(this)}>
          <Text>Login with facebook</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }

  login() {
    this.setState({ logged: false })
    axios.get('https://autofeeder.herokuapp.com/login', {
      params: {
        //email
        username: this.state.user,
        password: this.state.password
      }
    }).then((data) => {
      alert("Connected")
      this.setState({ logged: true })
      this.props.navigation.navigate('settings')
    }).catch((error) => {
      alert(error)
    })
  }

}



const styles = StyleSheet.create({
  container : {
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
  },
  signupButton: {
    color:'blue',
    fontSize:12,
    fontWeight:'500',
    width:300,
    alignItems: 'center'
}

});
const LoginStack = createStackNavigator({
  Home: Login,
  SignUp: signUp,
  animals:Animals,
  settings:Settings
})

export default Login;