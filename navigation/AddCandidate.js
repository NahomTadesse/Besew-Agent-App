import React, { useState,useCallback } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import { Pressable } from "react-native";
import RangeSlider from 'rn-range-slider';

export default function AddCandidate({navigation}){

//     const renderThumb = useCallback(() => <Thumb/>, []);
// const renderRail = useCallback(() => <Rail/>, []);
// const renderRailSelected = useCallback(() => <RailSelected/>, []);
// const renderLabel = useCallback(value => <Label text={value}/>, []);
// const renderNotch = useCallback(() => <Notch/>, []);
// const handleValueChange = useCallback((low, high) => {
//   setLow(low);
//   setHigh(high);
// }, []);

// const [low, setLow] = useState(low);
// const [high, setHigh] = useState(high);
// const [min, setMin] = useState(Number(props.min));
// const [max, setMax] = useState(Number(props.max));
// const handleRangeChange = useCallback(
//   (lowValue, highValue) => {
//     setLow(lowValue);
//     setHigh(highValue);
//     props.highValue(highValue);

//     props.lowValue(lowValue);
//   },
//   [setLow, setHigh]
// );

    const [checked, setChecked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)

    const candidates=()=>{
return(
  <View></View>
)

    }
    const candidInof=()=>{
        return(
            <View>
                <Text style={{color:"#3680E1",marginBottom:20,marginTop:30,marginLeft:30,fontSize:18,fontWeight:'600'}}>Candidate Information</Text>
                        <Input
                        placeholder="Enter first name"
            label="First Name"
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
                             placeholder="Enter last name"
            label="Last Name"
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
                             placeholder="Phone number"
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
                                placeholder="Enter address"
            label="Address"
            style={{
                width:328,
              height:55,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10
            }}
          />
         {/* <Text style={{flex:1,textAlignVertical:'center',marginLeft:30,marginTop:10,fontSize:14,marginBottom:5,color:'grey'}}>Education</Text> */}
                                   <TouchableOpacity
            style={{
                width:328,
              height:45,
              marginTop:10,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10,
             flexDirection:"row",
             borderWidth:1,
             borderRadius:5,
             borderColor:"white",
             borderWidth:1,
             borderRadius:5,
             borderColor:"white"
           
            }}
          >
<Text style={{flex:1,textAlignVertical:'center',marginLeft:18,fontSize:14,color:'#8f9bb1'}}>Add Education</Text>
<TouchableOpacity style={{width:68,height:23,elevation:5,backgroundColor:'#CDDFF7',marginRight:10,marginTop:10}}>
    <Text style={{flex:1,textAlignVertical:'center',alignSelf:"center",fontSize:12}}>Upload</Text>
</TouchableOpacity>
          </TouchableOpacity>

            </View>
        )
    }
    const jobInfo=()=>{
        return(
            <View style={{}}>
                <Text style={{color:"#3680E1",marginBottom:20,marginTop:30,marginLeft:30,fontSize:18,fontWeight:'600'}}>Job Information</Text>
                        <Input
                        placeholder="Enter job title"
            label="Job Title"
            style={{
                width:328,
              height:55,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10
            }}
          />
             <Select
        selectedIndex={selectedIndex}
        placeholder="ID type"
        
        onSelect={index => setSelectedIndex(index)}
        style={{width:328,marginTop:10,alignSelf:'center',backgroundColor:'white'}}
      >
        <SelectItem title='Kebele' />
        <SelectItem title='Passport' />
       
      </Select>
      {/* <Text style={{flex:1,textAlignVertical:'center',marginLeft:30,marginTop:10,fontSize:14,color:'grey'}}>ID</Text> */}
      <View
            style={{
                width:328,
              height:40,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10,
             flexDirection:"row",
             marginTop:5,
             borderWidth:1,
             borderRadius:5,
             borderColor:"white",
             marginTop:10
           
            }}
          >
<Text style={{flex:1,textAlignVertical:'center',marginLeft:18,fontSize:14,color:'#8f9bb1'}}>Upload your ID</Text>
<TouchableOpacity style={{width:68,height:23,elevation:2,backgroundColor:'#CDDFF7',marginRight:10,marginTop:8}}>
    <Text style={{flex:1,textAlignVertical:'center',alignSelf:"center",fontSize:12}}>Upload</Text>
</TouchableOpacity>
          </View>
                            <Input
                             placeholder="Enter your ID/Passport number"
            label="ID/Passport Number"
            style={{
                width:328,
              height:55,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10
            }}
          />
            {/* <Text style={{flex:1,textAlignVertical:'center',marginLeft:30,marginTop:10,fontSize:14,color:'grey'}}>CV/Resume</Text> */}
      <View
            style={{
                width:328,
              height:40,
              backgroundColor: "white",
              elevation: 5,
             alignSelf:'center',
             marginBottom:10,
             flexDirection:"row",
             marginTop:10,
             borderWidth:1,
             borderRadius:5,
             borderColor:"white"
           
            }}
          >
<Text style={{flex:1,textAlignVertical:'center',marginLeft:18,fontSize:14,color:'#8f9bb1'}}>Upload CV</Text>
<TouchableOpacity style={{width:68,height:23,elevation:2,backgroundColor:'#CDDFF7',marginRight:10,marginTop:7}}>
    <Text style={{flex:1,textAlignVertical:'center',alignSelf:"center",fontSize:12}}>Upload</Text>
</TouchableOpacity>
          </View>
          <Select
        selectedIndex={selectedIndex}
        placeholder="Employment Type"
        
        onSelect={index => setSelectedIndex(index)}
        style={{width:328,marginTop:10,alignSelf:'center',backgroundColor:'white',marginBottom:5}}
      >
        <SelectItem title='Full-Time' />
        <SelectItem title='Part-Time' />
       
      </Select>

      {/* <Text style={{flex:1,textAlignVertical:'center',marginLeft:30,marginTop:10,fontSize:14,color:'grey'}}>Slary Range</Text>
      <RangeSlider
        style={styles.slider}
        min={min}
        max={max}
        step={1}
        initialLowValue={low}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleRangeChange}
      /> */}

            </View>
        )
    }
    return(
        <ScrollView  contentContainerStyle={{ flexGrow: 1 }} style={{backgroundColor:"white"}} >
 <View style={{flexDirection:'row',marginTop:42}}>
          <Image
              style={
                { width: 24, height: 24,marginLeft:20,marginTop:3}
              }
              source={require("../assets/arr.png")}
            />
          <Text style={{color:"#273469",fontSize:20,fontWeight:'500',marginLeft:10}}>Add new candidate</Text>
          
            </View>
            {candidInof()}
            {jobInfo()}
            <TouchableOpacity style={{height:48,width:250,backgroundColor:'#3680E1',marginTop:40,
borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',marginRight:10,alignSelf:'center',marginBottom:20}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>ADD</Text></TouchableOpacity>
        </ScrollView>
    )
}