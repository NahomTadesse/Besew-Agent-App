import React, { useState } from "react";
import { View , Button,Modal,Pressable,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import SelectDropdown from 'react-native-select-dropdown'
import StarRating from 'react-native-star-rating-widget';
export default function Interview({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [rating, setRating] = useState(0);
    const [showpop ,setShowPop] =useState(false)

    const countries = ["1", "2", "3", "4"]

    const popUp = () => {
       
        return (
          <View>
            <Modal
              transparent={true}
              onRequestClose={() => {
               setShowPop(false)
              }}
            >
              <Pressable
              onPress={(event) => event.target == event.currentTarget && setShowPop(false)}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  backgroundColor: "white",
                  opacity: 0.9,
                }}
              >
                <View style={{width:271,height:238,backgroundColor:'white',alignSelf:'center',elevation:2}}>
<Text style={{alignSelf:"center",marginTop:60,fontWeight:'bold',fontSize:20,color:'#273469'}}>Average Interview Result</Text>

<Text style={{alignSelf:'center',marginTop:20,fontSize:32,color:"#3680E1"}}>8/10</Text>
                </View>

            
              </Pressable>
            </Modal>
          </View>
        );
      };
const save = ()=>{

    setShowPop(true)
}
    const MainCont =()=>{
   return(
    <View style={{marginTop:20}}>
  <TouchableOpacity
       
       style={{width:360,borderColor:'#868686',
        alignSelf:"center",borderWidth:1,borderColor:"#6E6BD9",borderRadius:10  }}>
<View style={{flexDirection:"row",height:45,marginTop:5,marginLeft:5}}>
   <View style={{width:screenWidth/2}}>
   <Text style={{color:'#868686',fontSize:14}}>Candidate name</Text>
   <Text>Abebe</Text>
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

</View>

        </TouchableOpacity>
<Text style={{marginLeft:25,fontSize:14,color:"#30343F",marginTop:14}}>{`Can you describe your experience with\n[specific skill or task relevant to the job]`}</Text>
   <TextInput
    //    placeholder="Write the job's description"
       textAlignVertical="top"
       placeholderTextColor='#CBCBCB'
       label='Enter Job Title'
   style={{marginTop:5,width:338,height:126,alignSelf:'center',borderWidth:1,
   borderColor:'#CDDFF7',padding:10}}
   />
     <StarRating
        rating={rating}
        onChange={setRating}
        color="green"
        starSize={16}
        style={{marginLeft:20,marginTop:5}}
      />
   <Text style={{marginLeft:25,fontSize:14,color:"#30343F",marginTop:14}}>What skills do you possess that make you a good{'\n'}fit for this role?</Text>
   <TextInput
    //    placeholder="Write the job's description"
       textAlignVertical="top"
       placeholderTextColor='#CBCBCB'
       label='Enter Job Title'
   style={{marginTop:5,width:338,height:126,alignSelf:'center',borderWidth:1,
   borderColor:'#CDDFF7',padding:10}}
   />
     <StarRating
         rating={rating}
         onChange={setRating}
         color="green"
         starSize={16}
         style={{marginLeft:20,marginTop:5}}
      />

    </View>
   )
    }

    const skill=()=>
    {
        return(
            <View>

                <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
                    <Text style={{fontSize:14,color:"#30343F",textAlignVertical:"center",marginLeft:20}}>Communication skills</Text>
                    {/* <Select
        selectedIndex={selectedIndex}
        placeholder="Employment Type"
        
        onSelect={index => setSelectedIndex(index)}
        style={{width:50,alignSelf:"flex-end",backgroundColor:'white',marginRight:25}}
      >
        <SelectItem title='1' />
        <SelectItem title='2' />
       
      </Select> */}
<View style={{marginRight:25}}>
<SelectDropdown
	data={countries}
  buttonStyle={{width:50,backgroundColor:'#CDDFF7',height:27}}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
  defaultButtonText='1'
/>
</View>
                </View>
                <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
                    <Text style={{fontSize:14,color:"#30343F",textAlignVertical:"center",marginLeft:20}}>Professionalism</Text>
                    <View style={{marginRight:25}}>
<SelectDropdown
	data={countries}
  buttonStyle={{width:50,backgroundColor:'#CDDFF7',height:27}}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
  defaultButtonText='1'
/>
</View>
                </View>
                <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
                    <Text style={{fontSize:14,color:"#30343F",textAlignVertical:"center",marginLeft:20}}>Listening Skills</Text>
                    <View style={{marginRight:25}}>
<SelectDropdown
	data={countries}
  buttonStyle={{width:50,backgroundColor:'#CDDFF7',height:27}}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
  defaultButtonText='1'

/>
</View>
                </View>
            </View>
        )
    }
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{backgroundColor:"white"}} >
        <View style={{flexDirection:'row',marginTop:42}}>
          <Image
              style={
                { width: 24, height: 24,marginLeft:20,marginTop:3}
              }
              source={require("../assets/arr.png")}
            />
          <Text style={{color:"#273469",fontSize:20,fontWeight:'500',marginLeft:10}}>Interview</Text>
          
            </View>
            <View style={{width:screenWidth,height:2,backgroundColor:"#CDDFF7",marginTop:20}}></View>
        {MainCont()}
        {skill()}
        {showpop && popUp()}
        <TouchableOpacity onPress={save} style={{backgroundColor:"#3680E1",alignSelf:"center",width:250, height:41,marginTop:30,borderWidth:1,
    borderColor:"#3680E1",borderRadius:10,marginBottom:20
    
    }}>
        <Text style={{color:"white",textAlignVertical:"center",alignSelf:"center",flex:1,fontSize:14}}>Save</Text>
    </TouchableOpacity>
    </ScrollView>
    )
}