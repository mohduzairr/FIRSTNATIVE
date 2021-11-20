import axios from 'axios'
import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, ToastAndroid, View,Text, ImageBackground } from 'react-native'

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
   

   

    async function login(){
      const data ={email:email,password:password}
     console.log(data)
      //  const register = await axios.post("http://192.168.48.6:8000/api/login",data)
       navigation.navigate('profile')
       

    //    if (response.success == false) {
    //     setMessage(response.error);
    //     setLoading(false);
    //     // alert("wrong email or password");
    //   } else {
    //     setEmail("");
    //     setPassword("");
    //     navigation.navigate('profile')

    // }
  }
  const map = ()=>{
    navigation.navigate('map')
  }

  const video = ()=>{
    navigation.navigate('save_video')
  }

  
    return (
        <>
            
        <View style={styles.container}>
        
          {/* <ImageBackground   source={require('./assets/native.jpeg')}  style={styles.img}  > */}
             <View>
               <Text style={styles.heading}>Login Form</Text>
             </View>
             
               <View>
                   
                   <View style={styles.textinput}>
                   <TextInput placeholder="Email" value={email} keyboardType="email-address" onChangeText={(text) => setEmail(text)} />

                   </View>
                   
                   <View style={styles.textinput}>
                   <TextInput placeholder="password"  value={password} keyboardType="default" onChangeText={(text) => setPassword(text)} />

                   </View>
               </View>

               <Button title="Login" onPress={login} />
               <Button title="Map" onPress={map} />
                <Button title="video" onPress={video}/>
                
               {/* </ImageBackground> */}
         </View>


        </>
        )

    }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',  
    },
  
    textinput:{
    height: 40,
    width:200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderWidth:0,
    

      
    },
    
    heading:{
      fontSize:30,
    },
    img:{
      height:400,
      width:300
    },
   
  });