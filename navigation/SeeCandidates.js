import React, { useState,useCallback } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import { Pressable } from "react-native";
import RangeSlider from 'rn-range-slider';
import { Checkbox } from 'react-native-paper';



export default function SeeCandidate({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [isnext , setIsNext] = useState(false)
    const [isSelected,setIsSelected] = useState(false)
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height



const card=()=>{


    return(
        <View>
        <View style={{marginLeft:20,marginTop:20}}>
            <View style={{flexDirection:"row",width:screenWidth/2}}>
                <TouchableOpacity>
            <Text style={{fontSize:14,textDecorationLine:"underline",color:"#3680E1"}}>Matched</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{fontSize:14,marginLeft:20}}>Not Matched</Text>
            </TouchableOpacity>
         
          
            </View>

       
        </View>
        <TouchableOpacity
       
        style={{width:360,height:120,borderBottomWidth:1,borderColor:'#868686',
         alignSelf:"center",marginTop:10}}>
<View style={{flexDirection:"row",height:45,marginTop:5,marginLeft:5}}>
    <View style={{width:screenWidth/2}}>
    <Text style={{color:'#868686',fontSize:14}}>Job Title</Text>
    <Text>Customer Sevice</Text>
    </View>
    <View style={{width:screenWidth/2}}>
    <Text style={{textAlign:'right',marginRight:95,color:'#868686',fontSize:14}}>Company</Text>
    <Text style={{textAlign:'right',marginRight:50}}>Customer Sevice</Text>
    </View>

</View>
<View style={{flexDirection:"row",height:45,marginLeft:5}}>
    <View style={{width:screenWidth/2}}>
    <Text style={{color:'#868686',}}>Date Matched
</Text>
    <Text>Nov 15/2023</Text>
    </View>
    <View style={{width:screenWidth/2,}}>
    <Text style={{marginLeft:37,color:'#868686'}}>Match Status</Text>
    <Text style={{textAlign:'right',marginRight:87,color:"#D1462F"}}>Completed</Text>
    </View>

</View>


         </TouchableOpacity>


{/* second card */}

<TouchableOpacity
  
style={{width:360,height:120,borderBottomWidth:1,borderColor:'#868686',
         alignSelf:"center",}}>
<View style={{flexDirection:"row",height:45,marginTop:5,marginLeft:5}}>
    <View style={{width:screenWidth/2}}>
    <Text style={{color:'#868686',fontSize:14}}>Job Title</Text>
    <Text>Customer Sevice</Text>
    </View>
    <View style={{width:screenWidth/2}}>
    <Text style={{textAlign:'right',marginRight:95,color:'#868686',fontSize:14}}>Company</Text>
    <Text style={{textAlign:'right',marginRight:50}}>Customer Sevice</Text>
    </View>

</View>
<View style={{flexDirection:"row",height:45,marginLeft:5}}>
    <View style={{width:screenWidth/2}}>
    <Text style={{color:'#868686',}}>Date Matched
</Text>
    <Text>Nov 15/2023</Text>
    </View>
    <View style={{width:screenWidth/2,}}>
    <Text style={{marginLeft:37,color:'#868686'}}>Match Status</Text>
    <Text style={{textAlign:'right',marginRight:87,color:"#D1462F"}}>Completed</Text>
    </View>

</View>


         </TouchableOpacity>
    {/* third card */}

<TouchableOpacity
  
style={{width:360,height:120,borderBottomWidth:1,borderColor:'#868686',
         alignSelf:"center",}}>
<View style={{flexDirection:"row",height:45,marginTop:5,marginLeft:5}}>
    <View style={{width:screenWidth/2}}>
    <Text style={{color:'#868686',fontSize:14}}>Job Title</Text>
    <Text>Customer Sevice</Text>
    </View>
    <View style={{width:screenWidth/2}}>
    <Text style={{textAlign:'right',marginRight:95,color:'#868686',fontSize:14}}>Company</Text>
    <Text style={{textAlign:'right',marginRight:50}}>Customer Sevice</Text>
    </View>

</View>
<View style={{flexDirection:"row",height:45,marginLeft:5}}>
    <View style={{width:screenWidth/2}}>
    <Text style={{color:'#868686',}}>Date Matched
</Text>
    <Text>Nov 15/2023</Text>
    </View>
    <View style={{width:screenWidth/2,}}>
    <Text style={{marginLeft:37,color:'#868686'}}>Match Status</Text>
    <Text style={{textAlign:'right',marginRight:83,color:"green"}}>In-Progress</Text>
    </View>

</View>


         </TouchableOpacity>     
        </View>
    )
}

// const selectedCard = ()=>{

//     return(
//         <View>
// <View style={{width:295,height:249,alignSelf:'center',marginTop:20}}>
// <View style={{width:295,height:50,borderWidth:1,borderColor:'#3680E1',borderTopRightRadius:10,borderTopLeftRadius:10
// ,backgroundColor:"#3680E1"
// }}>
//     <Text style={{flex:1,textAlignVertical:'center',alignSelf:'center',color:'#FAFAFF',fontSize:14,fontWeight:"500"}}>Payment Receipt</Text>
// </View>
// <View style={{flexDirection:"row",marginTop:10}}>
//     <Text style={{color:'#30343F',fontSize:14}}>job title </Text>
//     <Text style={{color:'#30343F',fontSize:14,marginLeft:100,marginLeft:150}}>Security guard </Text>
// </View>
// <View style={{flexDirection:"row",marginTop:10}}>
//     <Text style={{color:'#30343F',fontSize:14}}>Candidate name</Text>
//     <Text style={{color:'#30343F',fontSize:14,marginLeft:97}}>Abebe</Text>
// </View>
// <View style={{flexDirection:"row",marginTop:10}}>
//     <Text style={{color:'#30343F',fontSize:14}}>job placement</Text>
//     <Text style={{color:'#30343F',fontSize:14,marginLeft:111}}>Oct 12/2023</Text>
// </View>
// <View style={{flexDirection:"row",marginTop:10}}>
//     <Text style={{color:'#30343F',fontSize:14}}>Payment received:</Text>
//     <Text style={{color:'#30343F',fontSize:14,marginLeft:85}}>Oct 12/2023</Text>
// </View>
// <View style={{flexDirection:"row",marginTop:10}}>
//     <Text style={{color:'#30343F',fontSize:14}}>Commisison</Text>
//     <Text style={{color:'#30343F',fontSize:14,marginLeft:120}}>1000</Text>
// </View>
// <View style={{backgroundColor:"#3680E1",height:1,width:295,marginTop:10}}></View>
// <Text style={{fontWeight:'bold',fontSize:17,color:"#3680E1",marginTop:20,alignSelf:'center'}}>980 BIRR</Text>
// </View>
//         </View>
//     )
// }

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
          Matching
            </Text>
          
            </View>
            <View style={{marginTop:12,backgroundColor:'#CDDFF7',height:2}}></View>
          
{card()}


            
        </ScrollView>
    )
}