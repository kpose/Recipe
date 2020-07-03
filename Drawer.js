import React from 'react'
//import { Block, Text, Button } from 'expo-ui-kit';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';



//import screens
import Categories from './src/screens/Categories';
import Search from './src/screens/Search';
import Nutrition from './src/screens/Nutrition';
import Home from './src/screens/Home';




const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const Screens = ({navigation}) => {
    return (
        <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.openDrawer()}>
                <Text>Menu</Text>
            </TouchableOpacity>
          ),
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Nutrition" component={Nutrition} />
        <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
    ); 
};


export default () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Screens" component={Screens} />
      </Drawer.Navigator>
    );
};


const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginHorizontal: 20
    }
  });
  
