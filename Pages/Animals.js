import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator,StyleSheet } from "react-native";
import { List, ListItem, SearchBar, Button } from "react-native-elements";
import { createStackNavigator } from 'react-navigation';
import login from '../Pages/Login'
import addAnimal from '../Pages/AddAnimal'

const list = [
  {
    title: 'Yossi',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
   // more items
]


export default class Animals extends Component {
  static navigationOptions = {
        
    headerStyle: {
      backgroundColor: '#00838f'
    },
    title: "Your Animals",
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
      width:1000
    },
  };
  render() {
    return (
      <View style={{
        flexDirection: 'row',
        height: "100%",
        backgroundColor: '#00838f'
      }}>
        
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
          <Button title="Add Animal" onPress={() => this.props.navigation.navigate('add')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})