import React from 'react'
//import {Block, Text } from "expo-ui-kit"
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ style }) => {
  return (
    <View style={styles.container}>
      <Text >Home...</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
