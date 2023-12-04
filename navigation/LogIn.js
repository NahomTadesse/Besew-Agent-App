import{ React,useState }from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Switch,
    TextInput,
    ActivityIndicator,
    Pressable,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Date,
    Modal,
    Image,
    Alert,
    Keyboard,
  } from "react-native";
  import {
    Icon,
    IconElement,
    Input,
    Button,
    Layout,
  } from "@ui-kitten/components";
  import Constants from 'expo-constants';
  const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;
export default function LogIn({navigation}){
    const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
const [secureTextEntry, setSecureTextEntry] =useState(true);
const logIn=()=>{
    navigation.navigate('home')
    }

    // const toggleSecureEntry = () => {
    //     setSecureTextEntry(!secureTextEntry);
    //   };
    
    //   const renderIcon = (props) => (
    //     <TouchableWithoutFeedback onPress={toggleSecureEntry}>
    //       <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    //     </TouchableWithoutFeedback>
    //   );
    
    //   const renderIconPhone = (props) => (
    //     <TouchableWithoutFeedback onPress={toggleSecureEntry}>
    //       <Image
    //         source={require("../assets/call.png")}
    //         style={{
    //           width: 20,
    //           height: 20,
    //           marginLeft: 10,
    //           opacity: 0.6,
    //         }}
    //       />
    //     </TouchableWithoutFeedback>
    //   );
    //   const renderIconPassword = (props) => (
    //     <TouchableWithoutFeedback onPress={toggleSecureEntry}>
    //       <Image
    //         source={require("../assets/lock.png")}
    //         style={{
    //           width: 20,
    //           height: 20,
    //           marginLeft: 10,
    //           opacity: 0.6,
    //         }}
    //       />
    //     </TouchableWithoutFeedback>
    //   );
    const loginForm=()=>{
        return(
          <ImageBackground  style={{height:screenHeight ,width:screenWidth ,alignSelf:"center"}}
                
          source={require("../assets/log.png") }
          >
            <Text style={{alignSelf:"center",fontSize:40,color:"#3680E1",marginTop:400,fontWeight:'bold'}}>BESEW</Text>
    
    
            <View style={{marginTop:10}}> 
            <Text style={{fontSize:20,fontWeight:'700',alignSelf:'center',color:'#3680E1'}}>Sign In</Text>
        
      

            <Input
                // value={phoneNmber}
                placeholder="Enter your agency name"
                // accessoryLeft={renderIconPhone}
                keyboardType="numeric"
                // onChangeText={(nextValue) => setPhoneNmber(nextValue)}
                label='Agency Name'
                style={{
                  width: screenWidth / 1.3,
                  marginBottom: 20,
                  borderWidth: 1,
                  marginTop:20,
                  borderRadius: 5,
                  backgroundColor: "white",
                  elevation: 10,
                  alignSelf:"center",
                }}
              />
          
     
              <Input
                // value={password}
                placeholder="Password"
                label="Password"
                // accessoryLeft={renderIconPassword}
                // accessoryRight={renderIcon}
                // secureTextEntry={secureTextEntry}
                // onChangeText={(nextValue) => setPassword(nextValue)}
                style={{
                  width: screenWidth / 1.3,
                  marginBottom: 10,
                  alignSelf:"center",
                  borderWidth: 1,
                  borderRadius: 5,
                  backgroundColor: "white",
                  elevation: 10,
                }}
              />
             
        
    <TouchableOpacity onPress={logIn}  style={{height:48,width:250,backgroundColor:'#3680E1',marginTop:45,
    borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',marginRight:10,alignSelf:'center',marginBottom:20}}><Text 
    style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Sign In</Text></TouchableOpacity>
            </View>
            </ImageBackground>
        )  
      
    }
    return(
        <ScrollView style={{backgroundColor:"white",marginTop:Constants.statusBarHeight}}>
            {loginForm()}
        </ScrollView>
    )
}