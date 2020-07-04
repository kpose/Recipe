import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Feather } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Block, Button, Text } from 'expo-ui-kit';

//import screens
import Categories from './src/screens/Categories';
import Search from './src/screens/Search';
import Nutrition from './src/screens/Nutrition';
import Home from './src/screens/Home';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
    return (
      <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: false,
            headerTransparent: true,
            headerTitle: null,
            headerLeft: () => (
              <Button transparent onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={25} color="black" style={{ paddingHorizontal: 10 }} />
              </Button>
            ),
          }}>
        <Stack.Screen name="Home">{props => <Home {...props} />}</Stack.Screen>
        <Stack.Screen name="Categories">{props => <Categories {...props} />}</Stack.Screen>
        <Stack.Screen name="Nutrition">{props => <Nutrition {...props} />}</Stack.Screen>
        <Stack.Screen name="Search">{props => <Search {...props} />}</Stack.Screen>
        </Stack.Navigator>
      </Animated.View>
    );
  };
  
  const DrawerContent = props => {
    return (
      <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
        <Block>
          <Block flex={0.4} margin={20} bottom>
            <Image
              source={{
                uri: 'https://image.freepik.com/free-vector/minimal-logo-element-collection_23-2148379435.jpg',
                height: 60,
                width: 60,
                scale: 0.5,
              }}
              resizeMode="center"
              style={styles.avatar}
            />
            <Text style = {styles.title}>
              Recipe and Nutrition
            </Text>
            <Text white size={9}>
              contact@react-ui-kit.com
            </Text>
          </Block>
          <Block>
            <DrawerItem
              label="Home"
              labelStyle={styles.drawerLabel}
              style={styles.drawerItem}
              onPress={() => props.navigation.navigate('Home')}
              icon = {() => <AntDesign name = "home" color="white" size = {22}/>}
            />
            <DrawerItem
              label="Categories"
              labelStyle={styles.drawerLabel}
              style={{ alignItems: 'flex-start', marginVertical: 0 }}
              onPress={() => props.navigation.navigate("Categories")}
              icon = {() => <AntDesign name = "switcher" color="white" size = {22}/>}
            />
            <DrawerItem
              label="Nutrition"
              labelStyle={styles.drawerLabel}
              style={{ alignItems: 'flex-start', marginVertical: 0 }}
              onPress={() => props.navigation.navigate("Nutrition")}
              icon = {() => <AntDesign name = "piechart" color="white" size = {22}/>}
            />
            <DrawerItem
                label="Search"
                labelStyle={styles.drawerLabel}
                style={{ alignItems: 'flex-start', marginVertical: 0 }}
                onPress={() => props.navigation.navigate("Search")}
                icon = {() => <AntDesign name = "search1" color="white" size = {22}/>}
            />
          </Block>
        </Block>
  
        
      </DrawerContentScrollView>
    );
  };
  
  export default () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0));
    const scale = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [1, 0.8],
    });
    const borderRadius = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [0, 16],
    });
  
    const animatedStyle = { borderRadius, transform: [{ scale }] };
  
    return (
      <LinearGradient style={{ flex: 1 }} colors={['#E94057', '#4A00E0']}>
        <Drawer.Navigator
          // hideStatusBar
          drawerType="slide"
          overlayColor="transparent"
          drawerStyle={styles.drawerStyles}
          contentContainerStyle={{ flex: 1 }}
          drawerContentOptions={{
            activeBackgroundColor: 'transparent',
            activeTintColor: 'white',
            inactiveTintColor: 'white',
          }}
          sceneContainerStyle={{ backgroundColor: 'transparent' }}
          drawerContent={props => {
            setProgress(props.progress);
            return <DrawerContent {...props} />;
          }}>
          <Drawer.Screen name="Screens">
            {props => <Screens {...props} style={animatedStyle} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </LinearGradient>
    );
  };
  
  const styles = StyleSheet.create({
    stack: {
      flex: 1,
      shadowColor: '#FFF',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 5,
      // overflow: 'scroll',
      // borderWidth: 1,
    },
    drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
    drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
    drawerLabel: { color: 'white', marginLeft: -16, fontSize: 18 },
    title: { color: '#0e1680', fontSize: 18, fontWeight : 'bold' },
    avatar: {
      borderRadius: 60,
      marginBottom: 16,
      borderColor: 'white',
      borderWidth: StyleSheet.hairlineWidth,
    },
  });