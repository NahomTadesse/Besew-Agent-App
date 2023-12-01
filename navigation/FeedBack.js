import React, { useState,useCallback } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import { Pressable } from "react-native";
import RangeSlider from 'rn-range-slider';
import { Checkbox } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

export default function FeedBack ({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [isnext , setIsNext] = useState(false)
    const [isSelected,setIsSelected] = useState(false)
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height

    const nav = useNavigation();

const mainCont = ()=>{

    return(
        <View>
            <View style={{width:screenWidth,height:43,backgroundColor:"#E9F1FB",marginTop:15}}>
                <Text style={{marginLeft:12,flex:1,textAlignVertical:"center",color:'#273469',fontSize:16,fontWeight:'600'}}> Work Ethics</Text>
            </View>
            <View style={{marginLeft:12 ,flexDirection:"row",marginTop:10}}>
        <Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
      <Text style={{textAlignVertical:"center",fontSize:16,color:'#30343F'}}>Punctuality and attendance</Text>
    </View>
    <View style={{marginLeft:12 ,flexDirection:"row",marginTop:10}}>
        <Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
      <Text style={{textAlignVertical:"center",fontSize:16,color:'#30343F'}}>Accountability and responsibility</Text>
    </View>
    <View style={{marginLeft:12 ,flexDirection:"row",marginTop:10}}>
        <Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
      <Text style={{textAlignVertical:"center",fontSize:16,color:'#30343F'}}>Adaptability and willingness to learn</Text>
    </View>

      {/* /////////////secondCard */}


      <View style={{width:screenWidth,height:43,backgroundColor:"#E9F1FB",marginTop:15}}>
                <Text style={{marginLeft:12,flex:1,textAlignVertical:"center",color:'#273469',fontSize:16,fontWeight:'600'}}>Skills</Text>
            </View>
            <View style={{marginLeft:12 ,flexDirection:"row",marginTop:10}}>
        <Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
      <Text style={{textAlignVertical:"center",fontSize:16,color:'#30343F'}}>Communication</Text>
    </View>
    <View style={{marginLeft:12 ,flexDirection:"row",marginTop:10}}>
        <Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
      <Text style={{textAlignVertical:"center",fontSize:16,color:'#30343F'}}>Team Work</Text>
    </View>
    <View style={{marginLeft:12 ,flexDirection:"row",marginTop:10}}>
        <Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
      <Text style={{textAlignVertical:"center",fontSize:16,color:'#30343F'}}>Problem-solving</Text>
    </View>


    {/* ////Third card */}


    <View style={{width:screenWidth,height:43,backgroundColor:"#E9F1FB",marginTop:15}}>
                <Text style={{marginLeft:12,flex:1,textAlignVertical:"center",color:'#273469',fontSize:16,fontWeight:'600'}}>Professional Conduct and Behavior</Text>
            </View>
            <View style={{marginLeft:12 ,flexDirection:"row",marginTop:10}}>
        <Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
      <Text style={{textAlignVertical:"center",fontSize:16,color:'#30343F'}}>Adherence to company policies and{'\n'}ethical standards</Text>
    </View>
    <View style={{marginLeft:12 ,flexDirection:"row",marginTop:10}}>
        <Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
      <Text style={{textAlignVertical:"center",fontSize:16,color:'#30343F'}}>Respectful and inclusive behavior{'\n'}towards colleagues</Text>
    </View>
    <View style={{marginLeft:12 ,flexDirection:"row",marginTop:10}}>
        <Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
      <Text style={{textAlignVertical:"center",fontSize:16,color:'#30343F'}}>Professional demeanor and representation{'\n'}of the company's values</Text>
    </View>

    <Text style={{fontSize:14,color:"#30343F",marginLeft:25,fontWeight:'400',marginTop:20}}>Write your own feedback</Text>
       
       <TextInput
       multiline={true}
       textAlignVertical="top"
       style={{marginLeft:25,marginTop:10,marginBottom:20,width:324,height:114,borderWidth:1,borderColor:"#868686"}}
       placeholder="*Optional feedback"
       
       />
        </View>
    )
}
    return(
        <ScrollView style={{backgroundColor:'white'}} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{flexDirection:'row',marginTop:42}}>
          <TouchableOpacity onPress={()=>{nav.goBack()}}>
          <Image
                  style={
                    { width: 24, height: 24,marginLeft:20,marginTop:3}
                  }
                  source={require("../assets/arr.png")}
                />
          </TouchableOpacity>
             
              <Text style={{color:"#273469",fontSize:20,fontWeight:'500',marginLeft:10}}>Provide FeedBack</Text>
              <TouchableOpacity><Text style={{color:'green',fontSize:18,fontWeight:'500',marginTop:0,marginLeft:100}}>Save</Text></TouchableOpacity>
                </View>
                <View style={{marginTop:12,backgroundColor:'#CDDFF7',height:2}}></View>
                {mainCont()}
        </ScrollView>
    )
}