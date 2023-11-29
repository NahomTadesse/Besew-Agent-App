import React, { useState } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';

export default function JobDetails({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)

const mainCont =()=>{

    return(
        <View>
              <TouchableOpacity
       
       style={{width:360,borderColor:'#868686',
        alignSelf:"center"}}>
<View style={{flexDirection:"row",height:45,marginTop:10,marginLeft:5}}>
   <View style={{width:screenWidth/2}}>
   <Text style={{color:'#868686',fontSize:14}}>Job Title</Text>
   <Text>Customer Sevice</Text>
   </View>
   <View style={{width:screenWidth/2}}>
   <Text style={{textAlign:'right',marginRight:95,color:'#868686',fontSize:14}}>Company</Text>
   <Text style={{textAlign:'right',marginRight:50}}>Customer Sevice</Text>
   </View>

</View>
<View style={{flexDirection:"row",height:45,marginTop:5,marginLeft:5}}>
   <View style={{width:screenWidth/2}}>
   <Text style={{color:'#868686',fontSize:14}}>Contact</Text>
   <Text>+251-912345678</Text>
   </View>
   <View style={{width:screenWidth/2}}>
   <Text style={{textAlign:'right',marginRight:100,color:'#868686',fontSize:14}}>Address</Text>
   <Text style={{textAlign:'right',marginRight:125}}>Bole</Text>
   </View>

</View>

<View style={{flexDirection:"row",height:45,marginLeft:5}}>
   <View style={{width:screenWidth/2}}>
   <Text style={{color:'#868686',}}>Vacancies
</Text>
   <Text>3</Text>
   </View>
   <View style={{width:screenWidth/2,}}>
   <Text style={{marginLeft:37,color:'#868686'}}>Matched Candidates</Text>
   <Text style={{textAlign:'right',marginRight:145}}>3</Text>
   </View>

</View>
<View style={{marginTop:12,backgroundColor:'#CDDFF7',height:2,marginBottom:10}}></View>
<View style={{flexDirection:"row",height:45,marginLeft:5,marginTop:10}}>
   <View style={{width:screenWidth/2 ,flexDirection:"row"}}>
   <Text style={{color:'#868686',}}>12 Candidates applied
</Text>
<TouchableOpacity style={{marginLeft:80}} onPress={()=>{navigation.navigate('canlist')}}>
   <Text style={{marginLeft:5,color:'#3680E1'}}>View Candidates</Text>
   </TouchableOpacity>
   </View>


</View>
<View style={{backgroundColor:'#CDDFF7',height:2}}></View>
        </TouchableOpacity>
        </View>
    )
}
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{backgroundColor:"white"}}>
<View style={{flexDirection:'row',marginTop:42}}>
          <Image
              style={
                { width: 24, height: 24,marginLeft:20,marginTop:3}
              }
              source={require("../assets/arr.png")}
            />
          <Text style={{color:"#273469",fontSize:18,fontWeight:'500',marginLeft:10}}>
            
     Jobs
            
            </Text>
          
            </View>
            <View style={{marginTop:12,backgroundColor:'#CDDFF7',height:2}}></View>

            {mainCont()}

        </ScrollView>
    )
}