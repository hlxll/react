import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Platform, FlatList } from 'react-native';
import DemoCom from './component/DemoCon.jsx'
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
export default function App() {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <TextInput />
        <Image source={logo} />
      </ScrollView>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}></FlatList>
      <DemoCom></DemoCom>
    </View>
  );
}
const logo = {
  url:'',
  width: 100,
  height: 100
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: Platform.OS==='ios'?'red':'black',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    color: 'red',
    fontSize: 10,
    //select方法，可以系统为key，返回特定样式
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'blue'
      }
    })
  }
});
