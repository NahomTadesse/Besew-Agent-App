import React from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
export default function ScreenThree({navigation}){
    const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
const nav = useNavigation();
const signUp=()=>{
navigation.navigate('message')
}
const MainCont =()=>{
    
    return(
        <View style={{alignSelf:'center',marginTop:40}}>
<TouchableOpacity style={{width:312,height:32,borderBottomWidth:1,flexDirection:'row'}}>
<Text style={{fontSize:16,color:'#30343F'}}>someone applied to sales position</Text>

</TouchableOpacity>
<TouchableOpacity style={{width:312,height:32,borderBottomWidth:1,flexDirection:'row',marginTop:30}}>
<Text style={{fontSize:16,color:'#30343F'}}>someone applied to sales position</Text>

</TouchableOpacity>

<TouchableOpacity style={{width:312,height:32,borderBottomWidth:1,flexDirection:'row',marginTop:30}}>
<Text style={{fontSize:16,color:'#30343F'}}>someone applied to sales position</Text>

</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate('ndetail')}} style={{width:312,height:32,borderBottomWidth:1,flexDirection:'row',marginTop:30}}>
<Text style={{fontSize:16,color:'#30343F'}}>10 new applications submitted</Text>

</TouchableOpacity>




        </View>
    )
}
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
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
                </View>
            {MainCont()}
        </ScrollView>
    )
}