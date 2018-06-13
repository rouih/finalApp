import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput,Picker } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Logo from '../Components/Logo';
import Form from '../Components/Form';
import SignupForm from '../Components/SignupForm'
import Login from '../Pages/Login';
import home from '../Pages/Home'
import axios from 'axios'



export default class AddAnimal extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#00838f',
        },
        title: "Add New Animal",
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            fontWeight: 'bold',
            width: 1000,
        },
    };
    constructor(props) {
        super(props)
        this.state = {
            name: ' ',
            time: ' '
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
                    placeholder="Name"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    onChangeText={(text) => { this.setState({ name: text }) }}
                />

                <Picker
                selectedValue={this.state.time}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) => this.setState({time: itemValue})}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Feeding Time"
                    placeholderTextColor="#ffffff"
                    onChangeText={(text) => { this.setState({ time: text }) }}
                />
                <TouchableOpacity style={styles.button} onPress={this.add.bind(this)}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
    add() {
        this.setState({ logged: false })
        axios.post('https://autofeeder.herokuapp.com/signupAnimal', {
            name: this.state.name,
            time: this.state.time,
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







