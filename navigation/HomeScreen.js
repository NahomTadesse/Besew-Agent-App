import React from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
export default function HomeScreen({navigation}){

    const next=()=>{
navigation.navigate('dashboard')
    }
    const mainCont=()=>{
        return(
            <View style={{alignSelf:'center',marginTop:100}}>
<View style={{width:328,height:400,backgroundColor:"#D9D9D9",borderWidth:1,borderRadius:10,borderColor:"#D9D9D9"}}></View>
<TouchableOpacity onPress={next} style={{width:201,height:40,backgroundColor:"#D9D9D9",
borderWidth:1,borderRadius:10,borderColor:"#D9D9D9",marginTop:30,alignSelf:'center'}}></TouchableOpacity>
            </View>
        )
    }
    return(
        <ScrollView>
            {mainCont()}
        </ScrollView>
    )
}