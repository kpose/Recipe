import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  Dimensions,
} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

//import react navigation
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

//import screens
import Categories from '../screens/Categories';
import Search from '../screens/Search';
import Nutrition from '../screens/Nutrition';
import Home from '../screens/Home';
import Ingredients from '../screens/Ingredients';
import IngredientDetails from '../screens/IngredientDetails';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';

//import custom slider
import CustomSidebarMenu from './CustomSidebarMenu';

global.currentScreenIndex = 0;

class NavigationDrawerStructure extends Component {
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../../assets/carbon.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

//Stack Navigator for the First Option of Navigation Drawer
const HomeNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  Ingredients: {
    screen: Ingredients,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  IngredientDetails: {
    screen: IngredientDetails,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  RecipeDetails: {
    screen: RecipeDetailsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});



//Drawer Navigator Which will provide the structure of our App
const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerLabel: 'Home Screen 1',
      },
    },
    Nutrition: {
      screen: Nutrition,
      navigationOptions: {
        drawerLabel: 'Demo Screen 2',
      },
    },
    Categories: {
      screen: Categories,
      navigationOptions: {
        drawerLabel: 'Demo Screen 3',
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        drawerLabel: 'Demo Screen 3',
      },
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  }
);
export default createAppContainer(DrawerNavigatorExample);
