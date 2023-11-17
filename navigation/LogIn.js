import React from "react";
import { View , Button , ScrollView,TextInput,Dimensions,TouchableOpacity,Text } from "react-native";

export default function LogIn({navigation}){
    const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
const logIn=()=>{
    navigation.navigate('home')
    }
const loginForm =()=>{
    
    return(
        <View>
<TextInput style={{width:screenWidth/1.5,height:40,alignSelf:'center',marginTop:screenHeight/4,backgroundColor:"#868686"}} />
<TextInput style={{width:screenWidth/1.5,height:40,alignSelf:'center',marginTop:10,backgroundColor:"#868686"}} />

<TouchableOpacity onPress={logIn}  style={{height:40,width:120,backgroundColor:'#3EC6FF',marginTop:40,
borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',marginRight:10,alignSelf:'center'}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Log In</Text></TouchableOpacity>
        </View>
    )
}
    return(
        <ScrollView>
            {loginForm()}
        </ScrollView>
    )
}