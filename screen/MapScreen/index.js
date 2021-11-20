// import React, { useState } from 'react'
import { View,StyleSheet,Dimensions,Text } from 'react-native';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

export const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [pin, setPin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  })

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })




  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log("333333333333"+location )
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }





 

  return (
    <>
     
    <View style={{flex:1}}>

    <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails={true}
      GooglePlacesSearchQuery={{
        rankby:"distance"
      }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        setRegion({
          latitude:details.geometry.location.lat,
          longitude:details.geometry.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        })
      }}
      query={{
        key: 'AIzaSyDPDgeohueeBReqVeE0BrfwwCBBeM463jM',
        language:'en',
        components:"country:us",
        type:"establishment",
        radius:30000,
        location:`${region.latitude},${region.longitude}`
      }}

      style={{
          container:{flex:0,
          position:'absolute',
          width:"100%",  
          zIndex:1
        },
          listView:{backgroundColor:"white"}
      }}

    />
        <Text>{errorMsg}</Text>      
   
  </View>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems:'center',
  //   justifyContent:'center',
  //   backgroundColor:'#fff',
  //   // marginTop:50
  // },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
     marginTop:45,    
  },
  
});