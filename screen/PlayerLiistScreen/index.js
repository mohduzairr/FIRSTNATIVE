
import React, { useState } from 'react';
import {  View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity } from 'react-native';



const PlayerListScreen = ({ navigation }) => {

    const [players, setPlayers] = useState([
        { name:"Babar Azam",ID:"1" },
        { name:"mohd  Rizwan",ID:"2" },
        { name:"fakhar Zaman",ID:"3" },
        { name:"mohd Hafeez",ID:"4" },
        { name:"shoeb Malik",ID:"5" },
        { name:"imad waseem",ID:"6" },
        { name:"Asif Ali",ID:"7" },
        { name:"Shadab Khan",ID:"8" },
        { name:"Hasan Ali",ID:"9" },
        { name:"Shaheen Afridi",ID:"10" },
        { name:"Mohd Waseem",ID:"11" },
        { name:"Haris Rauf",ID:"12" },
                                                     
    ])


    const players_details = (item)=>{
      console.log("clicked me"+players.name)
      navigation.navigate('playersdetails',{
        name:item.name,
        // name:"babar azam",
         nameId:item.ID,
        // nameId:1,
  
      })
    }
  
  return (
    <View style={styles.container}>
      <FlatList
      keyExtractor={(item)=>item.ID}
      data={players}
      renderItem={({item}) => <TouchableOpacity onPress={() => players_details(item)}><Text style={styles.item}  >{item.ID}.  {item.name}</Text></TouchableOpacity>}
        
      />
     </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default PlayerListScreen;