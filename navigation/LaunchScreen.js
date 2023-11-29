import React from "react";
import { View , Button , ScrollView,Text ,ImageBackground,Image,Pressable,TouchableOpacity,Dimensions} from "react-native";
import {img} from '../assets/profile10.png'
import Constants from 'expo-constants';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
export default function LaunchScreen({navigation}){

    const logIn =()=>{
        // navigation.navigate('login')
    }
    const signUp =()=>{
        navigation.navigate('terms')
    }
    const middleCont =()=>{
        return(
            <View style={{marginTop:300,alignSelf:"center",marginLeft:20}}>

<Text style={{alignSelf:"center",fontSize:70,color:"#3680E1"}}>BESEW</Text>

<Text style={{alignSelf:"center",fontSize:16,color:"#3680E1",marginTop:20,fontWeight:"bold"}}>Welcome to BESEW</Text>
<Text style={{alignSelf:"center",fontSize:16,color:"#30343F",marginTop:20}}>Simplify your job placement and manage{'\n'}{'                        '}your candidates. </Text>
<Text style={{alignSelf:"center",fontSize:16,color:"#30343F",marginTop:20,marginLeft:10}}>Get started now!
</Text>
            </View>
        )
    }
    const design=()=>{
     return(
        <View>
            <Image
source={require("../assets/right.png")}
style={{flex:1,alignSelf:"flex-end"}}
/>
<Image
source={require("../assets/left.png")}
style={{bottom:100,right:25}}
/>

        </View>
     )
    }

    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{backgroundColor:'white', marginTop:Constants.statusBarHeight}}> 

<ImageBackground style={{height:screenHeight+25,width:screenWidth}}
             source={require("../assets/launch.png") }
            >
        {/* {design()} */}
           {middleCont()}
           <View style={{position:'absolute',bottom:0,alignSelf:'center',marginBottom:130}}>


           <TouchableOpacity onPress={logIn} style={{height:48,width:302,backgroundColor:'#3680E1',marginBottom:10,marginTop:10,
borderWidth:1,borderRadius:10,borderColor:'#DDDDDD',marginRight:10}}><Text style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Sign In</Text></TouchableOpacity>
           <TouchableOpacity onPress={signUp} style={{height:48,width:302,backgroundColor:'white',borderWidth:1,
borderRadius:10,borderColor:'#3EC6FF'}}><Text style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'#3680E1'}}>Create An Account</Text></TouchableOpacity>



</View>
</ImageBackground>
        </ScrollView>
    )
}