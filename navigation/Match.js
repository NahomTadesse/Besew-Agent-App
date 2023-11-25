import React, { useState,useCallback } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import { Pressable } from "react-native";
import RangeSlider from 'rn-range-slider';
import { Checkbox } from 'react-native-paper';



export default function Match({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [isnext , setIsNext] = useState(false)
    const [isSelected,setIsSelected] = useState(false)

    // const obj = [
    //     'job Title','Education'
    // ]
const mainCont = ()=>{
    return(
    <View>
<Text style={{fontSize:14,color:'#30343F',marginTop:18,marginLeft:30}}>Match Jobs</Text>

<View style={{width:340,height:113,backgroundColor:'#F4F0FF',marginTop:20,alignSelf:'center',borderWidth:1,borderRadius:10,borderColor:'#F4F0FF'}}>

<View style={{flex:1,flexDirection:'row',marginTop:20,marginLeft:10,maxHeight:40}}>
           <Text style={{fontSize:14,color:'#273469',fontWeight:'500'}}>Customer Service Representative{'\n'}Global Services Inc.</Text>
         <View style={{marginLeft:80}}>
         <TouchableOpacity onPress={()=>{navigation.navigate('matchsecond')}}>
           <Image
           
                  style={
                    { width: 24, height: 24}
                  }
                  source={require("../assets/dot.png")}
                />
                </TouchableOpacity>
                </View>
           </View>
           

           <View style={{flexDirection:'row',marginHorizontal:10}}>
            
          
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

{/* //////////////////second */}

<View style={{width:340,height:113,backgroundColor:'#F4F0FF',marginTop:20,alignSelf:'center',borderWidth:1,borderRadius:10,borderColor:'#F4F0FF'}}>

<View style={{flex:1,flexDirection:'row',marginTop:20,marginLeft:10,maxHeight:40}}>
           <Text style={{fontSize:14,color:'#273469',fontWeight:'500'}}>Customer Service Representative{'\n'}Global Services Inc.</Text>
         <View style={{marginLeft:80}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('matchsecond')}}>
           <Image
           
                  style={
                    { width: 24, height: 24}
                  }
                  source={require("../assets/dot.png")}
                />
                </TouchableOpacity>
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

// const selectInfo=()=>{

  
// }

    return(
        <ScrollView style={{backgroundColor:'white'}} contentContainerStyle={{ flexGrow: 1 }}>
   <View style={{flexDirection:'row',marginTop:42}}>
          <Image
              style={
                { width: 24, height: 24,marginLeft:20,marginTop:3}
              }
              source={require("../assets/arr.png")}
            />
          <Text style={{color:"#273469",fontSize:18,fontWeight:'500',marginLeft:10}}>
            
     Matching
            
            </Text>
          
            </View>
            <View style={{marginTop:12,backgroundColor:'#CDDFF7',height:2}}></View>
            {/* {mainCont()} */}
      {mainCont()}

        </ScrollView>
    )
}