// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawNavigator from './component/DrawerNavigator'
import BottomNavigator from './component/BottomScreen'

import DemoCon from './component/DemoCon';
import AccessibilityInfo from './component/AccessibilityInfo'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={DemoCon} />
        <Stack.Screen name="Detail" component={AccessibilityInfo} />
        {/* <Stack.Screen name="Draw" component={DrawNavigator} /> */}
        {/* <Stack.Screen name="Bottom" component={BottomNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;