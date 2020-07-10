import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export const Recipe = ({recipe}) => {
    return (
        <View style={styles.container}>
          <Text>{recipe.title}</Text>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  