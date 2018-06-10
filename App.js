// In App.js in a new project

import React from 'react';
import { StyleSheet,View, Text } from 'react-native';
import { createStackNavigator,createBottomTabNavigator, TabBarBottom } from 'react-navigation';


import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import HomeScreen from './Pages/Home';
import loginForm from './Pages/Login';
import signUp from './Pages/SignUp';
import animals from './Pages/Animals';
import settings from './Pages/Settings';
import userProfile from './Pages/UserProfile';
import form from './Components/Form';
 class App extends React.Component {
  render() {
    return (
      
      <View style={styles.container}/>
  
    );
  }
}

const HomeStack=createStackNavigator({
  Home:HomeScreen,
  Login:loginForm,
},
);

const AnimalStack= createStackNavigator({
  Home:animals,
  Login:loginForm,
  SignUp:signUp,
  Form:form
})

const userProfileStack= createStackNavigator({
  Home:userProfile,
})

const settingsStack= createStackNavigator({
  Home:settings,
})

export default createBottomTabNavigator(
  {
    Home:HomeStack,
    Animals: AnimalStack ,
    UserProfile: userProfileStack,
    Settings: settingsStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home')
          iconName = `ios-home${focused ? '' : '-outline'}`;
        if (routeName === 'Animals') 
              iconName = `ios-apps${focused ? '' : '-outline'}`;
        if(routeName === 'UserProfile')
              iconName = `ios-man${focused ? '' : '-outline'}`;
        if(routeName === 'Settings') iconName = `ios-settings${focused ? '' : '-outline'}`;
          
        
        

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'grey',
      inactiveTintColor: 'grey',
      backgroundColor: '#00838f'
    },
  }
);



/*const RootStack= createStackNavigator(
  {
    Home: HomeScreen,
    Login: loginForm,
    Register:signUp
  },
  {
    initialRouteName: 'Home',
  }
);*/
 



const styles = StyleSheet.create({
  container : {
    backgroundColor: '#00838f',
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  }
});


