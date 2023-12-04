import React, { useState } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback, ImageBackground } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import BottomNav from "./BottomNav";
import { IndexPath, Layout, Select, SelectItem ,Input} from '@ui-kitten/components';
import { Pressable } from "react-native";
import Constants from 'expo-constants';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import ComapniesTab from './DashBoard/CompaniesTab'
import ScheduleTab from './DashBoard/ScheduleTab'
export default function HomeScreen({navigation}){
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [employeeTab , setEmployeeTab] = useState(true)
    const [companyTab , setCompanyTab] = useState(false)
    const [scheduleTab , setScheduleTab] = useState(false)
    const next=()=>{
navigation.navigate('dashboard')
    }

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
        <TouchableOpacity onPress={()=>{navigation.navigate('filter')}}>
        <Image
                  style={
                    { width: 16, height: 16}
                  }
                  source={require("../assets/filter.png")}
                  
                />
        </TouchableOpacity>
      )

    const mainCont=()=>{
        return(
<View>
    <View style={{flex:1,flexDirection:"row"}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('profile')}} style={{flexDirection:"row",marginTop:50,marginLeft:20}}>
    <Image
                  style={
                    { width: 50, height: 50}
                  }
                  source={require("../assets/profile10.png")}
                />
                <Text style={{marginLeft:10,marginTop:15,fontSize:18,fontWeight:'500'}}>Biruk</Text>
                </TouchableOpacity>


                <View style={{flexDirection:"row",marginTop:55,marginLeft:20,width:screenWidth/2,justifyContent:'flex-end',right:-20}}>
    
                {/* <Select
                // appearance={{c}}
               placeholder='AMH'
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
        style={{width:120,backgroundColor:'white'}}
      >
        <SelectItem title='Amharic' />
        <SelectItem title='English' />
       
      </Select> */}
      <TouchableOpacity onPress={()=>{navigation.navigate('notir')}}>
                <Image
                  style={
                    { width: 24, height: 24,marginTop:10,marginLeft:5}
                  }
                  source={require("../assets/ring.png")}
                />
                </TouchableOpacity>
                </View>

    </View>
</View>
        )
    }

    const topOption=()=>{
      return(
        <View style={{flex:1,flexDirection:"row",marginTop:10,alignSelf:"center",maxHeight:50}}>
<TouchableOpacity
onPress={()=>{
  setEmployeeTab(true);setCompanyTab(false);setScheduleTab(false)
}}
style={{width:115,height:37}}>
<Text style={ employeeTab ? {flex:1,textAlignVertical:"center",alignSelf:'center',color:"#3680E1"}: {flex:1,textAlignVertical:"center",alignSelf:'center'} }>Employees</Text>
{employeeTab && <View style={{width:115,backgroundColor:"#3680E1",height:2}}></View>}
</TouchableOpacity>

<TouchableOpacity 
onPress={()=>{
  setEmployeeTab(false);setCompanyTab(true);setScheduleTab(false)
}}
style={{width:115,height:37}}>
<Text style={companyTab ? {flex:1,textAlignVertical:"center",alignSelf:'center',color:"#3680E1"}: {flex:1,textAlignVertical:"center",alignSelf:'center'} }>Companies</Text>
{companyTab && <View style={{width:115,backgroundColor:"#3680E1",height:2}}></View>}
</TouchableOpacity>

<TouchableOpacity
onPress={()=>{
  setEmployeeTab(false);setCompanyTab(false);setScheduleTab(true)
}}
style={{width:115,height:37}}>
<Text style={scheduleTab ? {flex:1,textAlignVertical:"center",alignSelf:'center',color:"#3680E1"}:{flex:1,textAlignVertical:"center",alignSelf:'center'} }>Scheduled Jobs</Text>
{scheduleTab && <View style={{width:115,backgroundColor:"#3680E1",height:2}}></View>}
</TouchableOpacity>
        </View>
      )
    }

    const card=()=>{
        return(
            <View>
                <View style={{flexDirection:'row',width:330,alignSelf:'center',backgroundColor:'#D3F8F6',marginTop:40,
            borderWidth:1,borderRadius:10,borderColor:'#D3F8F6'
            }}>
                <View style={{width:100,height:100,justifyContent:'center',alignSelf:"center"}}>
             <Text style={{textAlign:'center'}}>Candidates</Text>       
             <Text style={{textAlign:'center',fontSize:16,top:5}}>50</Text>   
</View>
<View style={{width:100,height:100,justifyContent:'center',alignSelf:"center",marginLeft:10}}>
             <Text style={{textAlign:'center'}}>Hired</Text>       
             <Text style={{textAlign:'center',fontSize:16,top:5}}>10</Text>   
</View>
<View style={{width:100,height:100,justifyContent:'center',marginLeft:10}}>
             <Text style={{textAlign:'center'}}>Job openings</Text>       
             <Text style={{textAlign:'center',fontSize:16,top:5}}>5</Text>   
</View>

                </View>
                


<Input
            placeholder="Search clients or candidates "
            accessoryLeft={renderIcon}
            accessoryRight={renderIconRight}
                style={{
                    width:324,
                  height:37,
                  backgroundColor: "white",
                  elevation: 5,
                  marginTop:24,
                  borderWidth:1,
                  borderRadius:10,
                  borderColor:'white',
                  alignSelf:'center'
                }}
              />

<TouchableOpacity style={{backgroundColor:"#CDDFF7",width:320,height:49, borderWidth:1,
                  borderRadius:10,
                  borderColor:'#CDDFF7',
                  alignSelf:'center',marginTop:24,flexDirection:'row'}}
                  // onPress={()=>{navigation.navigate('addjob')}}
                    onPress={()=>{navigation.navigate('addjob')}}
                  >
                    
<Text style={{flex:1,textAlignVertical:"center",fontSize:16,marginLeft:10}}>Add job openings</Text>
<Image
                  style={
                    { width: 25, height: 25,marginRight:10,top:10}
                  }
                  source={require("../assets/plus.png")}
                  
                />
</TouchableOpacity>
            </View>
        )
    }

    const jobPost =()=>{
        return(
            <View style={{marginTop:24}}>
<Text style={{fontSize:18 ,marginLeft:30,color:'#273469',fontWeight:'700',marginBottom:20}}>Your Job posts</Text>
<View style={{width:340,height:113,backgroundColor:'#F4F0FF',alignSelf:'center',borderWidth:1,borderRadius:10,borderColor:'#F4F0FF'}}>

<View style={{flex:1,flexDirection:'row',marginTop:20,marginLeft:10,maxHeight:30}}>
           <Text style={{fontSize:14,color:'#273469',fontWeight:'500'}}>Customer Service Representative </Text>
         <View style={{marginLeft:80}}>
           <Image
                  style={
                    { width: 24, height: 24}
                  }
                  source={require("../assets/dot.png")}
                />
                </View>
           </View>
           

           <View style={{flexDirection:'row',marginHorizontal:10}}>
            
           <Image
                  style={
                    { width: 16, height: 16}
                  }
                  source={require("../assets/clock.png")}
                />
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

    const candidates=()=>{
        return(
            <View style={{marginTop:24}}>
<Text style={{fontSize:18 ,marginLeft:30,color:'#273469',fontWeight:'700',marginBottom:10}}>Candidates</Text>
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
            
        )
    }

    const NewCard =()=>{

      return(
        <View>
            <View style={{flex:1,flexDirection:"row"}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('profile')}} style={{flexDirection:"row",marginTop:50,marginLeft:20}}>
    <Image
                  style={
                    { width: 50, height: 50}
                  }
                  source={require("../assets/profile10.png")}
                />
                <Text style={{marginLeft:10,marginTop:15,fontSize:18,fontWeight:'500'}}>Biruk</Text>
                </TouchableOpacity>


                <View style={{flexDirection:"row",marginTop:55,marginLeft:20,width:screenWidth/2,justifyContent:'flex-end',right:-20}}>
    
                {/* <Select
                // appearance={{c}}
               placeholder='AMH'
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
        style={{width:120,backgroundColor:'white'}}
      >
        <SelectItem title='Amharic' />
        <SelectItem title='English' />
       
      </Select> */}
      <TouchableOpacity onPress={()=>{navigation.navigate('notir')}}>
                <Image
                  style={
                    { width: 24, height: 24,marginTop:10,marginLeft:5}
                  }
                  source={require("../assets/ring.png")}
                />
                </TouchableOpacity>
                </View>

    </View>
    <View style={{flex:1,alignSelf:'center',marginTop:20,flexDirection:"row",marginLeft:20}}>
          <View style={{flexDirection:'row'}}>
          <View style={{height:66,width:83,backgroundColor:'#E9F1FB',borderWidth:1,borderRadius:10,borderColor:'#E9F1FB'}}>
            <Text style={{color:'#3680E1',fontSize:12,marginTop:15,alignSelf:"center"}}>5</Text>
            <Text  style={{color:'#3680E1',fontSize:12,alignSelf:"center"}}>Candidates</Text>
            </View>
            <View style={{height:66,width:83,backgroundColor:'#E9F1FB',borderWidth:1,borderRadius:10,borderColor:'#E9F1FB',marginLeft:5}}>
            <Text style={{color:'#3680E1',fontSize:12,alignSelf:"center",marginTop:15}}>10</Text>
            <Text  style={{color:'#3680E1',fontSize:12,alignSelf:"center"}}>Employees</Text>
            </View>
          </View>

          <View style={{flex:1,flexDirection:'row',marginLeft:5}}>
          <View style={{height:66,width:83,backgroundColor:'#E9F1FB',borderWidth:1,borderRadius:10,borderColor:'#E9F1FB'}}>
          <Text style={{color:'#3680E1',fontSize:12,alignSelf:"center",marginTop:15}}>3</Text>
            <Text  style={{color:'#3680E1',fontSize:12,alignSelf:"center"}}>Hired</Text>
            </View>
            <View style={{height:66,width:83,backgroundColor:'#E9F1FB',borderWidth:1,borderRadius:10,borderColor:'#E9F1FB',marginLeft:5}}>
            <Text style={{color:'#3680E1',fontSize:12,alignSelf:"center",marginTop:15}}>13</Text>
            <Text  style={{color:'#3680E1',fontSize:12,alignSelf:"center"}}>Jobs</Text>
            </View>
          </View>
          </View>
        </View>
      )
    }

    const middleCont = ()=>{

      return(
        <View style={{marginTop:10}}>
          <View style={{flex:1,flexDirection:"row",justifyContent:'space-between'}}>
          <Text style={{color:'#273469',fontSize:18,fontWeight:'700',marginLeft:20}}>Employees</Text>
          <TouchableOpacity   onPress={()=>{navigation.navigate('elist')}}>
          <Text style={{color:'#273469',fontSize:16,fontWeight:'500',marginRight:20}}>See All</Text>
          </TouchableOpacity>
          </View>

          <View style={{flex:1,flexDirection:"row",justifyContent:'space-between',height:30,backgroundColor:"#E9F1FB",
          
          borderStartStartRadius: 16,borderColor:"#E9F1FB"
          ,width:screenWidth/1.1,alignSelf:'center',marginTop:10}}>
          <Text style={{color:'#273469',fontSize:16,fontWeight:'500',marginLeft:5,marginTop:5}}>Abebe Kebede</Text>
       
          <Text style={{color:'#273469',fontSize:16,fontWeight:'500',marginRight:5,marginTop:5}}>Total
this month
= 80</Text>
     
          </View>
          <BarChart
    data={{
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
      
      datasets: [
        {
          data: [
            // Math.random() * 100,
            // Math.random() * 100,
            // Math.random() * 100,
            // Math.random() * 100,
            // Math.random() * 100,
            // Math.random() * 100
            65,
            20,
            10,
            40,
            35
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width/1.1} // from react-native
    height={220}
   
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundGradientFrom: "#E9F1FB",
      backgroundGradientTo: "#E9F1FB",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `#FFC000`,
      labelColor: (opacity = 1) => `#034DAE`,
      style: {
      
        backgroundColor:'red',
        
      },
      propsForDots: {
      
        strokeWidth: "2",
        stroke: "#ffa726",
        
      }
    }}
    BarChart
    style={{
      
     
      alignSelf:"center",
     
    }}
  />
        </View>
      )
    }
    return(
        <ScrollView style={{backgroundColor:'white',height:screenHeight-Constants.statusBarHeight}} contentContainerStyle={{ flexGrow: 1 }}>
            {/* {mainCont()}
            {card()}
            {jobPost()}
            {candidates()} */}
      <ImageBackground style={{backgroundColor:"#3680E1",borderColor:'#3680E1',borderWidth:1,borderBottomStartRadius:90}}>
        {NewCard()}
        </ImageBackground>    
        {topOption()}
        { employeeTab && middleCont()}
        {companyTab && <ComapniesTab/>}
        {scheduleTab && <ScheduleTab/>}
      {/* {candidates()}  */}
            <BottomNav navigation={navigation}/>
      
            {/* <TouchableOpacity onPress ={()=>{navigation.navigate('addcandid')}}
             style={{width:100,height:40,backgroundColor:'#3680E1',alignSelf:'center',marginTop:30}}></TouchableOpacity>

<TouchableOpacity onPress ={()=>{navigation.navigate('postjob')}}
             style={{width:100,height:40,backgroundColor:'red',alignSelf:'center',marginTop:30}}></TouchableOpacity>

             <TouchableOpacity onPress ={()=>{navigation.navigate('com')}}
             style={{width:100,height:40,backgroundColor:'yellow',alignSelf:'center',marginTop:30}}></TouchableOpacity> */}
        </ScrollView>
    )
}