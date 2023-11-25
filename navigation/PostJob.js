import React, { useState,useCallback } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import { Pressable } from "react-native";
import RangeSlider from 'rn-range-slider';
import { Checkbox } from 'react-native-paper';



export default function PostJob ({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [isnext , setIsNext] = useState(false)
    const [isSelected,setIsSelected] = useState(false)

    // const obj = [
    //     'job Title','Education'
    // ]
const mainCont = ()=>{
    return(
    <View>
<Text style={{fontSize:14,color:'#868686',marginTop:18,marginLeft:30}}>Select the jobs you want to post</Text>

<View>
    <View style={{flex:1,flexDirection:'row',marginTop:25}}>
    <Text style={{fontSize:14,color:"#30343F",marginLeft:40}}>ABC Company</Text>
  
    <Image
              style={
                { width: 24, height: 24,marginLeft:200,}
              }
              source={require("../assets/cd.png")}
            />
          
    </View>
</View>

<View style={{marginLeft:40,marginTop:20}}>
    <View style={{flex:1,flexDirection:"row",width:319,height:52}}>
        <Text style={{textAlignVertical:"center",fontSize:14,color:'#30343F'}}>Cashier</Text>
        <View style={{alignItems:'flex-end',alignSelf:'center',width:150,marginLeft:120}}>
        <Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    </View>
    </View>
    <View style={{flex:1,flexDirection:"row",width:319,height:52}}>
        <Text style={{textAlignVertical:"center",fontSize:14,color:'#30343F'}}>Accountant</Text>
        <View style={{alignItems:'flex-end',alignSelf:'center',width:150,marginLeft:97}}>
        <Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    </View>
 
    </View>
    <View style={{flex:1,flexDirection:"row",width:319,height:52}}>  
        <Text style={{textAlignVertical:"center",fontSize:14,color:'#30343F'}}>Electrician</Text>
        <View style={{alignItems:'flex-end',alignSelf:'center',width:150,marginLeft:103}}>
        <Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    </View>
    </View>
    <View style={{flex:1,flexDirection:"row",width:319,height:52}}>
        <Text style={{textAlignVertical:"center",fontSize:14,color:'#30343F'}}>Painter</Text>
        <View style={{alignItems:'flex-end',alignSelf:'center',width:150,marginLeft:125}}>
        <Checkbox
        color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    </View>
    </View>
    <Text style={{marginTop:20,fontSize:14,color:'#3680E1',textDecorationLine:"underline"}}>See Details</Text>
   
</View>
    </View>
    )
}

const selectInfo=()=>{

    return(
        <View style={{marginTop:30}}>
            <View style={{flex:1,flexDirection:'row',alignSelf:'center'}}>
                <TouchableOpacity style={{width:137,height:42,backgroundColor:"#68a0e8",borderWidth:1,borderRadius:10,borderColor:"#68a0e8"}}>
                    <Text style={{color:'#FAFAFF',fontSize:14,flex:1,textAlignVertical:"center",alignSelf:'center'}}>Job Title</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:137,height:42,backgroundColor:"#68a0e8",borderWidth:1,marginLeft:10,borderRadius:10,borderColor:"#68a0e8"}}>
                    <Text style={{color:'#FAFAFF',fontSize:14,flex:1,textAlignVertical:"center",alignSelf:'center'}}>Education</Text>
                </TouchableOpacity>
            </View>
          
            <View style={{flex:1,flexDirection:'row',alignSelf:'center',marginTop:20}}>
                <TouchableOpacity style={{width:148,height:42,backgroundColor:"#E9F1FB",borderWidth:1,borderRadius:10,borderColor:"#E9F1FB"}}>
                    <Text style={{color:'#30343F',fontSize:14,flex:1,textAlignVertical:"center",alignSelf:'center'}}>Type Of Employer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:173,height:42,backgroundColor:"#E9F1FB",marginLeft:10,borderWidth:1,borderRadius:10,borderColor:"#E9F1FB"}}>
                    <Text style={{color:'#30343F',fontSize:14,flex:1,textAlignVertical:"center",alignSelf:'center'}}>Number Of Vacancies</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1,flexDirection:'row',alignSelf:'center',marginTop:20}}>
                <TouchableOpacity style={{width:171,height:42,backgroundColor:"#E9F1FB",borderWidth:1,borderRadius:10,borderColor:"#E9F1FB"}}>
                    <Text style={{color:'#30343F',fontSize:14,flex:1,textAlignVertical:"center",alignSelf:'center'}}>Application Deadline</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:144,height:42,backgroundColor:"#E9F1FB",marginLeft:10,borderWidth:1,borderRadius:10,borderColor:"#E9F1FB"}}>
                    <Text style={{color:'#30343F',fontSize:14,flex:1,textAlignVertical:"center",alignSelf:'center'}}>Charge</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex:1,flexDirection:'row',alignSelf:'center',marginTop:20}}>
                <TouchableOpacity style={{width:175,height:42,backgroundColor:"#68a0e8",borderWidth:1,borderRadius:10,borderColor:"#68a0e8"}}>
                    <Text style={{color:'#FAFAFF',fontSize:14,flex:1,textAlignVertical:"center",alignSelf:'center'}}>experience</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:144,height:42,backgroundColor:"#E9F1FB",marginLeft:10,borderWidth:1,borderRadius:10,borderColor:"#E9F1FB"}}>
                    <Text style={{color:'#30343F',fontSize:14,flex:1,textAlignVertical:"center",alignSelf:'center'}}>Charge</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex:1,flexDirection:'row',alignSelf:'center',marginTop:20}}>
              
                <TouchableOpacity style={{width:143,height:42,backgroundColor:"#E9F1FB",borderWidth:1,borderRadius:10,borderColor:"#E9F1FB"}}>
                    <Text style={{color:'#30343F',fontSize:14,flex:1,textAlignVertical:"center",alignSelf:'center'}}>Salary</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:143,height:42,backgroundColor:"#68a0e8",marginLeft:10,borderWidth:1,borderRadius:10,borderColor:"#68a0e8"}}>
                    <Text style={{color:'#FAFAFF',fontSize:14,flex:1,textAlignVertical:"center",alignSelf:'center'}}>Location</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1,flexDirection:'row',alignSelf:'center',marginTop:20}}>
              
              <TouchableOpacity style={{width:143,height:42,backgroundColor:"#E9F1FB",borderWidth:1,borderRadius:10,borderColor:"#E9F1FB"}}>
                  <Text style={{color:'#30343F',fontSize:14,flex:1,textAlignVertical:"center",alignSelf:'center'}}>Gender</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:143,height:42,backgroundColor:"#68a0e8",marginLeft:10,borderWidth:1,borderRadius:10,borderColor:"#68a0e8"}}>
                  <Text style={{color:'#FAFAFF',fontSize:14,flex:1,textAlignVertical:"center",alignSelf:'center'}}>Skills</Text>
              </TouchableOpacity>
          </View>
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
          <Text style={{color:"#273469",fontSize:18,fontWeight:'500',marginLeft:10}}>
            
          {isSelected ? 'Select the information you want to\nmake public':'Post A Job'}
            
            </Text>
          
            </View>
            <View style={{marginTop:12,backgroundColor:'#CDDFF7',height:2}}></View>
            {/* {mainCont()} */}
            {isSelected ? selectInfo():mainCont()}
{ isSelected &&           <TouchableOpacity 
onPress={()=>{navigation.navigate('posttype')}}
style={{height:48,width:250,backgroundColor:'#3680E1',marginTop:40,
borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',marginRight:10,alignSelf:'center',marginBottom:20
}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Next</Text></TouchableOpacity>}
{!isSelected &&
            <TouchableOpacity onPress={()=>{setIsSelected(true)}} style={{height:48,width:250,backgroundColor:'#3680E1',marginTop:40,
borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',marginRight:10,alignSelf:'center',marginBottom:20,
bottom:0,position:'absolute'}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Post</Text></TouchableOpacity>}
        </ScrollView>
    )
}