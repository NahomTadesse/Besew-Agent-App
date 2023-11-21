import React, { useState } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';

export default function AddJobOpening({navigaion}){
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [checked, setChecked] = React.useState(false);
const[isFirst,setFirst] = useState(true)
const[isSecond,setSecond] = useState(false)

const firstBtn = ()=>{
setFirst(false)
setSecond(true)
}
const SecondBtn = ()=>{
    
}
    const mainCont =()=>{

        return(
            <View style={{marginTop:20}}>
                        <Input
            label="Employer name"
            style={{
                width:328,
              height:55,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10
            }}
          />
                            <Input
            label="Employment type"
            style={{
                width:328,
              height:55,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10
            }}
          />
                            <Input
            label="Phone number"
            style={{
                width:328,
              height:55,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10
            }}
          />
                               <Input
            label="Location"
            style={{
                width:328,
              height:55,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10
            }}
          />
 <TouchableOpacity onPress={firstBtn} style={{height:48,width:250,backgroundColor:'#3680E1',marginTop:40,
borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',marginRight:10,alignSelf:'center',marginBottom:20}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Next</Text></TouchableOpacity>
          
            </View>

        )
    }
    const addJob =()=>{

        return(
            <View style={{marginTop:20}}>

<View style={{flex:1,flexDirection:'row',marginLeft:20,height:50,marginTop:20}}>
 
 <Text style={{fontSize:14,marginLeft:7,color:'#30343F'}}>Add this job to the “ABC Company”{'\n'}template for later use</Text>

<Toggle
checked={checked}
//   onChange={onCheckedChange}
style={{marginLeft:55,marginBottom:20}}
>

</Toggle>

</View>
                        <Input
            label="Enter job title *"
            style={{
                width:328,
              height:55,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10
            }}
          />
                            <Input
            label="Experience"
            style={{
                width:328,
              height:55,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10
            }}
          />
                            <Input
            label="Skills required"
            style={{
                width:328,
              height:55,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10
            }}
          />
                               <Input
            label="Gender"
            style={{
                width:328,
              height:55,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10,
            
            }}
          />

          {/* here */}
          <Text style={{marginLeft:30,marginTop:10,color:'#30343F',fontSize:14}}>Required point of contact</Text>
          <RadioGroup
        selectedIndex={selectedIndex}
        onChange={index => setSelectedIndex(index)}
        style={{flexDirection:"row" , marginLeft:30,marginBottom:10}}
      >
        <Radio>
Yes
        </Radio>
        <Radio>
NO
        </Radio>
 
      </RadioGroup>
          <Input
          size="large"
            label="Job description"
            
            style={{
                width:328,
              maxHeight:147,
            
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10
            }}
          />
                                     <Input
            label="Vacancies"
            style={{
                width:328,
              height:55,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10
            }}
          />
                                     <Input
            label="Charge"
            style={{
                width:328,
              height:55,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10
            }}
          />
                                     <Input
            label="Deadline"
            style={{
                width:328,
              height:55,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10
            }}
          />
                                     <Input
            label="Salary"
            style={{
                width:328,
              height:55,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10
            }}
          />
          <View style={{flexDirection:"row",alignSelf:'center'}}>
          <TouchableOpacity  style={{height:48,width:144,backgroundColor:'white',marginTop:40,
borderWidth:1,borderRadius:10,borderColor:'#3680E1',marginRight:10,alignSelf:'center',marginBottom:20}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'#3680E1'}}>Add another job</Text></TouchableOpacity>

<TouchableOpacity style={{height:48,width:144,backgroundColor:'#3680E1',marginTop:40,
borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',marginRight:10,alignSelf:'center',marginBottom:20}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Done</Text></TouchableOpacity>
          </View>
            </View>

        )
    }

    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{backgroundColor:"white"}} >
        <View style={{flexDirection:'row',marginTop:42}}>
          <Image
              style={
                { width: 24, height: 24,marginLeft:20,marginTop:3}
              }
              source={require("../assets/arr.png")}
            />
          <Text style={{color:"#273469",fontSize:20,fontWeight:'500',marginLeft:10}}>{isFirst ? 'Add Employer' : 'Add New Job'}</Text>
          
            </View>
            {isFirst ? mainCont():addJob()}
           
        </ScrollView>
    )
}