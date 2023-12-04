import React, { useState,useCallback } from "react";
import { View , Button ,Image ,Modal,Pressable,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import { Calendar } from 'react-native-ethiopian-calendar';
import RangeSlider from 'rn-range-slider';
import { Checkbox } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

export default function EmployeeList({navigation}){
    const [mode, setMode] = React.useState('EC');
    const [locale, setLocale] = React.useState('AMH');
    const [selectedDate, setSelectedDate] = React.useState();
    const [checked, setChecked] = React.useState(false);
    const [isnext , setIsNext] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isSelected,setIsSelected] = useState(false)
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
    const [isMatched , setIsMatched] = useState(true)
    // const [isSelected,setIsSelected] = useState(false)
    const [showpop ,setShowPop] =useState(false)
    const [showCalanderpop ,setShowCalanderPop] = useState(false)
    const nav = useNavigation();
    const renderIconRight = (props)=> (
        <TouchableOpacity onPress={()=>{setShowCalanderPop(true)}}>
        <Image
                  style={
                    { width: 16, height: 16}
                  }
                  source={require("../assets/cal.png")}
                  
                />
        </TouchableOpacity>
      )
      const renderIconRightFil = (props)=> (
        <TouchableOpacity onPress={()=>{setShowPop(true)}}>
        <Image
                  style={
                    { width: 16, height: 16}
                  }
                  source={require("../assets/filter.png")}
                  
                />
        </TouchableOpacity>
      )
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
      const CalendarPopUp = ()=>{
        return (
          <View>
            <Modal
              transparent={true}
              onRequestClose={() => {
               setShowCalanderPop(false)
              }}
            >
                       <Pressable
                            onPress={(event) => event.target == event.currentTarget && setShowCalanderPop(false)}
                            style={{ flex: 1, justifyContent: "center" }}>
                            <View
                              style={{
                                // width: screenWidth / 1.1,
                                alignSelf: "center",
                                position: "relative",
                             
                            
                                height:300
                              }}
                            >
                             
                                <Calendar
                                  hideHeaderButtons={true}
                                  mode={mode}
                                  onDatePress={(date) => {
                                  setShowCalanderPop(false)
                                 
                                    setSelectedDate(date)
                                  }}
                                  onModeChange={(selectedMode) => setMode(selectedMode)}
                                  onLanguageChange={(lang) => setLocale(lang)}
                                  locale={locale}
                                  theme={{
                                    switchButtonColor: "#f27f22",
                                    arrowColor: "#3c6791",
                                    selectedDayBackgroundColor: "#3c6791",
                                    todayTextColor: "#FF6A22",
                                  }}
                                />
                             
                            </View>
                          </Pressable>
            </Modal>
          </View>
        );
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
            <TouchableOpacity onPress={()=>{setShowPop(false);setShowCalanderPop(true)}}
            >
            <Input
                  placeholder="Pick a date"
           disabled={true}
                  accessoryRight={renderIconRight}
                  
                      style={{
                          width:331,
                        height:40,
                        elevation: 5,
                        marginTop:10,
                        marginLeft:27,
                        backgroundColor:'white',
                        borderColor:"#CDDFF7",
                        
                      }}
      
                    />
      </TouchableOpacity>
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


<View style={{flexDirection:'row'}}>
        <Input
            placeholder="Search"
            accessoryLeft={renderIcon}
            accessoryRight={renderIconRightFil}
                style={{
                    width:300,
                  height:37,
                  backgroundColor: "white",
                  elevation: 5,
                  marginTop:24,
                  borderWidth:1,
                  borderRadius:10,
                  borderColor:'white',
                  marginLeft:20
                }}
              />
              <TouchableOpacity  onPress={()=>{navigation.navigate('addjob')}}>
<Image

source={require("../assets/add.png")}
style={{width:30,height:30,marginLeft:10,marginTop:30}}
/>
</TouchableOpacity>
</View>

        <TouchableOpacity
       
       style={{width:360,borderBottomWidth:1,borderColor:'#868686', marginTop:20,
        alignSelf:"center"}}>
<View style={{flexDirection:"row",height:45,marginTop:5,marginLeft:5}}>
   <View style={{width:screenWidth/2}}>
   <Text style={{color:'#868686',fontSize:14}}>First Name</Text>
   <Text>Abreham </Text>
   </View>
   <View style={{width:screenWidth/2}}>
   <Text style={{textAlign:'right',marginRight:95,color:'#868686',fontSize:14}}>Last Name</Text>
   <Text style={{textAlign:'right',marginRight:130}}>Hailu</Text>
   </View>

</View>
<View style={{flexDirection:"row",height:45,marginLeft:5}}>
   <View style={{width:screenWidth/2}}>
   <Text style={{color:'#868686',}}>Companies Registered
</Text>
   <Text>10</Text>
   </View>
   <View style={{width:screenWidth/2,}}>
   <Text style={{marginLeft:30,color:'#868686'}}>Jobs</Text>
   <Text style={{textAlign:'right',marginRight:145}}>24</Text>
   </View>

</View>

<View style={{flexDirection:"row",height:45,marginLeft:5}}>
   <View style={{width:screenWidth/2}}>
   <Text style={{color:'#868686',}}>Phone Number
</Text>
   <Text>+251983776635</Text>
   </View>
   <View style={{width:screenWidth/2,}}>
   <Text style={{marginLeft:34,color:'#868686'}}>Date Joined</Text>
   <Text style={{textAlign:'right',marginRight:80}}>Nov20,2023</Text>
   </View>

</View>

<View style={{flexDirection:"row",height:45,marginLeft:5}}>
   <View style={{width:screenWidth/2}}>
   <Text style={{color:'#868686',}}>Pwerformance Baseline
</Text>
   <Text>Weekly</Text>
   </View>
   <View style={{width:screenWidth/2,}}>
   <Text style={{marginLeft:37,color:'#868686'}}>Weekly Target</Text>
   <Text style={{textAlign:'right',marginRight:140}}>15</Text>
   </View>

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
       Employees
            </Text>
          
            </View>
            <View style={{marginTop:12,backgroundColor:'#CDDFF7',height:2}}></View>

{matched()}

{showpop && 
      
      <View style={{bottom:0,position:"absolute",}}>
      {popUp()}
      </View>}
      {showCalanderpop &&
      <View>
      {CalendarPopUp()}
      </View>}
            
        </ScrollView>
    )
}