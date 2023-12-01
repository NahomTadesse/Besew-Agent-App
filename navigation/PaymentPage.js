import React, { useState } from "react";
import { View , Button ,Image ,Modal,ScrollView,Pressable,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import Interview from "./Interview";

import { useNavigation } from '@react-navigation/native';
export default function PaymentPage({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showpop ,setShowPop] =useState(false)
    const [showInteviewPop ,setShowInterviewPop] =useState(false)
    const nav = useNavigation();
//     <Image
//     style={
//       { width: 50, height: 50}
//     }
//     source={require("../assets/profile10.png")}
//   />
  const CardDetail = [
    {
         Name : "Tele Birr",
  Image:require("../assets/t.png"),

    },
    {
        Name : "Tele Birr",
 Image:require("../assets/t.png"),

   },
   {
    Name : "Tele Birr",
Image:require("../assets/t.png"),

},
{
    Name : "Tele Birr",
Image:require("../assets/t.png"),

},
{
    Name : "Tele Birr",
Image:require("../assets/t.png"),

},
{
    Name : "Tele Birr",
Image:require("../assets/t.png"),

},


  ]

const InterviewPopUp =()=>{

  return(
    <View>
            <Modal
              transparent={true}
              onRequestClose={() => {
               setShowInterviewPop(false)
              }}
            >
              <Pressable
              onPress={(event) => event.target == event.currentTarget && setShowInterviewPop(false)}
           style={{
           flex: 1,
           justifyContent: "center",
  
           backgroundColor: "#30343F",
           opacity: 0.9,}}
              >
         <View style={{width:281,height:289,alignSelf:"center",backgroundColor:"white",borderWidth:1,borderRadius:10,borderColor:"white"}}>
<Text style={{alignSelf:"center",color:"#3680E1",marginTop:30,fontSize:14,fontWeight:"500"}}>Unlock premium to see all</Text>
<Text style={{alignSelf:"center",color:"#3680E1",fontSize:14,fontWeight:"500"}}>candidates profile</Text>
<Text style={{alignSelf:"center",marginTop:14,marginHorizontal:10}}>Upgrade to Premium to Unlock Full Access to Candidate Profiles.  Premium members enjoy enhanced candidate visibility and a suite of exclusive tools for successful placements. </Text>
<View style={{alignSelf:"center",flexDirection:"row",marginTop:20}}>


    <TouchableOpacity onPress={()=>{navigation.navigate('interview');setShowInterviewPop(false)}} style={{backgroundColor:"#3680E1",alignSelf:"center",marginLeft:20,width:103, height:42,marginTop:10,borderWidth:1,
    borderColor:"#3680E1",borderRadius:10,marginBottom:20
    
    }}>
        <Text style={{color:"white",textAlignVertical:"center",alignSelf:"center",flex:1,fontSize:14}}>Upgrade</Text>
   
    </TouchableOpacity>
</View>
         </View>
            
              </Pressable>
            </Modal>
          </View>
  )
}

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
                <View style={{width:screenWidth,height:307,backgroundColor:'white',alignSelf:'center',borderWidth:1,borderTopEndRadius:60,borderTopStartRadius:60,borderColor:'white',elevation:2}}>
               
               <Text style={{fontSize:14,marginLeft:30,marginTop:40}}>Company</Text>
                <Select
        selectedIndex={selectedIndex}
        placeholder="Select"
        
        onSelect={index => setSelectedIndex(index)}
        style={{width:331,marginTop:10,alignSelf:'center',marginBottom:5,backgroundColor:'white',
    borderColor:"#CDDFF7",borderWidth:2
    }}
      >
        <SelectItem title='Company 1' />
        <SelectItem title='Company 2' />
       
      </Select>

      <Text style={{fontSize:14,marginLeft:30,marginTop:10}}>Date</Text>
      <Input
            placeholder="Pick a date"
      editable={false}
            accessoryRight={renderIconRight}
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
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Apply</Text></TouchableOpacity>

                </View>
            
              </Pressable>
            </Modal>
          </View>
        );
      };
    const renderIcon = (props)=> (
        <TouchableWithoutFeedback >
        <Image
                  style={
                    { width: 16, height: 16}
                  }
                  source={require("../assets/se.png")}
                  
                />
        </TouchableWithoutFeedback>
      )
      const renderIconRight = (props)=> (
        <TouchableOpacity onPress={()=>{setShowPop(true)}}>
        <Image
                  style={
                    { width: 16, height: 16}
                  }
                  source={require("../assets/banknote.png")}
                  
                />
        </TouchableOpacity>
      )

const topCont=()=>{

    return(
        <View>
            <Text style={{color:"#1E2749"}}>
            Congratulations on your new job! 
            </Text>
            <Text style={{color:"#868686"}}>
            To ensure a seamless hiring process, please{'\n'}complete the payment for associated fees.Once{'\n'
            }processed, you'll receive a confirmation or receipt.
            {'\n'}Your payment is the final step to officially secure your{'\n'}
            position.
            </Text>
            <Text style={{color:"#868686"}}>
            If you don’t have any of  these payment method.{'\n'}Contact us here.
            </Text>
            <View style={{marginTop:27,marginBottom:30}}>
                <Input
                keyboardType="numeric"
                accessoryLeft={renderIconRight}
                placeholder="Amount"
                style={{width:304}}
                />
            </View>
            
        </View>
    )
}

      const card = () => {
        const rows = [];
        const cardsPerRow = 3;
      
        for (let i = 0; i < CardDetail.length; i += cardsPerRow) {
          const row = (
            <View style={{ flexDirection: 'row' }}>
              {CardDetail.slice(i, i + cardsPerRow).map((j, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setShowInterviewPop(true);
                    }}
                    style={{
                      width: 98,
                      height: 106,
                      backgroundColor: '#E9F1FB',
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: '#E9F1FB',
                     
                      marginTop: 10,
                      marginRight: index < cardsPerRow - 1 ? 10 : 0,
                    }}
                  >
                    <View style={{}}>
                      <Image
                        source={j.Image}
                        style={{ width: 74, height: 40, marginTop: 15, marginLeft: 10 }}
                      />
                    </View>
                    <View style={{width:22,height:22,borderWidth:4,borderRadius:50,borderColor:"#E6E6E6",alignSelf:"center",marginTop:10}}>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
      
          rows.push(row);
        }
      
        return <View>{rows}</View>;
      };


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
          <Text style={{color:"#273469",fontSize:18,fontWeight:'500',marginLeft:10}}>
  payment
            </Text>
          
            </View>
            <View style={{marginTop:12,backgroundColor:'#CDDFF7',height:2}}></View>
            <View style={{ alignSelf:"center",marginTop:20}}>
                {topCont()}
                <Text style={{color:"#1E2749",fontWeight:'500'}}>
                Choose payment options
            </Text>
            <View style={{}}>
            {card()}
            </View>
           
            </View>

           
<TouchableOpacity
            // onPress={()=>{navigation.navigate('feedback')}}
            style={{height:48,width:250,backgroundColor:'#3680E1',marginTop:40,
borderWidth:1,borderRadius:10,borderColor:'#3680E1',marginRight:10,alignSelf:'center',marginBottom:20}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Pay</Text></TouchableOpacity>
    
      {/* {showpop && 
      
      <View style={{bottom:0,position:"absolute",}}>
      {popUp()}
     
      </View>}

      {showInteviewPop && 
      
      <View style={{alignSelf:"center"}}>
      {InterviewPopUp()}
     
      </View>} */}
      
</ScrollView>
    )
}