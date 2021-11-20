import { createNativeStackNavigator } from '@react-navigation/native-stack'
import axios from 'axios'
import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, ToastAndroid, View,Text, ImageBackground, TouchableOpacity } from 'react-native'
// import {Geolocation} from '@react-native-community/geolocation';

export const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    // const submit = ()=>{
      
    //   console.log("clicked me")
    //   // ToastAndroid.show("successful register",TestAndriod.SHORT)

    //   const data ={name:name,email:email,phone:phone,password:password}
    //   console.log(data)
    //   signup(data)
     
    // }

    async function submit(){
      const data ={name:name,email:email,phone:phone,password:password}
     console.log(data)
      //  const register = await axios.post("http://192.168.48.6:8000/signup",data)
      //  console.log("1234.."+register);
     setEmail('');
     setPassword('');
     setName('');
     setPhone('');
     alert("registered succesfully")

     navigation.navigate('login')

    }
    return (
        <>
            
        <View style={styles.container}>
          {/* <ImageBackground   source={require('./assets/native.jpeg')}  style={styles.img}  > */}
             <View>
               <Text style={styles.heading}>Registration form</Text>
             </View>
             
               <View>
                   <View style={styles.textinput}>
                   <TextInput  placeholder="user name" value={name} keyboardType="default" onChangeText={(text) => setName(text)} />

                   </View>
                   <View style={styles.textinput}>
                   <TextInput placeholder="Email" value={email} keyboardType="email-address" onChangeText={(text) => setEmail(text)} />

                   </View>
                   <View style={styles.textinput}>
                   <TextInput placeholder="Phone number" value={phone} keyboardType="numeric" onChangeText={(number) => setPhone(number)}/>

                   </View>
                   <View style={styles.textinput}>
                   <TextInput placeholder="password"  value={password} keyboardType="default" onChangeText={(text) => setPassword(text)} />

                   </View>
               </View>
            <TouchableOpacity style={styles.button} onPress={submit}>
            <Text>submit</Text>            
             </TouchableOpacity>
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
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      borderRadius:50,
    }
  });  