import React, { useState } from "react";
import { View , Button ,Image ,Modal,ScrollView,Pressable,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import { Calendar } from 'react-native-ethiopian-calendar';
import { useNavigation } from '@react-navigation/native';
export default function CandidatesList({navigation}){

  const [mode, setMode] = React.useState('EC');
  const [locale, setLocale] = React.useState('AMH');
  const [selectedDate, setSelectedDate] = React.useState();

    const [checked, setChecked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showpop ,setShowPop] =useState(false)
    const [showCalanderpop ,setShowCalanderPop] = useState(false)
    const nav = useNavigation();
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

    const MainCont =()=>{
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
              <TouchableOpacity onPress={()=>{navigation.navigate('addcandid')}}>
<Image

source={require("../assets/add.png")}
style={{width:30,height:30,marginLeft:10,marginTop:30}}
/>
</TouchableOpacity>
</View>
              <View style={{flex:1,flexDirection:"row",marginLeft:30,marginTop:20,marginBottom:20}}>
                <TouchableOpacity><Text style={{fontSize:14,fontWeight:"500"}}>All</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{fontSize:14,marginLeft:20}}>Recent</Text></TouchableOpacity>
              </View>
<View>
<TouchableOpacity  
onPress={()=>{navigation.navigate('editcandid')}}
style={{width:340,height:69,backgroundColor:'#E9F1FB',alignSelf:'center',borderWidth:1,borderRadius:10,borderColor:'#F4F0FF'}}>

<View style={{flex:1,flexDirection:'row',marginTop:10,marginLeft:10,maxHeight:30}}>
           <Text style={{fontSize:14,color:'#273469',fontWeight:'500'}}>Abebe abebe</Text>
         <View style={{marginLeft:80,marginLeft:200,top:10}}>
         <View style={{width:30,height:30,backgroundColor:"orange",borderWidth:1,borderRadius:50,borderColor:'orange'}}>
<Text style={{flex:1,alignSelf:'center',textAlignVertical:'center',color:"white"}}>M</Text>
         </View>
                </View>
           </View>
           

           <View style={{marginHorizontal:10,marginBottom:5}}>
    
                <Text style={{fontSize:12}}>Job title</Text>
             
                <Text style={{fontSize:10,color:'grey'}}>Added on Oct 21/2023 2:30PM</Text>
           </View>

          
</TouchableOpacity>
{/* second card */}

<TouchableOpacity
onPress={()=>{navigation.navigate('editcandid')}}
style={{width:340,height:69,marginTop:20,
marginBottom:20
,backgroundColor:'#E9F1FB',alignSelf:'center',borderWidth:1,borderRadius:10,borderColor:'#F4F0FF'}}>

<View style={{flex:1,flexDirection:'row',marginTop:10,marginLeft:10,maxHeight:30}}>
           <Text style={{fontSize:14,color:'#273469',fontWeight:'500'}}>Abebe abebe</Text>
         <View style={{marginLeft:200,top:10}}>
         <View style={{width:30,height:30,backgroundColor:"blue",borderWidth:1,borderRadius:50,borderColor:'blue'}}>
<Text style={{flex:1,alignSelf:'center',textAlignVertical:'center',color:"white"}}>M</Text>
         </View>
                </View>
           </View>
           

           <View style={{marginHorizontal:10,marginBottom:5}}>
    
                <Text style={{fontSize:12}}>Job title</Text>
             
                <Text style={{fontSize:10,color:'grey'}}>Added on Oct 21/2023 2:30PM</Text>
           </View>

          
</TouchableOpacity>
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
          <Text style={{color:"#273469",fontSize:18,fontWeight:'500',marginLeft:10}}>
            
Candidates
            </Text>
          
            </View>
            <View style={{marginTop:12,backgroundColor:'#CDDFF7',height:2}}></View>
      {MainCont()}
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