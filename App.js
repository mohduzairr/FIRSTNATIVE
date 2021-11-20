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


const Stack = createNativeStackNavigator();
 
const MyStack = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
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




      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack