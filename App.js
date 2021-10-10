//"react-native-web": "~0.13.12",使用这个版本

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DetailsScreen from './component/navigator'
// import BottomScreen from './component/BottomScreen'
const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button title="跳转到抽屉导航" onPress={() => navigation.navigate('Details')} />
    <Button title="跳转到底部导航" onPress={() => navigation.navigate('Bottom')} />
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Details: {
    screen: DetailsScreen,
  },
  // Bottom: {
  //     screen: BottomScreen
  // }
});

export default RootNavigator;