import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Button, View, Text, Picker } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import logodes from '../Components/Logo';
import Logo from '../Components/Logo';

export default class MachineDetails extends React.Component {
  static navigationOptions = {

    headerStyle: {
      backgroundColor: '#00838f'
    },
    title: "Live Stats",
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
      width: 1000
    },
  };
  constructor(props) {
    super(props)
    this.state = {
      userInfo: null,
      logged: false,
      machine: ' '
    }
  }
  render() {
    return (
      <View style={{
        backgroundColor: '#00838f',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
        <View style={{
          flex: 0,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

          <Logo style={{
            flex: '2'
          }} />

          <Picker
            selectedValue={this.state.machine}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ machine: itemValue })}>
            <Picker.Item label="Machine1" value="Machine 1" />
          </Picker>
          <Text style={{
            color: 'blue',
            fontSize: 22,
            fontWeight: '500',
            width: 300,

          }}>Your machine state:Online</Text>

          <Text style={{
            color: 'red',
            fontSize: 28,
            fontWeight: '800',
            width: 300,

          }}>Tank:Empty</Text>
        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    width: 70
  },
});


