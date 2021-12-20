import React from 'react';
import {Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'
import DetailsScreen from './Details'

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
