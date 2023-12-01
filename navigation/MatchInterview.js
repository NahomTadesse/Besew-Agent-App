import React, { useState,useCallback } from "react";
import { View , Button ,Image ,ScrollView,Modal,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import { Pressable } from "react-native";
import RangeSlider from 'rn-range-slider';
import { Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function MatchInterview({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [isnext , setIsNext] = useState(false)
    const [isSelected,setIsSelected] = useState(false)
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
    const [isMatched , setIsMatched] = useState(true)
    const nav = useNavigation();
    // const [isSelected,setIsSelected] = useState(false)
    const [showpop ,setShowPop] =useState(false)

    const popUp = () => {
       
        return (
          <View>
            <Modal
              transparent={true}
              onRequestClose={() => {
               setShowPop(false)
              }}
            >
              <Pressable
              onPress={(event) => event.target == event.currentTarget && setShowPop(false)}
           style={{
           flex: 1,
        //    justifyContent: "center",
        justifyContent:"flex-end",
           backgroundColor: "#30343F",
           opacity: 0.9,}}

              >
                <View style={{width:screenWidth,height:258,backgroundColor:'white',alignSelf:'center',borderWidth:1,borderTopEndRadius:60,borderTopStartRadius:60,borderColor:'white',elevation:2}}>
               
              


      <Text style={{fontSize:16,color:"#3680E1",marginLeft:30,marginTop:20,marginBottom:20,fontWeight:'500',
    alignSelf:"center"
    }}>Interview Result</Text>
      <Input
            placeholder="Enter Interview score"
    label="Interview Score"
                style={{
                    width:331,
                  height:40,
                  elevation: 5,
                  marginTop:10,
                  borderWidth:1,
                  marginLeft:27,
                  backgroundColor:'white',
                  borderColor:"#CDDFF7",
                  
                }}

              />

<TouchableOpacity
            onPress={()=>{setShowPop(false)}}
            style={{height:37,width:191,backgroundColor:'#3680E1',marginTop:40,
borderWidth:1,borderRadius:10,borderColor:'#3680E1',marginRight:10,alignSelf:'center',marginBottom:20}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Save</Text></TouchableOpacity>

                </View>
            
              </Pressable>
            </Modal>
          </View>
        );
      };

const topCard=()=>{

    return(
        <View style={{marginTop:10}}>
        <TouchableOpacity
       
       style={{width:360,borderColor:'#868686',
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
<View style={{flexDirection:"row",height:45,marginTop:5,marginLeft:5}}>
   <View style={{width:screenWidth/2}}>
   <Text style={{color:'#868686',fontSize:14}}>Contact</Text>
   <Text>+251-912345678</Text>
   </View>
   <View style={{width:screenWidth/2}}>
   <Text style={{textAlign:'right',marginRight:100,color:'#868686',fontSize:14}}>Address</Text>
   <Text style={{textAlign:'right',marginRight:125}}>Bole</Text>
   </View>

</View>

<View style={{flexDirection:"row",height:45,marginLeft:5}}>
   <View style={{width:screenWidth/2}}>
   <Text style={{color:'#868686',}}>Vacancies
</Text>
   <Text>3</Text>
   </View>
   <View style={{width:screenWidth/2,}}>
   <Text style={{marginLeft:37,color:'#868686'}}>Matched Candidates</Text>
   <Text style={{textAlign:'right',marginRight:145}}>3</Text>
   </View>

</View>

<View style={{flexDirection:"row",height:45,marginLeft:5}}>
   <View style={{width:screenWidth/2 ,flexDirection:"row"}}>
   <Text style={{color:'#868686',}}>Date Matched:
</Text>
   <Text style={{marginLeft:5}}>Nov 15/2023</Text>
   </View>


</View>
        </TouchableOpacity>



        </View>
    )
}

const twoCard=()=>{
    return(
     <View style={{width:360,height:128,backgroundColor:"#D3F8F6",alignSelf:"center",borderWidth:1,borderRadius:10,borderColor:"#D3F8F6"}}>
<View style={{marginTop:10,marginLeft:10}}>
    <Text style={{fontSize:14}}>Abebe abebe</Text>
    <Text style={{fontSize:14,marginTop:5}}>Status: <Text style={{color:'#3680E1'}}>Matched</Text></Text>
    <Text style={{fontSize:14,marginTop:5}}>Job Title: Customer Service</Text>
    <Text style={{fontSize:14,marginTop:5}}>Interview Result: 45%</Text>
    <Text style={{fontSize:10,color:'grey',marginTop:5}}>Added on Oct 21/2023 2:30PM</Text>
    
</View>
     </View>
    )
}

const thirdCard=()=>{
    return(
     <View style={{width:360,height:128,backgroundColor:"#D3F8F6",alignSelf:"center",borderWidth:1,borderRadius:10,borderColor:"#D3F8F6",marginTop:10}}>
<View style={{marginTop:10,marginLeft:10}}>
    <Text style={{fontSize:14}}>Abebe abebe</Text>
    <Text style={{fontSize:14,marginTop:5}}>Status: <Text style={{color:'#3680E1'}}>Matched</Text></Text>
    <Text style={{fontSize:14,marginTop:5}}>Job Title: Customer Service</Text>
 <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{setShowPop(true)}}>
    <Image
    source={require("../assets/add.png")}
    style={{
        width:20,
        height:20,
        marginTop:5
    }}
    />
    <Text style={{fontSize:14,marginTop:5,marginLeft:5}}>Add Interview result</Text>
 </TouchableOpacity>
    <Text style={{fontSize:10,color:'grey',marginTop:5,alignSelf:"flex-end",marginRight:10}}>Added on Oct 21/2023 2:30PM</Text>
    
</View>
     </View>
    )
}

const fourthCard=()=>{

    return(
        <View style={{marginTop:10}}>
<TouchableOpacity  
// onPress={()=>{navigation.navigate('editcandid')}}
style={{width:360,height:80,alignSelf:'center',borderBottomWidth:1,borderColor:'grey'}}>

<View style={{flex:1,flexDirection:'row',marginTop:10,marginLeft:10,maxHeight:20}}>
           <Text style={{fontSize:14,color:'#273469',fontWeight:'500'}}>Abebe abebe</Text>
         <View style={{marginLeft:80,marginLeft:200,top:10}}>
         <View style={{width:30,height:30,backgroundColor:"orange",borderWidth:1,borderRadius:50,borderColor:'orange'}}>
<Text style={{flex:1,alignSelf:'center',textAlignVertical:'center',color:"white"}}>M</Text>
         </View>
                </View>
           </View>
           

           <View style={{marginHorizontal:10,marginBottom:5}}>
    
                <Text style={{fontSize:14,color:'#273469'}}>Customer Service</Text>
             
                <Text style={{fontSize:10,color:'grey'}}>Added on Oct 21/2023 2:30PM</Text>
           </View>

          
</TouchableOpacity>
{/* second card */}

<TouchableOpacity
// onPress={()=>{navigation.navigate('editcandid')}}
style={{width:360,height:80,alignSelf:'center',borderBottomWidth:1,borderColor:'grey'}}>

<View style={{flex:1,flexDirection:'row',marginTop:10,marginLeft:10,maxHeight:20}}>
           <Text style={{fontSize:14,color:'#273469',fontWeight:'500'}}>Abebe abebe</Text>
         <View style={{marginLeft:200,top:10}}>
         <View style={{width:30,height:30,backgroundColor:"blue",borderWidth:1,borderRadius:50,borderColor:'blue'}}>
<Text style={{flex:1,alignSelf:'center',textAlignVertical:'center',color:"white"}}>M</Text>
         </View>
                </View>
           </View>
           

           <View style={{marginHorizontal:10,marginBottom:5}}>
    
                <Text style={{fontSize:14,color:'#273469'}}>Customer Service</Text>
             
                <Text style={{fontSize:10,color:'grey'}}>Added on Oct 21/2023 2:30PM</Text>
           </View>

          
</TouchableOpacity>
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
          Matching
            </Text>
          
            </View>
            <View style={{marginTop:12,backgroundColor:'#CDDFF7',height:2}}></View>
          
{/* {card()} */}
{/* {isMatched ? matched(): notMatched()} */}
{topCard()}
{twoCard()}
{thirdCard()}
{fourthCard()}
{showpop && popUp()}
            
        </ScrollView>
    )
}