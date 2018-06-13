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
import MachineDetails from './Pages/MachineDetails'
import addAnimal from './Pages/AddAnimal'

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
})

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const AnimalStack= createStackNavigator({
  Home:HomeScreen,
  Login:loginForm,
  SignUp:signUp,
  Animals:animals,
  add:addAnimal
},{
  initialRouteName:'Animals'
}
)

const userProfileStack= createStackNavigator({
  Home:userProfile,
})

const machineDetailsStack= createStackNavigator({
  machineDetails:MachineDetails
})

const settingsStack= createStackNavigator({
  Home:settings,
})

export default createBottomTabNavigator(
  {
    'User Profile' : userProfileStack,
    Animals: AnimalStack ,
    Settings: settingsStack,
    'Live Stats':machineDetailsStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        switch(routeName){
          case 'Animals':
            iconName = `ios-bug${focused ? '' : '-outline'}`;
            break;
          case 'User Profile':
            iconName = `ios-man${focused ? '' : '-outline'}`;
            break;
          case 'Settings':
            iconName = `ios-settings${focused ? '' : '-outline'}`;
            break;
          case 'Live Stats':
          iconName = `ios-stats${focused ? '' : '-outline'}`;
          break;
        }

       
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


