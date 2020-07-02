import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './Drawer'


export default function App() {
  return (
    <NavigationContainer>
    <Drawer />
      {/* <View style={styles.container}>
        <Text>Open up App.jss to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
