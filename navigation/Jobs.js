import React, { useState } from "react";
import { View , Button ,Image ,Modal,ScrollView,Pressable,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import Interview from "./Interview";
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-ethiopian-calendar';
export default function Jobs({navigation}){

  const [mode, setMode] = React.useState('EC');
  const [locale, setLocale] = React.useState('AMH');
  const [selectedDate, setSelectedDate] = React.useState();
    const [checked, setChecked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showpop ,setShowPop] =useState(false)
    const nav = useNavigation();
    const [showInteviewPop ,setShowInterviewPop] =useState(false)
    const [showCalanderpop ,setShowCalanderPop] = useState(false)
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
  const JobDetail = [
    {
      Job :'Customer Service Representative',
      Time : 'Full Time',
      Company:"Global Services Inc.",
      Location : 'Addis Ababa',
      Duration:'1-2years',
      Deadline :'Nov 10',
      Vacancies:"10",
      Price:'5000ETB',
      isInterviewd:true

    },
    {
      Job :'Customer Service Representative',
      Time : 'Full Time',
      Company:"Global Services Inc.",
      Location : 'Addis Ababa',
      Duration:'1-2years',
      Deadline :'Nov 10',
      Vacancies:"10",
      Price:'5000ETB',
      isInterviewd:false

    }
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
         <View style={{width:286,height:192,alignSelf:"center",backgroundColor:"white"}}>
<Text style={{alignSelf:"center",color:"#3680E1",marginTop:20,fontSize:16}}>Interview</Text>
<Text style={{alignSelf:"center",marginTop:14}}>The job requires an interview and the candidate is not interviewed</Text>
<View style={{alignSelf:"center",flexDirection:"row",marginTop:20}}>
<TouchableOpacity  onPress={()=>{setShowInterviewPop(false)}} style={{alignSelf:"center",width:103,height:42,marginTop:10,borderWidth:1,
    borderColor:"#3680E1",borderRadius:10,marginBottom:20
    
    }}>
        <Text style={{color:"#3680E1",textAlignVertical:"center",alignSelf:"center",flex:1,fontSize:14}}>Cancel</Text>
   
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{navigation.navigate('interview');setShowInterviewPop(false)}} style={{backgroundColor:"#3680E1",alignSelf:"center",marginLeft:20,width:103, height:42,marginTop:10,borderWidth:1,
    borderColor:"#3680E1",borderRadius:10,marginBottom:20
    
    }}>
        <Text style={{color:"white",textAlignVertical:"center",alignSelf:"center",flex:1,fontSize:14}}>Interview Now</Text>
   
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
      disabled={true}
            accessoryRight={renderIconRightdate}
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

      const renderIconRightdate = (props)=> (
        <TouchableOpacity onPress={()=>{setShowCalanderPop(true)}}>
        <Image
                  style={
                    { width: 16, height: 16}
                  }
                  source={require("../assets/cal.png")}
                  
                />
        </TouchableOpacity>
      )

      const renderIconRight = (props)=> (
        <TouchableOpacity onPress={()=>{setShowPop(true)}}>
        <Image
                  style={
                    { width: 16, height: 16}
                  }
                  source={require("../assets/filter.png")}
                  
                />
        </TouchableOpacity>
      )
const Interviewed =(index)=>{

  if( JobDetail[index].isInterviewd == true){

    navigation.navigate('canlist')
  }

  else {
setShowInterviewPop(true)
  }

}

const card =()=>{

  return JobDetail.map((j,index)=>{

    return(
<TouchableOpacity onPress={()=>{navigation.navigate('jobdetail')}}  style={{width:340,height:113,backgroundColor:'#F4F0FF',alignSelf:'center',borderWidth:1,borderRadius:10,borderColor:'#F4F0FF',marginBottom:20}}>

<View style={{flex:1,flexDirection:'row',marginTop:10,marginLeft:10,maxHeight:20}}>
           <Text style={{fontSize:14,color:'#273469',fontWeight:'500'}}>{j.Job}</Text>
        
         <TouchableOpacity
         onPress={()=>{Interviewed(index)}}
         style={{marginLeft:80}}>
           <Image
                  style={
                    { width: 24, height: 24}
                  }
                  source={require("../assets/dot.png")}
                />
                </TouchableOpacity>
               
           </View>
           
           <Text style={{fontSize:14,color:'#273469',fontWeight:'500',marginLeft:10,marginBottom:5}}>{j.Company}</Text>
           <View style={{flexDirection:'row',marginHorizontal:10}}>
            
           <Image
                  style={
                    { width: 16, height: 16}
                  }
                  source={require("../assets/clock.png")}
                />
                <Text style={{fontSize:12,color:'#D1462F',marginLeft:5}}>{j.Time}</Text>

                <Image
                  style={
                    { width: 16, height: 16,marginLeft:50}
                  }
                  source={require("../assets/map.png")}
                />
                <Text style={{fontSize:12,color:'#D1462F',marginLeft:5}}>{j.Location}</Text>

                <Image
                  style={
                    { width: 16, height: 16,marginLeft:40}
                  }
                  source={require("../assets/case.png")}
                />
                <Text style={{fontSize:12,color:'#D1462F',marginLeft:5}}>{j.Duration}</Text>
           </View>

           <View style={{flexDirection:"row",marginHorizontal:10,marginTop:10}}>

            <Text style={{fontSize:14}}>Deadline: {j.Deadline}</Text>
            <Text style={{fontSize:14,marginLeft:20}}>Vacancies: {j.Vacancies}</Text>
            <Image
                  style={
                    { width: 24, height: 24,marginLeft:20,bottom:3,marginRight:5}
                  }
                  source={require("../assets/banknote.png")}
                />
            <Text style={{fontSize:14}}>{j.Price}</Text>
           </View>
</TouchableOpacity>
    )
  })
}



    const MainCont =()=>{
   return(
    <View>
        <View style={{flexDirection:'row'}}>
        <Input
            placeholder="Search"
            accessoryLeft={renderIcon}
            accessoryRight={renderIconRight}
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
              <TouchableOpacity onPress={()=>{navigation.navigate('postjob')}}>
<Image

source={require("../assets/add.png")}
style={{width:30,height:30,marginLeft:10,marginTop:30}}
/>
</TouchableOpacity>
</View>
              <View style={{flex:1,flexDirection:"row",marginLeft:20,marginTop:20,marginBottom:20}}>
                <TouchableOpacity style={{width:89,height:33,backgroundColor:"#3680E1",borderWidth:1,borderRadius:10,borderColor:"#3680E1"}}><Text style={{fontSize:14,color:"white",alignSelf:"center",textAlignVertical:"center",flex:1}}>Posted</Text></TouchableOpacity>
                <TouchableOpacity style={{width:89,height:33,borderWidth:1,borderRadius:10,marginLeft:20,borderColor:"#3680E1"}}><Text style={{fontSize:14,alignSelf:"center",textAlignVertical:"center",flex:1}}>Not Posted</Text></TouchableOpacity>
                <TouchableOpacity style={{width:89,height:33,borderWidth:1,borderRadius:10,marginLeft:20,borderColor:"#3680E1"}}><Text style={{fontSize:14,alignSelf:"center",textAlignVertical:"center",flex:1}}>Verified</Text></TouchableOpacity>
              </View>
<View>

{card()}



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
            
     Jobs
            
            </Text>
          
            </View>
            <View style={{marginTop:12,backgroundColor:'#CDDFF7',height:2}}></View>
      {MainCont()}
      {showpop && 
      
      <View style={{bottom:0,position:"absolute",}}>
      {popUp()}
     
      </View>}

      {showInteviewPop && 
      
      <View style={{alignSelf:"center"}}>
      {InterviewPopUp()}
     
      </View>}
      {showCalanderpop &&
      <View>
      {CalendarPopUp()}
      </View>}
</ScrollView>
    )
}