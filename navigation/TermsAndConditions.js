import React, { useState } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import Constants from 'expo-constants';
export default function TermsAndConditions({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)
    const MainCont =()=>{
   return(
    <View style={{marginLeft:20,marginTop:20}}>
<Text style={{fontSize:14,color:"#868686"}}>
Welcome to Besew! These terms and conditions  outline the agreement between you the Agent/Recruiter, regarding the use of our app. By accessing or using the app, you agree to comply with and be bound by these Terms.
 {'\n'}If you do not agree with these Terms, please refrain from using the app.
</Text>

<Text style={{fontSize:14,color:"#535252",marginTop:10}}>
1 Account Registration:{'\n'}
-You must create an account to access the full features of the app.{'\n'}
-Provide accurate and complete information during the registration process.{'\n'}
-You are responsible for maintaining the confidentiality of your account credentials
</Text>
<Text style={{fontSize:14,color:"#535252",marginTop:10}}>
2 Agent Responsibilities:{'\n'}
-As an Agent/Recruiter, you are solely responsible for the candidates you register and job vacancies you post.{'\n'}
-Ensure that the information provided is accurate, lawful, and does not infringe on the rights of others.{'\n'}
</Text>


<Text style={{fontSize:14,color:"#535252"}}>

3 Agent Responsibilities:{'\n'}
As an Agent/Recruiter, you are solely responsible for the candidates you register and job vacancies you post.{'\n'}
Ensure that the information provided is accurate, lawful, and does not infringe on the rights of others.{'\n'}
{'\n'}
4 Candidate Information:{'\n'}
You have permission to add and manage candidates under your account.{'\n'}
Respect candidate privacy and adhere to data protection regulations when handling candidate information.{'\n'}
{'\n'}
5 Job Postings:{'\n'}
Post accurate and genuine job vacancies.{'\n'}
Clearly state job requirements, responsibilities, and any applicable terms and conditions.{'\n'}
Commission and Fees:{'\n'}
Agents are entitled to a commission for successfully placing candidates into jobs.{'\n'}
{'\n'}
6 Data Usage:{'\n'}
[Your Company Name] may collect and use data in accordance with our Privacy Policy.{'\n'}
Agents are responsible for obtaining necessary consents from candidates for data processing.{'\n'}
{'\n'}
7 Code of Conduct:{'\n'}
Maintain professionalism and ethical conduct.{'\n'}
Do not engage in discriminatory practices, harassment, or any illegal activities.{'\n'}
{'\n'}
8 Termination of Account:{'\n'}
[Your Company Name] reserves the right to terminate an account if there is a breach of these Terms.{'\n'}
Agents can terminate their account at any time.{'\n'}
{'\n'}
9 Changes to Terms:{'\n'}
[Your Company Name] may update these Terms at any time.{'\n'}
Agents will be notified of changes, and continued use of the app constitutes acceptance of the revised Terms.{'\n'}
{'\n'}
10 Disclaimer:{'\n'}
[Your Company Name] is not responsible for the accuracy of information provided by Agents, Employers, or Candidates.{'\n'}
The app is provided "as is," without any warranties.{'\n'}
{'\n'}
11 Governing Law:{'\n'}
These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction].{'\n'}
{'\n'}
By using the app, you acknowledge that you have read, understood, and agree to abide by these Terms.{'\n'}If you have any questions or concerns, please contact us at +251-213242349.{'\n'}
Last Updated: [Date]{'\n'}
</Text>



    </View>
   )
    }
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{backgroundColor:"white",marginTop:Constants.statusBarHeight}} >
        <View style={{flexDirection:'row',marginTop:40,marginLeft:20}}>
  
          <Text style={{color:"#273469",fontSize:20,fontWeight:'500'}}>Terms and conditions</Text>
          
            </View>
          
        {MainCont()}

       <TouchableOpacity 
       onPress={()=>{navigation.navigate('signup')}}
       
       style={{width:250,height:42,backgroundColor:"#3680E1",borderWidth:1,borderColor:'#3680E1',borderRadius:10,alignSelf:"center",marginBottom:20}}>

        <Text style={{fontSize:14,color:"white",alignSelf:'center',textAlignVertical:"center",flex:1}}>Agree & Continue</Text>
       </TouchableOpacity>
    </ScrollView>
    )
}