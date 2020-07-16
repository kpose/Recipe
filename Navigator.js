import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Feather } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

//import screens
import Categories from './src/screens/Categories';
import Search from './src/screens/Search';
import Nutrition from './src/screens/Nutrition';
import Home from './src/screens/Home';
import Ingredients from './src/screens/Ingredients';
import IngredientDetails from './src/screens/IngredientDetails';
import RecipeDetailsScreen from './src/screens/RecipeDetailsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Ingredients" component={Ingredients} />
      <Stack.Screen name="IngredientDetails" component={IngredientDetails} />
      <Stack.Screen name="RecipeDetailsScreen" options = {{headerShown: false}} component={RecipeDetailsScreen} />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        //gestureEnabled: false,
      }}
    >
      <Drawer.Screen name="Recipes" component={HomeNavigator} />
      <Drawer.Screen name="Categories" component={Categories} />
      <Drawer.Screen name="Nutrition" component={Nutrition} />
      <Drawer.Screen name="Search" component={Search} />
    </Drawer.Navigator>
  );
};
