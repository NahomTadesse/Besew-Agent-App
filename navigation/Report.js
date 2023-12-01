import React, { useState } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
export default function Notification({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)
    const nav = useNavigation();
    const MainCont =()=>{
   return(
    <View style={{marginLeft:10,width:336,height:170,alignSelf:'center',borderWidth:1,borderRadius:10,borderColor:'grey',marginTop:40}}>

<View style={{flex:1,flexDirection:'row'}}>
    <View style={{flexDirection:'column',marginLeft:20,marginTop:10}}>
        <Text style={{fontSize:14,color:'grey'}}>Report Type</Text>
        <Text style={{fontSize:14}}>Misinformation</Text>
        <Text style={{fontSize:14,color:'grey',marginTop:20}}>Date</Text>
        <Text style={{fontSize:14}}>10/10/2020</Text>
    </View>
    <View style={{flexDirection:'column',marginRight:10,marginTop:15,width:screenWidth/2,alignItems:'flex-end',}}>
    <Text style={{fontSize:14,color:'grey'}}>Reporter</Text>
        <Text style={{fontSize:14}}>Not anonymous</Text>
        <Text style={{fontSize:14,color:'grey',marginTop:10}}>Status</Text>
        <Text style={{fontSize:14,}}>Warning</Text>
    </View>
    
</View>
<TouchableOpacity style={{width:312,height:44,flexDirection:'row',borderRadius:10,borderWidth:1,
marginBottom:10,
borderColor:'#3680E1',alignSelf:"center"}}>
    <Text style={{textAlignVertical:"center",marginLeft:10}}>See Who Reported You</Text>
    <Image
                  style={
                    { width: 30, height: 30,marginLeft:120,marginTop:5,}
                  }
                  source={require("../assets/chevron-down.png")}
                />
  </TouchableOpacity>
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
          <Text style={{color:"#273469",fontSize:20,fontWeight:'500',marginLeft:10}}>Reports</Text>
          
            </View>
            <View style={{width:screenWidth,height:2,backgroundColor:"#CDDFF7",marginTop:10}}></View>
        {MainCont()}
    </ScrollView>
    )
}