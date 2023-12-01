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
    <View style={{marginLeft:10}}>
        <View style={{width:screenWidth,height:2,backgroundColor:"#CDDFF7",marginTop:30}}></View>
  <View style={{flex:1,flexDirection:'row',marginLeft:20,height:50,marginTop:30}}>
 
 <Text style={{fontSize:16,}}>Notification preference</Text>

<Toggle
checked={checked}
//   onChange={onCheckedChange}
style={{marginLeft:100,height:25,width:45}}
>

</Toggle>

</View>
<View style={{width:screenWidth,height:2,backgroundColor:"#CDDFF7",marginBottom:20}}></View>

        <View style={{marginLeft:20}}>
        <Text style={{fontSize:16,}}>Notification Preference</Text>
 <RadioGroup
        selectedIndex={selectedIndex}
        onChange={index => setSelectedIndex(index)}
      >
        <Radio style={{borderRadius:0}}>
SMS
        </Radio>
        <Radio>
Email
        </Radio>
 
      </RadioGroup>
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
          <Text style={{color:"#273469",fontSize:20,fontWeight:'500',marginLeft:10}}>Notifications</Text>
          <TouchableOpacity><Text style={{color:'green',fontSize:18,fontWeight:'500',marginLeft:150}}>Save</Text></TouchableOpacity>
            </View>
        {MainCont()}
    </ScrollView>
    )
}