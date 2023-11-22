import {React,useState }from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text, ImageBackground } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default function AgentBoarding({navigation}){
  
    const[isFirst,setFirst]=useState(true)
const[isSecond,setSecond]=useState(true)
const[isThird,setThird]=useState(true)
const firstN =()=>{
    setFirst(false)
    setSecond(true)
    setThird(false)
}
const secondN =()=>{
    setFirst(false)
    setSecond(false)
    setThird(true)
}
const thirdN =()=>{
    navigation.navigate('home')
}
    const firstScreen = ()=>{

        return(
            <View>
      <Image
                  style={
                    { width: 223, height: 216,flex:1,alignSelf:'center',marginTop:screenHeight/3.3}
                  }
                  source={require("../assets/G1.png")}
                />
                <Text style={{fontSize:18,alignSelf:'center',marginTop:50}}>
                Create your professional profile.
                </Text>
                <TouchableOpacity style={{marginTop:75 ,width:250,height:48,backgroundColor:"#3680E1",alignSelf:'center',
                borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',}}
                onPress={firstN}
                >
                    <Text style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const secondScreen = ()=>{

        return(
            <View>
      <Image
                  style={
                    { width: 223, height: 216,flex:1,alignSelf:'center',marginTop:screenHeight/3.3}
                  }
                  source={require("../assets/G2.png")}
                />
                <Text style={{fontSize:18,alignSelf:'center',marginTop:50}}>
                Add and handle candidates.
                </Text>
                <TouchableOpacity style={{marginTop:75 ,width:250,height:48,backgroundColor:"#3680E1",alignSelf:'center',
                borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',}}
                onPress={secondN}
                >
                    <Text style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const thirdScreen = ()=>{

        return(
            <View>
      <Image
                  style={
                    { width: 223, height: 216,flex:1,alignSelf:'center',marginTop:screenHeight/3.3}
                  }
                  source={require("../assets/G2.png")}
                />
                <Text style={{fontSize:18,alignSelf:'center',marginTop:50}}>
                Post a job.
                </Text>
                <TouchableOpacity style={{marginTop:75 ,width:250,height:48,backgroundColor:'#3680E1',alignSelf:'center',
            borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',    
            }}
                onPress={thirdN}
                >
                    <Text style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Done</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <ScrollView style={{backgroundColor:"white"}}>
           {isFirst ? firstScreen() : isSecond ? secondScreen():isThird?thirdScreen():""}
        </ScrollView>
    )
}