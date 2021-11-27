import React from 'react'
import { View,Text } from 'react-native'

export const PlayersDetailsScreen = ({route}) => {
    console.log("iiikkkjjjj"+route.params);

     const {name,nameId} = route.params;
    console.log("123456789"+name)
    console.log("texxxxxxxt"+nameId)


    return (
        <View>
            <Text> players details</Text>
            <Text>Name: {JSON.stringify(name)}</Text>
        </View>
    )
}
