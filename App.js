import React from 'react';

import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';


import HomeScreen from './HomeScreen';
import EventListScreen from './EventListScreen';
import EventDetailsScreen from './EventDetailsScreen';


const Stack = createNativeStackNavigator();


export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Events"
          component={EventListScreen}
        />

        <Stack.Screen
          name="EventDetails"
          component={EventDetailsScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );

}