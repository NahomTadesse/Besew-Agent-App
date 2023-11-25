import React, { useState } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,
    Pressable,
    Text,TouchableWithoutFeedback,Modal } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';

export default function BottomNav({navigation}){


    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{backgroundColor:"#68A0E8",height:64}}>
<View style={{flex:1,flexDirection:"row",bottom:0,position:'absolute',marginTop:10,}}>

<TouchableOpacity onPress={()=>{navigation.navigate('home')}} style={{marginLeft:20,justifyContent:"center",marginBottom:10}}>
<Image
                  style={
                    { width: 24, height: 24,marginTop:10,marginLeft:5}
                  }
                  source={require("../assets/home.png")}
                />
    <Text style={{fontSize:12,color:"white" }}>Home</Text></TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate('postjob')}} style={{marginLeft:15,justifyContent:"center",marginBottom:10}}>
<Image
                  style={
                    { width: 24, height: 24,marginTop:10,marginLeft:15}
                  }
                  source={require("../assets/p.png")}
                />
    <Text style={{fontSize:12,color:"white" }}>Post a job</Text></TouchableOpacity>


<TouchableOpacity onPress={()=>{navigation.navigate('addcandid')}} style={{marginLeft:15,justifyContent:"center",marginBottom:10}}>
<Image
                  style={
                    { width: 24, height: 24,marginTop:10,marginLeft:30}
                  }
                  source={require("../assets/ad.png")}
                />
    <Text style={{fontSize:12,color:"white" }}>Add candidates</Text></TouchableOpacity>
<TouchableOpacity onPress={()=>{navigation.navigate('match')}} style={{marginLeft:15,justifyContent:"center",marginBottom:10}}>
<Image
                  style={
                    { width: 24, height: 24,marginTop:10,marginLeft:5}
                  }
                  source={require("../assets/arl.png")}
                />
    <Text style={{fontSize:12,color:"white" }}>Match</Text></TouchableOpacity>
<TouchableOpacity onPress={()=>{navigation.navigate('com')}} style={{marginLeft:15,justifyContent:"center",marginBottom:10}}>
<Image
                  style={
                    { width: 24, height: 24,marginTop:10,marginLeft:20}
                  }
                  source={require("../assets/credit-card.png")}
                />
    <Text style={{fontSize:12,color:"white"}}>Commissions</Text></TouchableOpacity>
</View>
        </ScrollView>
    )
}