import{ React,useState }from "react";
import { View ,Image ,ScrollView,TextInput,Dimensions,ImageBackground,TouchableOpacity,Text } from "react-native";
import {
    Icon,
    IconElement,
    Input,
    Button,
    Layout,
  } from "@ui-kitten/components";
import { Pressable } from "react-native";

export default function SignUp({navigation}){
    const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
const [isRegister, setIsRegister] = useState(true);
const [isVerification, setIsVerification] = useState(false);
const [isOtp, setIsOtp] = useState(false);
const [phoneNumber, setPhoneNumber] = useState('+251');

const signUp=()=>{
navigation.navigate('board')
}
const registerBtn=()=>{
    setIsRegister(false);
    setIsVerification(true);
    setIsOtp(false)
    }
    const otpBtn=()=>{
        setIsRegister(false);
        setIsVerification(false);
        setIsOtp(true)
        }
         const verificationBtn=()=>{
            setIsRegister(false);
            setIsVerification(false);
            setIsOtp(true)
            }
const Register =()=>{
    
    return(
        <View style={{marginTop:20}}>
              <Text style={{color:"#3680E1",fontSize:26,marginLeft:35,fontWeight:'bold',marginTop:40,marginBottom:20}}>Register</Text>
<Input
                // value={fullName}
                placeholder="name"
                label = 'Enter agency name'
                // onChangeText={(nextValue) => setFullName(nextValue)}
                style={{
                    width:304,
                  height:55,
                  marginBottom: 20,
                  alignSelf:'center',
                  backgroundColor: "white",
                  elevation: 5,
                }}
              />
       <Input
                // value={phoneNumber}
                placeholder="Phone Number"
                label = 'Agency phone number'
                keyboardType="numeric"
                // onChangeText={(nextValue) => setPhoneNumber(nextValue)}
                style={{
                  width:304,
                  height:55,
                  marginBottom: 20,
                  alignSelf:'center',
                  backgroundColor: "white",
                  elevation: 5,
                }}
              />
              <Input
                // value={fullName}
                placeholder="adress"
                label = 'Address'
                // onChangeText={(nextValue) => setFullName(nextValue)}
                style={{
                    width:304,
                    height:55,
                    marginBottom: 20,
                    alignSelf:'center',
                    backgroundColor: "white",
                  elevation: 5,
                }}
              />
       <Input
                // value={phoneNumber}
                placeholder="job placements"
                label = 'Number of job placements secured'
                keyboardType="numeric"
                // onChangeText={(nextValue) => setPhoneNumber(nextValue)}
                style={{
                    width:304,
                  height:55,
                  marginBottom: 20,
                  alignSelf:'center',
                  backgroundColor: "white",
                  elevation: 5,
                }}
              />
              <Input
                // value={fullName}
                placeholder="Licence"
                label = 'Licence'
                // onChangeText={(nextValue) => setFullName(nextValue)}
                style={{
                    width:304,
                  height:55,
                  marginBottom: 20,
                  alignSelf:'center',
                  backgroundColor: "white",
                  elevation: 5,
                }}
              />
       <Input
                // value={phoneNumber}
                placeholder="email"
                label = 'Enter your email address'
                keyboardType="numeric"
                // onChangeText={(nextValue) => setPhoneNumber(nextValue)}
                style={{
                    width:304,
                    height:55,
                    marginBottom: 20,
                    alignSelf:'center',
                    backgroundColor: "white",
                    elevation: 5,
                }}
              />
              <Input
                // value={fullName}
                placeholder="password"
                label = 'Create Password'
                // onChangeText={(nextValue) => setFullName(nextValue)}
                style={{
                    width:304,
                    height:55,
                    marginBottom: 20,
                    alignSelf:'center',
                    backgroundColor: "white",
                    elevation: 5,
                }}
              />
       <Input
                // value={phoneNumber}
                placeholder="password"
                label = 'Confirm Password'
                keyboardType="numeric"
                // onChangeText={(nextValue) => setPhoneNumber(nextValue)}
                style={{
                    width:304,
                    height:55,
                    marginBottom: 10,
                  alignSelf:'center',
                  backgroundColor: "white",
                  elevation: 5,
                }}
              />

<TouchableOpacity onPress={registerBtn} style={{height:48,width:250,backgroundColor:'#3680E1',marginTop:40,
borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',marginRight:10,alignSelf:'center',marginBottom:20}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Next</Text></TouchableOpacity>
        </View>
    )
}

const Verification =()=>{
    return(
      <ImageBackground  style={{height:screenHeight ,width:screenWidth ,alignSelf:"center"}}
            
      source={require("../assets/lang.png") }
      >
        <Text style={{alignSelf:"center",fontSize:70,color:"white",marginTop:260}}>BESEW</Text>


        <View style={{marginTop:60}}> 
        <Text style={{fontSize:20,fontWeight:'700',marginTop:60,alignSelf:'center',color:'#3680E1'}}>Verification phone number</Text>
        <Text style={{color:"#30343F",fontSize:14,marginTop:10,alignSelf:"center"}}>
        Enter your phone number and you will </Text>
        <Text style={{color:"#30343F",fontSize:14,alignSelf:"center"}}>
        receive SMS code on your phone number</Text>
  
<Input
                value={phoneNumber}
                placeholder="name"
                label = 'Enter phone number'
                // onChangeText={(nextValue) => setFullName(nextValue)}
                style={{
                    width:304,
                  height:55,
                 
                  alignSelf:'center',
                  backgroundColor:"white",
          borderColor:'white',
                 
                
                  
                  marginTop:20
                }}
              />
              <View style={{width:304,height:1,backgroundColor:'black',alignSelf:'center'}}></View>
 
    
<TouchableOpacity onPress={verificationBtn} style={{height:48,width:250,backgroundColor:'#3680E1',marginTop:45,
borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',marginRight:10,alignSelf:'center',marginBottom:20}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Send Code</Text></TouchableOpacity>
        </View>
        </ImageBackground>
    )  
  
}
const Otp =()=>{
    return(
      <ImageBackground  style={{height:screenHeight ,width:screenWidth ,alignSelf:"center"}}
            
            source={require("../assets/lang.png") }
            >
              <Text style={{alignSelf:"center",fontSize:70,color:"white",marginTop:260}}>BESEW</Text>
        <View style={{marginTop:60}}> 
        <Text style={{fontSize:20,fontWeight:'700',marginTop:60,alignSelf:'center',color:'#3680E1'}}>Verification Code</Text>
        <Text style={{fontSize:14,marginTop:10,marginBottom:20,alignSelf:'center'}}>
       Enter the code here</Text>
        <View style={{flexDirection:'row',alignSelf:"center"}}>
<Input
            
                style={{
                    width:62,
                  height:69,
               
                  
                  backgroundColor: "white",
                  elevation: 5,
                  marginRight:5
                }}
              />
              <Input
            
            style={{
                width:62,
              height:69,
          
              
              backgroundColor: "white",
              elevation: 5,
              marginRight:5
            }}
          />
          <Input
            
            style={{
                width:62,
              height:69,
         
              
              backgroundColor: "white",
              elevation: 5,
              marginRight:5
            }}
          />
          <Input
            
            style={{
                width:62,
              height:69,
            
              backgroundColor: "white",
              elevation: 5,
              marginRight:5,
              
            }}
          />
       
 </View>
 <TouchableOpacity>
 <Text style={{fontSize:14,marginLeft:60,color:"#30343F"}}>
       Resend Code</Text>
       </TouchableOpacity>
<TouchableOpacity onPress={signUp} style={{height:48,width:250,backgroundColor:'#3680E1',marginTop:40,
borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',marginRight:10,alignSelf:'center',marginBottom:20}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Next</Text></TouchableOpacity>
        </View>
        </ImageBackground>
    )  
  
}
    return(
        <ScrollView style={{backgroundColor:"white"}}>
         
            {isRegister ? Register():isVerification? Verification():isOtp? Otp():""}
        </ScrollView>
    )
}