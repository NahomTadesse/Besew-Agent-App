import React, { useState,useCallback } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import { Pressable } from "react-native";
import RangeSlider from 'rn-range-slider';
import { Checkbox } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

export default function PostJob ({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [isnext , setIsNext] = useState(false)
    const [isSelected,setIsSelected] = useState(false)
    const nav = useNavigation();

const singlePost=()=>{
    return(
        <View style={{marginTop:20}}>
            <Text style={{fontSize:14,color:'#868686',marginLeft:30}}>Select the template layout you want to use</Text>
 <View style={{flexDirection:"row",marginLeft:20}}>  
        <View style={{}}>
        <Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
   
    </View>
    <Text style={{textAlignVertical:"center",fontSize:14,color:'#30343F',fontWeight:"500",top:5}}>Single job post {`\n`}
    <Text style={{textAlignVertical:"center",fontSize:12,color:'#9E9E9E',fontWeight:"500",marginTop:5}}>Post each job individually
    
    </Text>
    </Text>
    </View>

    <View style={{marginTop:20,width:340,height:113,backgroundColor:'#E9F1FB',alignSelf:'center',borderWidth:1,borderRadius:10,borderColor:'#E9F1FB'}}>


           <Text style={{fontSize:14,color:'#273469',fontWeight:'500',marginLeft:10,marginBottom:5,marginTop:5}}>Customer Service Representative </Text>
 
           

           <View style={{flexDirection:'row',marginHorizontal:5}}>
           <Text style={{fontSize:14,color:'#30343F',marginLeft:5}}>Gender:F/M</Text>
         
              
           <Text style={{fontSize:14,color:'#30343F',marginLeft:50}}>Education:10+</Text>

           </View>

           <View style={{flexDirection:"row",marginHorizontal:10,marginTop:10}}>

            <Text style={{fontSize:14}}>Deadline: Nov 10</Text>
            <Text style={{fontSize:14,marginLeft:20}}>Vacancies:10</Text>
            <Image
                  style={
                    { width: 24, height: 24,marginLeft:20,bottom:3,marginRight:5}
                  }
                  source={require("../assets/banknote.png")}
                />
            <Text style={{fontSize:14}}>5000 ETB</Text>
           </View>
           <TouchableOpacity  style={{height:23,width:85,backgroundColor:'#3680E1',
borderWidth:1,borderRadius:5,borderColor:'#3EC6FF',marginRight:10,marginLeft:10}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Apply</Text></TouchableOpacity>   
</View>

        </View>
    )
}
const multiplePost=()=>{
    return(
        <View style={{marginTop:25}}>
 <View style={{flexDirection:"row",marginLeft:20}}>  
        <View style={{}}>
        <Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
   
    </View>
    <Text style={{textAlignVertical:"center",fontSize:14,color:'#30343F',fontWeight:"500",top:5}}>Multiple jobs {`\n`}
    <Text style={{textAlignVertical:"center",fontSize:12,color:'#9E9E9E',fontWeight:"500",marginTop:5}}>Post multiple jobs at once
    
    </Text>
    </Text>
    </View>

<View style={{width:326 , marginBottom:20,marginTop:20,
    height :395,backgroundColor:"white",alignSelf:"center",borderWidth:1,borderRadius:10,borderColor:"#CDDFF7"}}>

<View style={{flexDirection:"row",marginTop:10,alignSelf:"center"}}>
<View style={{width:155,height:118,backgroundColor:'#E9F1FB'}}>
<Text style={{alignSelf:'center',marginTop:10,color:'#034DAE',fontSize:14}}>Cashier</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Education: 10+</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Gender: F/M</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Salary:8000</Text>

</View>
<View style={{width:155,height:118,backgroundColor:'#E9F1FB',marginLeft:5}}>
<Text style={{alignSelf:'center',marginTop:10,color:'#034DAE',fontSize:14}}>Cashier</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Education: 10+</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Gender: F/M</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Salary:8000</Text>

</View>
<View>

</View>
</View>
<View style={{flexDirection:"row",marginTop:10,alignSelf:"center"}}>
<View style={{width:155,height:118,backgroundColor:'#E9F1FB'}}>
<Text style={{alignSelf:'center',marginTop:10,color:'#034DAE',fontSize:14}}>Cashier</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Education: 10+</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Gender: F/M</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Salary:8000</Text>

</View>
<View style={{width:155,height:118,backgroundColor:'#E9F1FB',marginLeft:5}}>
<Text style={{alignSelf:'center',marginTop:10,color:'#034DAE',fontSize:14}}>Cashier</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Education: 10+</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Gender: F/M</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Salary:8000</Text>

</View>
<View>

</View>
</View>
<View style={{flexDirection:"row",marginTop:10,alignSelf:"center"}}>
<View style={{width:155,height:118,backgroundColor:'#E9F1FB'}}>
<Text style={{alignSelf:'center',marginTop:10,color:'#034DAE',fontSize:14}}>Cashier</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Education: 10+</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Gender: F/M</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Salary:8000</Text>

</View>
<View style={{width:155,height:118,backgroundColor:'#E9F1FB',marginLeft:5}}>
<Text style={{alignSelf:'center',marginTop:10,color:'#034DAE',fontSize:14}}>Cashier</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Education: 10+</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Gender: F/M</Text>
<Text style={{marginLeft:10,marginTop:5,color:'#30343F',fontSize:14}}>Salary:8000</Text>

</View>
<View>

</View>
</View>
    </View>


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
          <Text style={{color:"#273469",fontSize:18,fontWeight:'500',marginLeft:10}}> 
         Post A Job
            </Text>
          
            </View>
            <View style={{marginTop:12,backgroundColor:'#CDDFF7',height:2}}></View>
            {/* {mainCont()} */}
        { singlePost()}
        {multiplePost()}

            <TouchableOpacity  style={{height:48,width:250,backgroundColor:'#3680E1',marginTop:40,
borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',marginRight:10,alignSelf:'center',marginBottom:20,
}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Post</Text></TouchableOpacity>
        </ScrollView>
    )
}