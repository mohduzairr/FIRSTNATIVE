import React, { useState } from 'react'
import { View,Text, Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const GuestStatus = () => {
  const [roomdata, setRoomdata] = useState(1)
  const [adultdata, setAdultdata] = useState(1)
  const [childdata, setChilddata] = useState(1)

    const decrement =()=>{
        if(roomdata>0){
        setRoomdata(roomdata -1)
        }else{
            setRoomdata(0)
        }
     
    }

    const increment = ()=>{
        if(roomdata <20){
            setRoomdata(roomdata +1)

        }else{
            setRoomdata(20)
        }
    }


    const adultdecrement=()=>{
        if(adultdata>0){
            setAdultdata(adultdata -1)
            }else{
                setAdultdata(0)
            }
    }

    const adultincrement=()=>{
          if(adultdata<20){
            setAdultdata(adultdata +1)

          }else{
            setAdultdata(20)
          }
    }


    const childdecrement=()=>{
        if(childdata>0){
            setChilddata(childdata -1)
            }else{
                setChilddata(0)
            }
    }

    const childincrement=()=>{
        if(childdata<20){
            setChilddata(childdata +1)
        }else{
            setChilddata(20)
        }
       
    }
    return (
        <View style={{height:600,width:300,backgroundColor:'blue',marginLeft:40,borderRadius:5,marginLeft:0,marginTop:30,display:'flex',}}>
              <View style={{width:200,display:'flex',justifyContent:'space-between'}}>
                  <Text style={{fontSize:20}}>Rooms</Text>
                  <View >
                     <TouchableOpacity onPress={decrement} >
                   <Text style={{fontSize:50,}}>-</Text>
                   </TouchableOpacity>
                   <View>
                    <Text style={{fontSize:30,}}>{roomdata}</Text>
                  </View>
                  <View>
                 <TouchableOpacity onPress={increment}>
                   <Text style={{fontSize:50,}}>+</Text>
                   </TouchableOpacity> 
                 </View>
                  </View>


              </View>
              <View style={{width:200,display:'flex',justifyContent:'space-between'}}>
                  <Text style={{fontSize:20}}>Adults</Text>
                  <View >
                     <TouchableOpacity onPress={adultdecrement} >
                   <Text style={{fontSize:50,}}>-</Text>
                   </TouchableOpacity>
                   <View>
                    <Text style={{fontSize:30,}}>{adultdata}</Text>
                  </View>
                  <View>
                 <TouchableOpacity onPress={adultincrement}>
                   <Text style={{fontSize:50,}}>+</Text>
                   </TouchableOpacity> 
                 </View>
                  </View>
              </View>

              <View style={{width:200,display:'flex',justifyContent:'space-between'}}>
                  <Text style={{fontSize:20}}>Children</Text>
                  <View >
                     <TouchableOpacity onPress={childdecrement} >
                   <Text style={{fontSize:50,}}>-</Text>
                   </TouchableOpacity>
                   <View>
                    <Text style={{fontSize:30,}}>{childdata}</Text>
                  </View>
                  <View>
                 <TouchableOpacity onPress={childincrement}>
                   <Text style={{fontSize:50,}}>+</Text>
                   </TouchableOpacity> 
                 </View>
                  </View>


              </View>
              

             
              
        </View>
    )
}
