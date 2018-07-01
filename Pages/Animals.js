import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator,StyleSheet,Image } from "react-native";
import { List, ListItem, SearchBar, Button } from "react-native-elements";
import { createStackNavigator } from 'react-navigation';
import login from '../Pages/Login'
import addAnimal from '../Pages/AddAnimal'

var flatListData = [
  {
      "key": "598a678278fee204ee51cd2c",
      "name": "Rexy",   
      "imageUrl": "https://image.ibb.co/ir11jd/dog1.jpg",                    
      "foodDescription": "Eats at: 0900"
  },
  {
    "key": "598a678278fee204ee51cd2c",
    "name": "Katty",   
    "imageUrl": "https://image.ibb.co/gnxG0J/cat.jpg",                    
    "foodDescription": "Eats at: 1900"
},

];

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
                data={flatListData}
                renderItem={({item, index})=>{
                    return (
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>);
                }}
                >

            </FlatList>

          <Button title="Add Animal" onPress={() => this.props.navigation.navigate('add')}/>
      </View>
    );
  }
}

class FlatListItem extends Component {
  render() {          
      return (        
          <View style={{
              flex: 1,
              flexDirection:'column',                                
          }}>            
              <View style={{
                      flex: 1,
                      flexDirection:'row',
                      backgroundColor: '#00838f'
              }}>            
                  <Image 
                      source={{uri: this.props.item.imageUrl}}
                      style={{width: 100, height: 100, margin: 5}}
                  >

                  </Image>
                  <View style={{
                          flex: 1,
                          flexDirection:'column',   
                          height: 100                 
                      }}>            
                          <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                          <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                  </View>              
              </View>
              <View style={{
                  height: 1,
                  backgroundColor:'white'                            
              }}>
          
              </View>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  flatListItem: {
      color: 'white',
      padding: 10,
      fontSize: 16,  
  },
  container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   }
});

