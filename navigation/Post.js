import React from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Post({navigation}){
    const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
const nav = useNavigation();
const next=()=>{

}
const MainCont =()=>{
    
    return(
        <View style={{alignSelf:'center',marginTop:20}}>
<View style={{width:328,height:46,backgroundColor:"#D9D9D9"}}></View>
<View style={{width:328,height:46,backgroundColor:"#D9D9D9",marginTop:10}}></View>
<View style={{width:328,height:46,backgroundColor:"#D9D9D9",marginTop:10}}></View>
<View style={{width:328,height:233,backgroundColor:"#D9D9D9",borderWidth:1,borderRadius:10,borderColor:"#D9D9D9",marginTop:10}}></View>
<View style={{width:328,height:33,backgroundColor:"#D9D9D9",marginTop:10}}></View>
<TouchableOpacity onPress={next} style={{height:50,width:194,backgroundColor:'#3EC6FF',marginTop:40,
borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',marginRight:10,alignSelf:'center'}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Post</Text></TouchableOpacity>
        </View>
    )
}
    return(
        <ScrollView>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{nav.goBack()}}>
          <Image
                  style={
                    { width: 24, height: 24,marginLeft:20,marginTop:3}
                  }
                  source={require("../assets/arr.png")}
                />
          </TouchableOpacity>
                <View style={{width:151,height:21,marginLeft:10,alignSelf:'center',marginTop:10,backgroundColor:"#D9D9D9"}}></View>
                </View>
            {MainCont()}
        </ScrollView>
    )
}