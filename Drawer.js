import React from 'react'
//import { Block, Text, Button } from 'expo-ui-kit';
import { StyleSheet, Text, View, Button } from 'react-native';
import Image from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';



//import screens
import Categories from './src/screens/Categories';
import Search from './src/screens/Search';
import Nutrition from './src/screens/Nutrition';
import Home from './src/screens/Home';




const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const Screens = () => {
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Nutrition" component={Nutrition} />
        <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
}
export default () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Categories" component={Categories} />
            <Drawer.Screen name="Nutrition" component={Nutrition} />
            <Drawer.Screen name="Search" component={Search} />
      </Drawer.Navigator>
    )
}

