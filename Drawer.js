import React from 'react'
//import { Block, Text, Button } from 'expo-ui-kit';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';



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
                <Feather name = "menu" size = {25} />
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

//build custom drawer menu

const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View >
                {/* <DrawerItemList {...props} /> */}
            
            <View style={styles.logo}>
                <Image 
                    source={require('./assets/spoon.jpg')}
                    resizeMode = "center"
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 30
                    }} />
                    <Text> Recipe App </Text>
            </View>
            <DrawerItem
                label="Home"
                labelStyle = {{ marginLeft: -16 }}
                onPress={() => props.navigation.navigate("Home")}
                icon = {() => <AntDesign name = "home" color = "red" size = {20}/>}
            />
            <DrawerItem
                label="Categories"
                labelStyle = {{ marginLeft: -16 }}
                onPress={() => props.navigation.navigate("Categories")}
                icon = {() => <AntDesign name = "switcher" color = "red" size = {20}/>}
            />
            <DrawerItem
                label="Nutrition"
                labelStyle = {{ marginLeft: -16 }}
                onPress={() => props.navigation.navigate("Nutrition")}
                icon = {() => <AntDesign name = "piechart" color = "red" size = {20}/>}
            />
            <DrawerItem
                label="Search"
                labelStyle = {{ marginLeft: -16 }}
                onPress={() => props.navigation.navigate("Search")}
                icon = {() => <AntDesign name = "search1" color = "red" size = {20}/>}
            />
            </View>
        </DrawerContentScrollView>
    )
}

export default () => {
    return (
        <Drawer.Navigator 
            initialRouteName="Home"
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Screens" component={Screens} />
      </Drawer.Navigator>
    );
};


const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      padding: 10,
      marginHorizontal: 20
    },
    logo: {
        flex: 0.4,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
      },
  });
  
