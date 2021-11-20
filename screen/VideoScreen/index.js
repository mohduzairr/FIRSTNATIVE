import React from 'react'
import { View,Text } from 'react-native'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
export const VideoScreen = () => {
    return (
        <View>
               
            <VideoPlayer
            videoProps={{
                shouldPlay: true,
                resizeMode: Video.RESIZE_MODE_CONTAIN,
                // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
                source: {
                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                },
            }}
            />


            {/* <Text> kskkskskk</Text> */}
        </View>
    )
}
