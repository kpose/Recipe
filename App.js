import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/Navigator'
import store from './src/redux/store'

import { Provider } from 'react-redux'


export default function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Navigator />
    </NavigationContainer>
    </Provider>
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
