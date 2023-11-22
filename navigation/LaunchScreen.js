import React from "react";
import { View , Button , ScrollView,Text ,Image,Pressable,TouchableOpacity,Dimensions} from "react-native";
import {img} from '../assets/profile10.png'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
export default function LaunchScreen({navigation}){

    const logIn =()=>{
        navigation.navigate('login')
    }
    const signUp =()=>{
        navigation.navigate('signup')
    }
    const middleCont =()=>{
        return(
            <View style={{marginTop:100,backgroundColor:'white'}}>
  <Image
                  style={
                    { width: 100, height: 100,flex:1,alignSelf:'center',marginTop:screenHeight/6}
                  }
                  source={require("../assets/profile10.png")}
                />

            </View>
        )
    }

    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{backgroundColor:'white'}}> 
           {middleCont()}
           <View style={{flexDirection:'row',position:'absolute',bottom:0,alignSelf:'center',marginBottom:100}}>
<TouchableOpacity onPress={logIn} style={{height:40,width:120,backgroundColor:'#DDDDDD',
borderWidth:1,borderRadius:10,borderColor:'#DDDDDD',marginRight:10}}><Text style={{flex:1,textAlignVertical:'center',alignSelf:"center"}}>Log In</Text></TouchableOpacity>

<TouchableOpacity onPress={signUp} style={{height:40,width:120,backgroundColor:'#3680E1',borderWidth:1,
borderRadius:10,borderColor:'#3EC6FF'}}><Text style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Sign Up</Text></TouchableOpacity>
</View>
        </ScrollView>
    )
}