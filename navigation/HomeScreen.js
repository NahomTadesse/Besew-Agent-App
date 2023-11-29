import React, { useState } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import BottomNav from "./BottomNav";
import { IndexPath, Layout, Select, SelectItem ,Input} from '@ui-kitten/components';
import { Pressable } from "react-native";
export default function HomeScreen({navigation}){
    const [selectedIndex, setSelectedIndex] = useState(0)
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
    
                <Select
                // appearance={{c}}
               placeholder='AMH'
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
        style={{width:120,backgroundColor:'white'}}
      >
        <SelectItem title='Amharic' />
        <SelectItem title='English' />
       
      </Select>
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
<Text style={{fontSize:18 ,marginLeft:30,color:'#273469',fontWeight:'700',marginBottom:20}}>Candidates</Text>
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
    return(
        <ScrollView style={{backgroundColor:'white'}} contentContainerStyle={{ flexGrow: 1 }} StickyHeaderComponent={[4]}>
            {mainCont()}
            {card()}
            {jobPost()}
            {candidates()}
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