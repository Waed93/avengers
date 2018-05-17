import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Login from './app/components/Login';
import SignUp from './app/components/SignUp';
import Drawer from './app/components/Drawer';

//jozaa comment this 
const Application=  createStackNavigator({
  Home: { screen: SignUp },
  SignUp: { screen: SignUp },
  Login: { screen: SignUp },
  //Profile: { screen: Profile },
  Login:{screen: Login}

},{

    navigationOptions: {
       header: false,
      }

});

export default class App extends React.Component {
  render() {
    return (
       <Application/>
      // if (Jozaa){comment the above + uncomment the down} 
      //<Drawer/>

    );
  }
}

