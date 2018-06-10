import React from 'react';
import { StyleSheet, Text, View, StatusBar,  TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Logo from '../Components/Logo';
import Form from '../Components/Form';
import SignupForm from '../Components/SignupForm'
import Login from '../Pages/Login'


export default class Signup extends React.Component { 
    render(){
        const { navigation } = this.props;
        return (
            <View styles={styles.container}>
                <Logo/>
                <SignupForm/>
                <View style={styles.signupTextCont}>
					<Text style={styles.signupText }>Already Registred?</Text>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
				</View>
           </View>
        )
            
        
    }
}

const styles = StyleSheet.create({
    container : {
      backgroundColor: '#00838f',
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
        flexGrow: 4,
        alignItems:'center',
        justifyContent:'flex-end',
        marginVertical:16,
    }
  });

 
  