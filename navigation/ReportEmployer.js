import React, { useState,useCallback } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import { Pressable } from "react-native";
import RangeSlider from 'rn-range-slider';
import { Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function ReportEmployer ({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [isnext , setIsNext] = useState(false)
    const [isSelected,setIsSelected] = useState(false)
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
    const nav = useNavigation();

    const mainCont = ()=>{

        return(
            <View style={{marginTop:20}}>
<View style={{flex:1,flexDirection:'row',marginBottom:20,marginLeft:20}}>
<Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={{color:'#023A82',fontWeight:'600',fontSize:16}}>
    Non-payment or delayed payment{'\n'}
    <Text style={{color:'#868686',fontWeight:'200',fontSize:14}}>  
    Employer fails to provide payment for the{'\n'}candidate's services or delays payments beyond{'\n'}the agreed-upon terms
        </Text>
    </Text>

</View>
<View style={{flex:1,flexDirection:'row',marginBottom:20,marginLeft:20}}>
<Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={{color:'#023A82',fontWeight:'600',fontSize:16}}>
    Violation of employment terms.{'\n'}
    <Text style={{color:'#868686',fontWeight:'200',fontSize:14}}>  
    employers fail to uphold agreed-upon working{'\n'}conditions, benefits, or any other contractual{'\n'}terms
        </Text>
    </Text>

</View>
<View style={{flex:1,flexDirection:'row',marginBottom:20,marginLeft:20}}>
<Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={{color:'#023A82',fontWeight:'600',fontSize:16}}>
    Unethical behavior.
{'\n'}
    <Text style={{color:'#868686',fontWeight:'200',fontSize:14}}>  
    Unethical practices by employers include:{'\n'}harassment, discrimination, or any behavior that{'\n'}goes against ethical employment standards.
        </Text>
    </Text>

</View>
<View style={{flex:1,flexDirection:'row',marginBottom:20,marginLeft:20}}>
<Checkbox
         color="green"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={{color:'#023A82',fontWeight:'600',fontSize:16}}>
    Misinforming{'\n'}
    <Text style={{color:'#868686',fontWeight:'200',fontSize:14}}>  
    Employer didnot provide accurate information{'\n'}about number of available vacancies, job{'\n'}requirement 
        </Text>
    </Text>

</View>
            </View>
        )
    }



    return(
        <ScrollView style={{backgroundColor:'white'}} contentContainerStyle={{ flexGrow: 1 }}>
   <View style={{flexDirection:'row',marginTop:42}}>
   <TouchableOpacity onPress={()=>{nav.goBack()}}>
          <Image
                  style={
                    { width: 24, height: 24,marginLeft:20,marginTop:3}
                  }
                  source={require("../assets/arr.png")}
                />
          </TouchableOpacity>
          <Text style={{color:"#273469",fontSize:18,fontWeight:'500',marginLeft:10}}> 
          Commissions
            </Text>
          
            </View>
            <View style={{marginTop:12,backgroundColor:'#CDDFF7',height:2}}></View>


{mainCont()}

<TouchableOpacity onPress={()=>{}}  style={{height:48,width:250,backgroundColor:'#3680E1',
borderWidth:1,borderRadius:10,borderColor:'#3EC6FF',marginRight:10,alignSelf:'center',marginBottom:20,marginTop:20}}><Text 
style={{flex:1,textAlignVertical:'center',alignSelf:"center",color:'white'}}>Submit report</Text></TouchableOpacity>
            
        </ScrollView>
    )
}