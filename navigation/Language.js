import React from "react";
import { View , Button , ScrollView,Text ,ImageBackground,Image,Pressable,TouchableOpacity,Dimensions} from "react-native";
import {img} from '../assets/profile10.png'
import Constants from 'expo-constants';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
export default function Language({navigation}){

    const logIn =()=>{
        // navigation.navigate('login')
    }
    const signUp =()=>{
        navigation.navigate('launch')
    }
    const middleCont =()=>{
        return(
            <View style={{alignSelf:"center",marginLeft:20}}
        
            >

<Text style={{alignSelf:"center",fontSize:70,color:"white",marginTop:260}}>BESEW</Text>

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

<ImageBackground  style={{height:screenHeight ,width:screenWidth ,alignSelf:"center"}}
            
            source={require("../assets/lang.png") }
            >
        {/* {design()} */}
           {middleCont()}
           <View style={{position:'absolute',bottom:0,alignSelf:'center',marginBottom:200}}>

           <Text style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'#30343F',fontSize:16}}>Choose Language</Text>
           <TouchableOpacity onPress={signUp} style={{height:37,width:184,backgroundColor:'#3680E1',marginBottom:10,marginTop:10,
borderWidth:1,borderRadius:10,borderColor:'#DDDDDD',marginRight:10}}><Text style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>English</Text></TouchableOpacity>
           <TouchableOpacity onPress={signUp} style={{height:37,width:184,backgroundColor:'#3680E1',borderWidth:1,
borderRadius:10,borderColor:'#3EC6FF'}}><Text style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>አማርኛ</Text></TouchableOpacity>



</View>
</ImageBackground>

        </ScrollView>
    )
}