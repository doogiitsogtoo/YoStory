import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

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
firebase.analytics();

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);

