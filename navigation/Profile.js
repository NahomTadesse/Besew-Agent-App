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
        <View style={{alignSelf:'center',marginTop:40}}>
<TouchableOpacity onPress={()=>{navigation.navigate('editpersonal')}} style={{width:312,height:32,borderBottomWidth:1,flexDirection:'row'}}>
<Text style={{fontSize:14}}>Edit Personal information</Text>
<Image
                  style={
                    { width: 7, height: 10,marginLeft:140,marginTop:5,}
                  }
                  source={require("../assets/ari.png")}
                />
</TouchableOpacity>
<TouchableOpacity onPress={()=>{navigation.navigate('editpro')}} style={{width:312,height:32,borderBottomWidth:1,flexDirection:'row',marginTop:30}}>
<Text style={{fontSize:14}}>Edit Professional Information</Text>
<Image
                  style={
                    { width: 7, height: 10,marginLeft:116,marginTop:5,}
                  }
                  source={require("../assets/ari.png")}
                />
</TouchableOpacity>

<TouchableOpacity style={{width:312,height:32,borderBottomWidth:1,flexDirection:'row',marginTop:30}}>
<Text style={{fontSize:14}}>Settings and Privacy</Text>
<Image
                  style={
                    { width: 7, height: 10,marginLeft:170,marginTop:5,}
                  }
                  source={require("../assets/ari.png")}
                />
</TouchableOpacity>
<TouchableOpacity 
onPress={()=>{navigation.navigate('adddefault')}}
style={{width:312,height:32,borderBottomWidth:1,flexDirection:'row',marginTop:30}}>
<Text style={{fontSize:14}}>Add Default Jobs</Text>
<Image
                  style={
                    { width: 7, height: 10,marginLeft:170,marginTop:5,}
                  }
                  source={require("../assets/ari.png")}
                />
</TouchableOpacity>

<TouchableOpacity  onPress={()=>{navigation.navigate('not')}} style={{width:312,height:32,borderBottomWidth:1,flexDirection:'row',marginTop:30}}>
<Text style={{fontSize:14}}>Notifications</Text>
<Image
                  style={
                    { width: 7, height: 10,marginLeft:220,marginTop:5,}
                  }
                  source={require("../assets/ari.png")}
                />
</TouchableOpacity>

<TouchableOpacity style={{width:312,height:32,borderBottomWidth:1,flexDirection:'row',marginTop:30}}>
<Text style={{fontSize:14}}>Change language</Text>
<Image
                  style={
                    { width: 7, height: 10,marginLeft:190,marginTop:5,}
                  }
                  source={require("../assets/ari.png")}
                />
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate('report')}} style={{width:312,height:32,borderBottomWidth:1,flexDirection:'row',marginTop:30}}>
<Text style={{fontSize:14}}>Reports</Text>
<Image
                  style={
                    { width: 7, height: 10,marginLeft:250,marginTop:5,}
                  }
                  source={require("../assets/ari.png")}
                />
</TouchableOpacity>

<TouchableOpacity style={{width:312,height:32,borderBottomWidth:1,flexDirection:'row',marginTop:30}}>
<Text style={{fontSize:14}}>Help & Feedback</Text>
<Image
                  style={
                    { width: 7, height: 10,marginLeft:195,marginTop:5,}
                  }
                  source={require("../assets/ari.png")}
                />
</TouchableOpacity>

<TouchableOpacity style={{width:312,height:32,borderBottomWidth:1,flexDirection:'row',marginTop:30}}>
<Text style={{fontSize:14}}>Contact center</Text>
<Image
                  style={
                    { width: 7, height: 10,marginLeft:208,marginTop:5,}
                  }
                  source={require("../assets/ari.png")}
                />
</TouchableOpacity>

<TouchableOpacity style={{width:312,height:32,borderBottomWidth:1,flexDirection:'row',marginTop:30}}>
<Text style={{fontSize:14}}>Terms and Conditions</Text>
<Image
                  style={
                    { width: 7, height: 10,marginLeft:163,marginTop:5,}
                  }
                  source={require("../assets/ari.png")}
                />
</TouchableOpacity>

<TouchableOpacity style={{width:312,height:32,borderBottomWidth:1,flexDirection:'row',marginTop:30}}>
<Text style={{fontSize:14}}>Log out</Text>
<Image
                  style={
                    { width: 7, height: 10,marginLeft:255,marginTop:5,}
                  }
                  source={require("../assets/ari.png")}
                />
</TouchableOpacity>
        </View>
    )
}
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            <View style={{flexDirection:'row',marginTop:42}}>
              <Image
                  style={
                    { width: 24, height: 24,marginLeft:20,marginTop:3}
                  }
                  source={require("../assets/arr.png")}
                />
              <Text style={{color:"#273469",fontSize:20,fontWeight:'500',marginLeft:10}}>Account</Text>
                </View>
            {MainCont()}
        </ScrollView>
    )
}