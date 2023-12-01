import React, { useState } from "react";
import { View , Button,Modal,Pressable,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import StarRating from 'react-native-star-rating-widget';
export default function ChooseSpeciality({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [rating, setRating] = useState(0);
    const [showpop ,setShowPop] =useState(false)

const skills = [
    {
skill :"HealthCare"
    },
    {
        skill :"Finance and Accounting"
            },
            {
                skill :"Engineering"
                    }
                    ,    {
                        skill :"Sales and Marketing"
                            },
                            {
                                skill :"Education"
                                    }       ,
                                    {
                                        skill :"Manufacturing and Operations"
                                            },
                                            {
                                                skill :"Legal"
                                                    }                 
                                                    ,
                                                    {
                                                        skill :"Supply Chain and Logistics"
                                                            },
                                                            {
                                                                skill :
                                                                "Nonprofit"
                                                                    }
                                                                    ,    {
                                                                        skill :"Customer Service and Support"
                                                                            },
                                                                            ,    {
                                                                                skill :"Construction and Real Estate"
                                                                                    },
                                                                                    ,    {
                                                                                        skill :"Government and Public Sector"
                                                                                            },


                                                ]

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

  navigation.navigate('home')
}
const MainCont = () => {
    const rows = [];
    const cardsPerRow = 2;
  
    for (let i = 0; i < skills.length; i += cardsPerRow) {
      const row = (
        <View style={{ flexDirection: 'row',alignSelf:"center",marginTop:20 }}>
          {skills.slice(i, i + cardsPerRow).map((name, index) => {
            const width = index % 2 === 0 ? 100 : 200;
  
            return (
              <TouchableOpacity
                key={index}
                style={{
                  height: 37,
                  width: width,
                
                  borderWidth: 1,
                  borderColor: '#CDDFF7',
                  borderRadius: 10,
                  margin: 5,
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    alignSelf: 'center',
                    textAlignVertical: 'center',
                  }}
                >
                  {name.skill}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
  
      rows.push(row);
    }
  
    return <View>{rows}</View>;
  };
  
    const skill=()=>
    {
        return(
            <View>

        
            </View>
        )
    }
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{backgroundColor:"white"}} >
        <View style={{marginTop:90}}>
    
          <Text style={{color:"#273469",fontSize:20,fontWeight:'500',textAlign:"center"}}>Choose your field of speciality </Text>
          
            </View>
         
      
            {MainCont()}
        <TouchableOpacity onPress={save} style={{backgroundColor:"#3680E1",alignSelf:"center",width:250, height:41,marginTop:30,borderWidth:1,
    borderColor:"#3680E1",borderRadius:10,marginBottom:20
    
    }}>
        <Text style={{color:"white",textAlignVertical:"center",alignSelf:"center",flex:1,fontSize:14}}>Next</Text>
     
    </TouchableOpacity>
    </ScrollView>
    )
}