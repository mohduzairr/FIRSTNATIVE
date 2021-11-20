import React from 'react'
import { View,Text,Image } from 'react-native'

export const SaveImgScreen = ({route}) => {
    console.log("iiikkkjjjj"+route.params);

     const {image,itemId} = route.params;
    console.log("123456789"+image)
    console.log("texxxxxxxt"+itemId)

    return (
       <View>

{/* <Image style={{height:300,width:300}} source={{ uri: `data:image/jpg;base64,${props.route.params.result}` }}/> */}

      <Text>itemId: {JSON.stringify(itemId)}</Text>
      {/* <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}

                {/* <Image source={{uri:"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FFirstNative-4e14fcea-0e55-49a9-818b-8fbe8cbd9138/Camera/6bf321e2-b1e3-41df-87de-a70db9fefde4.jpg"
}}    style={{height:300,width:300,marginTop:50}}/> */}

                 {/* {image && <Image source={{uri:JSON.stringify(image)}} style={{flex:1,height:300,width:300,marginTop:50}} />} */}
                
                
            <Image style={{height:300,width:300}} source={{uri:image}} />
       </View>
    )
}
