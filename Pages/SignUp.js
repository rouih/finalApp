import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import  {createStackNavigator}  from 'react-navigation';
import Logo from '../Components/Logo';
import Form from '../Components/Form';
import SignupForm from '../Components/SignupForm'
import Login from '../Pages/Login';
import home from '../Pages/Home'
import axios from 'axios'



export default class Signup extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#00838f',
        },
        title: "Sign Up",
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            fontWeight: 'bold',
            width: 300,
        },
    };
    constructor(props) {
        super(props)
        this.state = {
            fullname: ' ',
            password: ' ',
            email:' ',
            logged: undefined,
            userInfo: null
        }
    }
    render() {

        // const { navigation } = this.props;
        // const name = navigation.getParam('PrivateName', 'Not Logged In!');
        return (
            <View style={{
                backgroundColor: '#00838f',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Logo />
                <TextInput style={styles.inputBox}
                    placeholder="Email"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}
                    onChangeText={(text) => { this.setState({ email: text }) }}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Full Name"
                    placeholderTextColor="#ffffff"
                    ref={(input) => this.password = input}
                    onChangeText={(text) => { this.setState({ fullname: text }) }}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    ref={(input) => this.password = input}
                    onChangeText={(text) => { this.setState({ password: text }) }}
                />
                <TouchableOpacity style={styles.button} onPress={this.signUp.bind(this)}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )


    }

    signUp() {
        this.setState({ logged: false })
        axios.post('https://autofeeder.herokuapp.com/signup', {
            email:this.state.email,
            password: this.state.password,
            Fullname: this.state.fullname,

        }
        ).then((data) => {
            alert("Registerd")
            this.setState({ logged: true })
            this.props.navigation.navigate('login')
        }).catch((error) => {
            alert(error)
        })
    }

}





const styles = StyleSheet.create({
    container: {
        backgroundColor: '#455a64',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
        paddingVertical: 13,
        justifyContent: 'flex-start'

    },
    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
});







