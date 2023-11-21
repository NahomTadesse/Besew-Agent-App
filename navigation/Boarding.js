import {React,useState }from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text, ImageBackground } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default function Boarding({navigation}){

const firstScreen = ()=>{

    return(
        <View>

        </View>
    )
}


    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{backgroundColor:"white"}}>
            <ImageBackground style={{height:screenHeight+25,width:screenWidth}}
             source={require("../assets/rec.png") }
            >
                        <Text style={{position:"absolute",bottom:0,marginBottom:200,alignSelf:'center'
                    ,fontSize:18,color:'white',marginHorizontal:30,}}>
            {`Simplify your job placement process` }{'\n'}
            {`  and connect with employers and`} {'\n'}
            {`           candidates effortlessly.`} {'\n'}
            {`                Let's get started!`}
            </Text>
          <View style={{position:"absolute",bottom:0,marginBottom:60,alignSelf:'center'}}>
 
<TouchableOpacity style={{backgroundColor:'#3680E1',width:250,height:48}} 
onPress={()=>{navigation.navigate('agboard')}}
>
<Text style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Next</Text>
</TouchableOpacity>
<TouchableOpacity style={{width:250,height:48}}>
    <Text style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Skip</Text>
</TouchableOpacity>
</View>  

</ImageBackground>
        </ScrollView>
    )
}