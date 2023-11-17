import React from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
export default function ScreenTwo({navigation}){

    const next=()=>{
navigation.navigate('profile')
    }
    const topCircle=()=>{
        return(
            <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-evenly'}}>
                <View style={{width:66,height:66,borderWidth:1,borderRadius:50,backgroundColor:'#D8D8D8',borderColor:'#D8D8D8'}}></View>
                <View style={{width:66,height:66,borderWidth:1,borderRadius:50,backgroundColor:'#D8D8D8',borderColor:'#D8D8D8'}}></View>
                <View style={{width:66,height:66,borderWidth:1,borderRadius:50,backgroundColor:'#D8D8D8',borderColor:'#D8D8D8'}}></View>
            </View>
        )
    }
    const mainCont=()=>{
        return(
            <View style={{alignSelf:'center',marginTop:30}}>
<View style={{width:328,height:148,backgroundColor:"#D9D9D9",borderWidth:1,borderRadius:10,borderColor:"#D9D9D9"}}></View>
<TouchableOpacity onPress={next} style={{width:201,height:22,backgroundColor:"#D9D9D9",
marginTop:20,alignSelf:'center'}}></TouchableOpacity>
<View style={{width:328,height:88,backgroundColor:"#D9D9D9",borderWidth:1,borderRadius:10,borderColor:"#D9D9D9",marginTop:20}}></View>
<TouchableOpacity onPress={next} style={{width:201,height:22,backgroundColor:"#D9D9D9",
marginTop:20,alignSelf:'center'}}></TouchableOpacity>
<View style={{width:328,height:88,backgroundColor:"#D9D9D9",borderWidth:1,borderRadius:10,borderColor:"#D9D9D9",marginTop:20}}></View>
<TouchableOpacity onPress={next} style={{width:201,height:22,backgroundColor:"#D9D9D9",
marginTop:20,alignSelf:'center'}}></TouchableOpacity>

            </View>
        )
    }
    return(
        <ScrollView>
            {topCircle()}
            {mainCont()}
        </ScrollView>
    )
}