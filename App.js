import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';

import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import HomeScreen from './screens/HomeScreen';
import MessageScreen from './screens/MessageScreen';
import NotificationScreen from './screens/NotificationScreen';
import PostScreen from './screens/PostScreen';
import ProfileScreen from './screens/ProfileScreen';

import firebase from 'firebase/app'
import "firebase/analytics"
import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyDVM93QHM--t3KUid2KzwBnVPs_JApD-k8",
  authDomain: "example-eea6d.firebaseapp.com",
  databaseURL: "https://example-eea6d.firebaseio.com",
  projectId: "example-eea6d",
  storageBucket: "example-eea6d.appspot.com",
  messagingSenderId: "455216573843",
  appId: "1:455216573843:web:7591f8226a4bf7284b8c66",
  measurementId: "G-4WFLRWYDDY"
};

firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator(
  {
    Нүүр: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcons: ({ tintColor }) => <Ionicons name="ios-home" style={require("../YoStory/assets/home_icon.png")} size={24} color={tintColor}/>
      }
    },
    Мессеж: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcons: ({ tintColor }) => <Ionicons name="ios-chatboxes" size={24} color={tintColor}/>
      }
    },
    Захидал: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcons: ({ tintColor }) => 
        <Ionicons 
          name="ios-add-circle" 
          size={48} 
          color="#E9446A" 
          style={{
            shadowColor: "#E9446A",
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 10, 
            shadowOpacity: 0.3 
          }}
        />
      }
    },
    Мэдэгдэл: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcons: ({ tintColor }) => <Ionicons name="ios-notification" size={24} color={tintColor}/>
      }
    },
    Профайл: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcons: ({ tintColor }) => <Ionicons name="ios-person" size={24} color={tintColor}/>
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#161F3D",
      inactiveTintColor: "#B8BBC4",
      showLabel: false
    }
  }
)

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);

