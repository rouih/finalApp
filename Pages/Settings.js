import React, { Component } from 'react';
import { Text, TouchableOpacity, View,StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { createStackNavigator } from 'react-navigation';
import Login from '../Pages/Login'

export default class Settings extends Component {
  state = {
    isDateTimePickerVisible: false,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleTimePicked = (time) => {
    console.log('A time has been picked: ', time);
    alert("Time Changed")
    this._hideDateTimePicker();
  };
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

  render () {
    
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Choose your feeding time!!</Text>
        <View style={styles.button}>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text style={styles.buttonText}>Press Here</Text>
        </TouchableOpacity>
        </View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleTimePicked}
          onCancel={this._hideDateTimePicker}
          mode="time"
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#00838f',
    flex: 1,
    alignItems:'center',
    justifyContent:'flex-start'
  },
  button: {
    width:500,
    flex:1,
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13,
      justifyContent:'space-around'

  },

  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',
    width:500
  },
  headerText:{
    fontSize:28,
    alignItems:'flex-start',
    justifyContent:'flex-start'
  }
});


