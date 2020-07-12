import React from 'react'
//import {Block, Text } from "expo-ui-kit"
import { StyleSheet, Text, View, Button } from 'react-native';
import Recipes from '../containers/Recipes'

const Categories = ({ style }) => {
  return (
    <View style={styles.container}>
      <Recipes />
    </View>
  )
}

export default Categories;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});