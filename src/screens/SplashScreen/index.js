import React from 'react'
import { View,Text } from 'react-native'
import colorsAtom from '../../components/atoms/colorsAtom'
const SplashScreen = () => {
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:colorsAtom.primary.primary3
        }}>
            <Text style={{
                color:"#fff",
                fontSize:24,
                fontWeight:"bold"
            }}>patani</Text>
        </View>
    )
}

export default SplashScreen