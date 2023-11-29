import React, { useState } from "react";
import { View , Button ,Image ,Modal,ScrollView,Pressable,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';

export default function Jobs({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
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
                <TouchableOpacity><Text style={{fontSize:14,fontWeight:"500"}}>Posted</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{fontSize:14,marginLeft:20}}>Not Posted</Text></TouchableOpacity>
              </View>
<View>

<TouchableOpacity onPress={()=>{navigation.navigate('jobdetail')}}  style={{width:340,height:113,backgroundColor:'#F4F0FF',alignSelf:'center',borderWidth:1,borderRadius:10,borderColor:'#F4F0FF'}}>

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
</TouchableOpacity>

{/* second card */}
<TouchableOpacity  onPress={()=>{navigation.navigate('jobdetail')}}  style={{width:340,height:113,backgroundColor:'#F4F0FF',alignSelf:'center',borderWidth:1,borderRadius:10,borderColor:'#F4F0FF',marginTop:10}}>

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
</TouchableOpacity>

   {/* third card */}
<TouchableOpacity  onPress={()=>{navigation.navigate('jobdetail')}}  style={{width:340,height:113,backgroundColor:'#F4F0FF',alignSelf:'center',borderWidth:1,borderRadius:10,borderColor:'#F4F0FF',marginTop:10}}>

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
</TouchableOpacity>

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
</ScrollView>
    )
}