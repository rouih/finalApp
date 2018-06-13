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
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
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
    justifyContent:'center'
  }
});


