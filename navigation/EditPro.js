import React, { useState } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
export default function EditPro({navigation}){
    const [selectedIndex, setSelectedIndex] = useState(0)
    const nav = useNavigation();
    const MainCont =()=>{
        return(
            <View>
            
            <Input
             size="small"
            label='Enter job title'
            style={{
                width:304,
                height:40,
            alignSelf:'center',
                marginTop:20,
                backgroundColor: "white",
                borderWidth:0,
                marginRight:5,
                borderBottomWidth:1,
                borderColor:"black",
               
              
            }}
   />
   
   <Select
        selectedIndex={selectedIndex}
        placeholder="Employment Type"
        
        onSelect={index => setSelectedIndex(index)}
        style={{width:315,marginTop:30,alignSelf:'center',backgroundColor:'white'}}
      >
        <SelectItem title='Full Time' />
        <SelectItem title='Part Time' />
       
      </Select>
      <Input
            label='Experience'
            size="small"
            style={{
               
                width:314,
                height:40,
            alignSelf:'center',
                marginTop:20,
                backgroundColor: "white",
                borderWidth:0,
                marginRight:5,
                borderBottomWidth:1,
                borderColor:"black",
               
              
            }}
   />
      <Input
            label='Job description'
            size="small"
            style={{
               
                width:304,
                height:40,   
            alignSelf:'center',
                marginTop:30,
                backgroundColor: "white",
                borderWidth:0,
                marginRight:5,
                borderBottomWidth:1,
                borderColor:"black",
               
              
            }}
   />
      <Input
            label='Vacancies'
            size="small"
            style={{
               
                width:304,
                height:40,
            alignSelf:'center',
                marginTop:30,
                backgroundColor: "white",
                borderWidth:0,
                marginRight:5,
                borderBottomWidth:1,
                borderColor:"black",
               
              
            }}
   />
      <Input
            label='Charge'
            size="small"
            style={{
               
                width:304,
                height:40,  
            alignSelf:'center',
                marginTop:30,
                backgroundColor: "white",
                borderWidth:0,
                marginRight:5,
                borderBottomWidth:1,
                borderColor:"black",
               
              
            }}
   />
      <Input
            label='Deadline'
            size="small"
            style={{
               
                width:304,
                height:40,
            alignSelf:'center',
                marginTop:30,
                backgroundColor: "white",
                borderWidth:0,
                marginRight:5,
                borderBottomWidth:1,
                borderColor:"black",
               
              
            }}
   />
         <Input
            label='Salary'
            size="small"
            style={{
               
                width:304,
              height:40,
            alignSelf:'center',
                marginTop:30,
                backgroundColor: "white",
                borderWidth:0,
                marginRight:5,
                borderBottomWidth:1,
                borderColor:"black",
               
              
            }}
   />

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
          <Text style={{color:"#273469",fontSize:20,fontWeight:'500',marginLeft:10}}>Edit Professional Information</Text>
          <TouchableOpacity><Text style={{color:'green',fontSize:18,fontWeight:'500',marginTop:3,marginLeft:10}}>Save</Text></TouchableOpacity>
            </View>
        {MainCont()}
    </ScrollView>
    )
}