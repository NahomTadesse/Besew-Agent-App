import React, { useState,useCallback } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import { Pressable } from "react-native";
import RangeSlider from 'rn-range-slider';
import { Checkbox } from 'react-native-paper';



export default function Filter ({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [isnext , setIsNext] = useState(false)
    const [isSelected,setIsSelected] = useState(false)
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height

const mainCont = ()=>{

    return(
        <View style={{marginTop:20,marginLeft:25}}>
     <TouchableOpacity style={{flex:1,flexDirection:"row"}}>
<Text style={{fontSize:16,fontWeight:"400"}}>Job Posts</Text>
<Text  style={{fontSize:16,fontWeight:"400",marginLeft:208}}>All</Text>
     </TouchableOpacity>

     <TouchableOpacity style={{flex:1,flexDirection:"row",marginTop:20}}>
<Text  style={{fontSize:16,fontWeight:"400"}}>Candidates</Text>
<Text  style={{fontSize:16,fontWeight:"400",marginLeft:200}}>All</Text>
     </TouchableOpacity>
        </View>
    )
}
    return(
        <ScrollView style={{backgroundColor:'white'}} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{flexDirection:'row',marginTop:42}}>
              <Image
                  style={
                    { width: 24, height: 24,marginLeft:20,marginTop:3}
                  }
                  source={require("../assets/arr.png")}
                />
              <Text style={{color:"#273469",fontSize:20,fontWeight:'500',marginLeft:10}}>Filter</Text>

                </View>
                <View style={{marginTop:12,backgroundColor:'#CDDFF7',height:2}}></View>
                {mainCont()}
        </ScrollView>
    )
}