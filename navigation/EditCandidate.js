import React, { useState } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,
    Pressable,
    Text,TouchableWithoutFeedback,Modal } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';

export default function EditCandidate({navigation}){

    const [selectedIndex, setSelectedIndex] = useState(0)
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
                  justifyContent: "center",
                  backgroundColor: "white",
                  opacity: 0.9,
                }}
              >
                <View style={{width:271,height:238,backgroundColor:'white',alignSelf:'center',elevation:2}}>
<Text style={{alignSelf:"center",marginTop:60,fontWeight:'400',fontSize:14}}> Are you sure you want to delete {'\n'}
{'                '}this candidate?</Text>

<View style={{flexDirection:"row",alignSelf:'center',marginTop:40}}>
    <TouchableOpacity style={{width:100,height:32,backgroundColor:'#D1462F'}}>
        <Text style={{flex:1,textAlignVertical:"center",alignSelf:"center",color:"white"}}>NO</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:100,height:32,backgroundColor:'#00B050',marginLeft:20}}>
        <Text style={{flex:1,textAlignVertical:"center",alignSelf:"center",color:"white"}}>YES</Text>
    </TouchableOpacity>
</View>
                </View>

            
              </Pressable>
            </Modal>
          </View>
        );
      };
    const MainCont =()=>{
        return(
            <View>
            
            <Input
            size="small"
            placeholder="Abebe Kebede"
            label='Candidate Name'
            style={{
                width:304,
            alignSelf:'center',
                marginTop:20,
                backgroundColor: "white",
                borderWidth:0,
                marginRight:5,
                borderBottomWidth:1,
                borderColor:"black",
                height:40,
              
            }}
   />
   

      <Input
      placeholder="0955655546"
            label='Candidate  Phone Number'
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
         placeholder="Contract"
            label='Candidate job type number'
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
placeholder="2+ years"
            label='Experience'
            size="small"
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
      <Input
      placeholder="lorem ipsum"
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
      placeholder="lorem ipsum"
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
      placeholder="lorem ipsum"
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
         placeholder="Nov 30,2023"
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
            placeholder="2000-5000"
            label='Salary range'
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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{backgroundColor:'white'}}>

<View style={{flexDirection:'row',marginTop:42}}>
              <Image
                  style={
                    { width: 24, height: 24,marginLeft:20,marginTop:3}
                  }
                  source={require("../assets/arr.png")}
                />
              <Text style={{color:"#273469",fontSize:20,fontWeight:'500',marginLeft:10}}>Edit</Text>
              <TouchableOpacity><Text style={{color:'green',fontSize:18,fontWeight:'500',marginTop:3,marginLeft:220}}>Save</Text></TouchableOpacity>
                </View>
                {showpop && popUp()}
            {MainCont()}
            <TouchableOpacity
            onPress={()=>{setShowPop(true)}}
            style={{height:48,width:250,backgroundColor:'#D1462F',marginTop:40,
borderWidth:1,borderRadius:10,borderColor:'#D1462F',marginRight:10,alignSelf:'center',marginBottom:20}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Delete Candidate</Text></TouchableOpacity>

<TouchableOpacity
            onPress={()=>{navigation.navigate('feedback')}}
            style={{height:48,width:250,backgroundColor:'#3680E1',marginTop:5,
borderWidth:1,borderRadius:10,borderColor:'#3680E1',marginRight:10,alignSelf:'center',marginBottom:20}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>FeedBack</Text></TouchableOpacity>

        </ScrollView>
    )
}