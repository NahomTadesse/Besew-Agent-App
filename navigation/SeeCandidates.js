import React, { useState,useCallback } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import { Pressable } from "react-native";
import RangeSlider from 'rn-range-slider';
import { Checkbox } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

export default function SeeCandidate({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [isnext , setIsNext] = useState(false)
    const [isSelected,setIsSelected] = useState(false)
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
    const [isMatched , setIsMatched] = useState(true)
    // const [isSelected,setIsSelected] = useState(false)

    const nav = useNavigation();
const card=()=>{


    return(
        <View>
        <View style={{marginTop:20,marginBottom:10}}>
            <View style={{flexDirection:"row",width:screenWidth/2}}>
                <TouchableOpacity onPress={()=>{setIsMatched(true)}}>
            <Text style={!isMatched ? {fontSize:14,marginLeft:20} : {fontSize:14,marginLeft:20,color:'#3680E1',textDecorationLine:"underline"}}>Matched</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setIsMatched(false)}}>
            <Text style={isMatched ? {fontSize:14,marginLeft:20} : {fontSize:14,marginLeft:20,color:'#3680E1',textDecorationLine:"underline"}}>Not Matched</Text>
            </TouchableOpacity>
         
          
            </View>

       
        </View>
   
        </View>
    )
}

const matched=()=>{

    return(
        <View>
        <TouchableOpacity
       
       style={{width:360,borderBottomWidth:1,borderColor:'#868686',
        alignSelf:"center"}}>
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
 
style={{width:360,borderBottomWidth:1,borderColor:'#868686',
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
 
style={{width:360,borderBottomWidth:1,borderColor:'#868686',
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

const notMatched=()=>{
    return(
        <View>
          <View style={{width:340,height:113,backgroundColor:'#F4F0FF',marginTop:20,alignSelf:'center',borderWidth:1,borderRadius:10,borderColor:'#F4F0FF'}}>

<View style={{flex:1,flexDirection:'row',marginTop:20,marginLeft:10,maxHeight:40}}>
           <Text style={{fontSize:14,color:'#273469',fontWeight:'500'}}>Customer Service Representative{'\n'}Global Services Inc.</Text>
         <View style={{marginLeft:80}}>
         <TouchableOpacity onPress={()=>{navigation.navigate('matchint')}}>
           <Image
           
                  style={
                    { width: 24, height: 24}
                  }
                  source={require("../assets/dot.png")}
                />
                </TouchableOpacity>
                </View>
           </View>
           

           <View style={{flexDirection:'row',marginHorizontal:10}}>
            
          
                <Text style={{fontSize:12,color:'#D1462F',marginLeft:5}}>Full Time</Text>

                <Image
                  style={
                    { width: 16, height: 16,marginLeft:50}
                  }
                  source={require("../assets/map.png")}
                />
                <Text style={{fontSize:12,color:'#D1462F',marginLeft:5}}>Addis Ababa</Text>

                <Image
                  style={
                    { width: 16, height: 16,marginLeft:40}
                  }
                  source={require("../assets/case.png")}
                />
                <Text style={{fontSize:12,color:'#D1462F',marginLeft:5}}>1-2 years</Text>
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
</View>  
<View style={{width:340,height:113,backgroundColor:'#F4F0FF',marginTop:20,alignSelf:'center',borderWidth:1,borderRadius:10,borderColor:'#F4F0FF'}}>

<View style={{flex:1,flexDirection:'row',marginTop:20,marginLeft:10,maxHeight:40}}>
           <Text style={{fontSize:14,color:'#273469',fontWeight:'500'}}>Customer Service Representative{'\n'}Global Services Inc.</Text>
         <View style={{marginLeft:80}}>
         <TouchableOpacity  onPress={()=>{navigation.navigate('matchint')}}>
           <Image
           
                  style={
                    { width: 24, height: 24}
                  }
                  source={require("../assets/dot.png")}
                />
                </TouchableOpacity>
                </View>
           </View>
           

           <View style={{flexDirection:'row',marginHorizontal:10}}>
            
          
                <Text style={{fontSize:12,color:'#D1462F',marginLeft:5}}>Full Time</Text>

                <Image
                  style={
                    { width: 16, height: 16,marginLeft:50}
                  }
                  source={require("../assets/map.png")}
                />
                <Text style={{fontSize:12,color:'#D1462F',marginLeft:5}}>Addis Ababa</Text>

                <Image
                  style={
                    { width: 16, height: 16,marginLeft:40}
                  }
                  source={require("../assets/case.png")}
                />
                <Text style={{fontSize:12,color:'#D1462F',marginLeft:5}}>1-2 years</Text>
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
</View>  
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
   <TouchableOpacity onPress={()=>{nav.goBack()}}>
          <Image
                  style={
                    { width: 24, height: 24,marginLeft:20,marginTop:3}
                  }
                  source={require("../assets/arr.png")}
                />
          </TouchableOpacity>
          <Text style={{color:"#273469",fontSize:18,fontWeight:'500',marginLeft:10}}> 
          {isMatched ? 'Matched':'Not Matched'}
            </Text>
          
            </View>
            <View style={{marginTop:12,backgroundColor:'#CDDFF7',height:2}}></View>
          
{card()}
{isMatched ? matched(): notMatched()}


            
        </ScrollView>
    )
}