import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import { RegisterScreen } from './screen/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screen/LoginScreen';
import { ProfileScreen } from './screen/ProfileScreen';
import { MapScreen } from './screen/MapScreen';
import { SaveImgScreen } from './screen/SaveImgScreen';
import { VideoScreen } from './screen/VideoScreen';
import PlayerListScreen from './screen/PlayerLiistScreen';
import { PlayersDetailsScreen } from './screen/PlayersDetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NotificationScreen } from './screen/NotificationScreen';
import { HomeScreen } from './screen/HomeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const SideDrawer = ()=>{
  return(
    <Drawer.Navigator initialRouteName="Feed">
    <Drawer.Screen
      name="home"
      component={HomeScreen}
      options={{ drawerLabel: 'Home' }}
    />
    <Drawer.Screen
      name="Notifications"
      component={NotificationScreen}
      options={{ drawerLabel: 'notification' }}
    />
     <Drawer.Screen
      name="playerlist"
      component={PlayerListScreen}
      options={{ drawerLabel: 'playerlist' }}
    />
   
  </Drawer.Navigator>
  )
}




const HomeStack =()=>{
     return (
      <Stack.Navigator     >
       <Stack.Screen
        name="signup"
        component={RegisterScreen}
        options={{ title: 'signup' }}
      />
      <Stack.Screen name="login" component={LoginScreen} />
     
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="map" component={MapScreen} />
      <Stack.Screen name="save_img" component={SaveImgScreen} />
      <Stack.Screen name="save_video" component={VideoScreen} />
      <Stack.Screen name="playerlist" component={PlayerListScreen} />
      <Stack.Screen name="playersdetails" component={PlayersDetailsScreen} />
      

    </Stack.Navigator>
     )
}

const MyStack = () => {
  return (
    <>
    <NavigationContainer>
   
        <Tab.Navigator  screenOptions={{ headerShown: false }}>
        <Tab.Screen name="signup" component={SideDrawer} />
        <Tab.Screen name="save_video" component={HomeStack} />
         <Tab.Screen name="save_img" component={SaveImgScreen} />

        </Tab.Navigator> 

    </NavigationContainer>

    </>
  );
};

export default MyStack