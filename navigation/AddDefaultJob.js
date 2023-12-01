import React, { useState } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
export default function AddDefaultJob({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)
    const nav = useNavigation();
    const MainCont =()=>{
   return(
    <View style={{marginTop:20}}>
<Text style={{marginLeft:32,fontSize:14,color:"#30343F"}}>Enter Job Title</Text>
   <TextInput
       placeholder="Enter Job Title"
       placeholderTextColor='#CBCBCB'
       label='Enter Job Title'
   style={{marginTop:5,width:320,height:40,alignSelf:'center',borderWidth:1,
   borderColor:'#CDDFF7',padding:10}}
   />
<Text style={{marginLeft:32,fontSize:14,color:"#30343F",marginTop:14}}>Job description</Text>
   <TextInput
       placeholder="Write the job's description"
       textAlignVertical="top"
       placeholderTextColor='#CBCBCB'
       label='Enter Job Title'
   style={{marginTop:5,width:320,height:126,alignSelf:'center',borderWidth:1,
   borderColor:'#CDDFF7',padding:10}}
   />
   <Text style={{marginLeft:32,fontSize:14,color:"#30343F",marginTop:14}}>Job description</Text>
   <TextInput
       placeholder="Write the job's description"
       textAlignVertical="top"
       placeholderTextColor='#CBCBCB'
       label='Enter Job Title'
   style={{marginTop:5,width:320,height:126,alignSelf:'center',borderWidth:1,
   borderColor:'#CDDFF7',padding:10}}
   />
<View style={{marginLeft:30,marginTop:20,flexDirection:'row'}}>
<TouchableOpacity>
<Image
source={require('../assets/add.png')}
style={{width:30,height:30}}
/>
</TouchableOpacity>

<Text style={{fontSize:14,color:"#30343F",textAlignVertical:"center",marginLeft:5}}>Add More</Text>
</View>
    </View>
   )
    }
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{backgroundColor:"white"}} >
        <View style={{flexDirection:'row',marginTop:42}}>
        <TouchableOpacity onPress={()=>{nav.goBack()}}>
          <Image
                  style={
                    { width: 24, height: 24,marginLeft:20,marginTop:3}
                  }
                  source={require("../assets/arr.png")}
                />
          </TouchableOpacity>
          <Text style={{color:"#273469",fontSize:20,fontWeight:'500',marginLeft:10}}>Add Default Jobs</Text>
          
            </View>
            <View style={{width:screenWidth,height:2,backgroundColor:"#CDDFF7",marginTop:10}}></View>
        {MainCont()}
    </ScrollView>
    )
}