import React from 'react'
import { View, Text } from 'react-native'
import colorsAtom from '../../components/atoms/colorsAtom'
const HomeScreen = () => {
    return(
        <View style={{
            flex:1,
            backgroundColor:"#f2f2f2"
        }}>
            <View>
                <View style={{
                    paddingHorizontal:20,
                    paddingVertical:10,
                    backgroundColor:"#fff"
                }}>
                    <View style={{
                        width:"100%",
                        borderRadius:5,
                        height:50,
                        backgroundColor:"#eee"
                    }}>
                    </View>
                </View>
                <View style={{
                    paddingHorizontal:20,
                    paddingVertical:10,
                    flexDirection:'row',
                    backgroundColor:colorsAtom.primary.primary3
                }}>
                    <Text style={{
                        color:"#fff",
                        fontWeight:'bold'
                    }}>Lokasi Kamu:</Text>
                    <Text style={{
                        color:"#fff",
                        marginLeft:5,
                    }}>Jl margoyuono no.93</Text>
                </View>
            </View>
            <View style={{
                padding:20
            }}>
                <View style={{
                    padding:20,
                    backgroundColor:"#fff",
                    borderRadius:5
                }}>
                    <View style={{
                        padding:20,
                        marginBottom:20,
                        backgroundColor:colorsAtom.primary.primary3,
                        borderRadius:5
                    }}>
                        <View>
                        <Text style={{
                            color:"#fff"
                        }}>Sisa Saldo</Text>
                        <Text style={{
                            color:"#fff",
                            fontSize:18,
                            fontWeight:"bold"
                        }}>Rp10.000</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        marginBottom:10,
                        justifyContent:'space-between',
                    }}>
                        <View>
                            <View style={{
                                width:60,
                                height:60,
                                backgroundColor:"#eee",
                                borderRadius:30
                            }}></View>
                        </View>
                        <View>
                            <View style={{
                                width:60,
                                height:60,
                                backgroundColor:"#eee",
                                borderRadius:30
                            }}></View>
                        </View>
                        <View>
                            <View style={{
                                width:60,
                                height:60,
                                backgroundColor:"#eee",
                                borderRadius:30
                            }}></View>
                        </View>
                        <View>
                            <View style={{
                                width:60,
                                height:60,
                                backgroundColor:"#eee",
                                borderRadius:30
                            }}></View>
                        </View>
                    </View>
                    
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                    }}>
                        <View>
                            <View style={{
                                width:60,
                                height:60,
                                backgroundColor:"#eee",
                                borderRadius:30
                            }}></View>
                        </View>
                        <View>
                            <View style={{
                                width:60,
                                height:60,
                                backgroundColor:"#eee",
                                borderRadius:30
                            }}></View>
                        </View>
                        <View>
                            <View style={{
                                width:60,
                                height:60,
                                backgroundColor:"#eee",
                                borderRadius:30
                            }}></View>
                        </View>
                        <View>
                            <View style={{
                                width:60,
                                height:60,
                                backgroundColor:"#eee",
                                borderRadius:30
                            }}></View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen