import React from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text } from "react-native";

export default function ScreenThree({navigation}){
    const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
const signUp=()=>{
navigation.navigate('message')
}
const MainCont =()=>{
    
    return(
        <View>
<TextInput  style={{width:screenWidth/1.2,height:40,alignSelf:'center',marginTop:screenHeight/9,backgroundColor:"#868686"}} />
<TextInput style={{width:screenWidth/1.2,height:40,alignSelf:'center',marginTop:10,backgroundColor:"#868686"}} />
<TextInput style={{width:screenWidth/1.2,height:40,alignSelf:'center',marginTop:10,backgroundColor:"#868686"}} />
<TextInput style={{width:screenWidth/1.2,height:40,alignSelf:'center',marginTop:10,backgroundColor:"#868686"}} />
<TextInput style={{width:screenWidth/1.2,height:40,alignSelf:'center',marginTop:10,backgroundColor:"#868686"}} />


<TouchableOpacity onPress={signUp} style={{height:40,width:120,backgroundColor:'#3EC6FF',marginTop:40,
borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',marginRight:10,alignSelf:'center'}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Save</Text></TouchableOpacity>
        </View>
    )
}
    return(
        <ScrollView>
            <View style={{flexDirection:'row'}}>
              <Image
                  style={
                    { width: 70, height: 70,marginLeft:20,marginTop:20}
                  }
                  source={require("../assets/profile10.png")}
                />
                <View style={{width:151,height:21,marginLeft:10,alignSelf:'center',marginTop:10,backgroundColor:"#D9D9D9"}}></View>
                </View>
            {MainCont()}
        </ScrollView>
    )
}