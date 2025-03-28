import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/pages';
import Home from './src/pages/Home';


const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <MainStack />
  </NavigationContainer>
);

export default App;
