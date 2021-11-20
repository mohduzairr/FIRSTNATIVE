import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { captureRef } from 'react-native-view-shot';
import  { useState,useEffect  } from 'react'
import { Camera, requestPermissionsAsync } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, View,Text, Image,TouchableOpacity, Button } from 'react-native'
import { Audio } from 'expo-av';

export const ProfileScreen = ({navigation}) => {
  const [hasgalleryPermission, setHasgalleryPermission] = useState(null);

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
 

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasgalleryPermission(galleryStatus.status === 'granted');


    })();
  }, []);

  const takePicture = async()=>{
     if(camera){
        const data=await camera.takePictureAsync(null);
        console.log("image....."+data.uri);
        setImage(data.uri);
     }
  }
  
//   const saveImage = async () => {
//     var  image = null
//     image = await captureRef(inputEl, {
//           result: 'base64',
//           quality: 1,
//           format: 'jpg',
//     });
// if(image) return image ;
// };

// const goSaveImage = () => {
//  saveImage().then((image)=>{
//    props.navigation.navigate('save_img', {result : image} )
//  })
// }

const video=()=>{
  // navigation.navigate('save_img',{
  //   image:image,
  //    itemId:"mahad mmmmmm",
  //   // otherParam:"kllkhhghghgg"

  // })
}



  const saveimage=()=>{
    navigation.navigate('save_img',{
      image:image,
       itemId:"mahad mmmmmm",
      // otherParam:"kllkhhghghgg"

    })
  }
    
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };




  if (hasCameraPermission === null  || hasgalleryPermission==false) {
    return <View />;
  }
  if (hasCameraPermission === false || hasgalleryPermission==false ) {
    return <Text>No access to camera</Text>;
  }
   
    return (
        <>
            
        <View style={styles.container}>

           {/* camera */}
         <View style={styles.cameraContainer}>
         <Camera 
              ref ={ref=>setCamera(ref)}
              style={styles.FixedRatio} 
              type={type}
              ratio={"1:1"}

         />
         </View>
         
          <Button  
            title="Flip Image"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}/>

            <Button
            title="Take Paicture" 
            onPress={()=> takePicture()}
            />
            <Button
            title="Pick Image from gallery" 
            onPress={()=> pickImage()}
            />
            <Button
            title="save image" 
            onPress={saveimage}
            />
             <Button
            title="video" 
            onPress={video}
            />
           
           {image && <Image source={{uri:image}} style={{flex:1}} />}
        
        
         </View>


        </>
        )

    }


const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },

    cameraContainer: {
      flex:1,
      flexDirection:'row',
    },
    FixedRatio:{
      flex:1,
      aspectRatio:1
    }
    
  
    
  });  