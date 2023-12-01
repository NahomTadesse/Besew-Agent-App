import React, { useState } from "react";
import { View , Button ,Image,Modal,Pressable,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { IndexPath, Layout, Select, SelectItem ,Input,Radio, RadioGroup,Toggle} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
export default function SkillMatching({navigation}){
    const [checked, setChecked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [showpop ,setShowPop] =useState(false)
    const nav = useNavigation();
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
                                            
    
                                                    ]
                                                    const MainCont = () => {
                                                        const rows = [];
                                                        const cardsPerRow = 2;
                                                      
                                                        for (let i = 0; i < skills.length; i += cardsPerRow) {
                                                          const row = (
                                                            <View style={{ flexDirection: 'row' }}>
                                                              {skills.slice(i, i + cardsPerRow).map((sk, index) => {
                                                                return (
                                                                  <TouchableOpacity
                                                                    key={index}
                                                                    style={{
                                                                      height: 34,
                                                                      borderColor: '#CDDFF7',
                                                                      width: 119,
                                                                      borderRadius: 20,
                                                                      borderWidth: 1,
                                                                      marginBottom: 10,
                                                                      marginRight: index === 0 ? 10 : 0,
                                                                    }}
                                                                  >
                                                                    <Text
                                                                      style={{
                                                                        fontSize: 12,
                                                                        flex: 1,
                                                                        textAlignVertical: 'center',
                                                                        alignSelf: 'center',
                                                                      }}
                                                                    >
                                                                      {sk.skill}
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
              
                }}
              >
             <View style={{width:296,height:339,backgroundColor:'white',alignSelf:"center",elevation:10}}>
<View style={{alignSelf:"center",marginTop:30}}>
    <Text style={{fontSize:16,fontWeight:'700',color:"#30343F",alignSelf:"center"}}>Add More Skills</Text>
    <View style={{marginTop:20,marginLeft:20}}>
{MainCont()}
</View>
<View style={{flexDirection:"row"}}>
<TouchableOpacity  onPress={()=>{setShowPop(false)}} style={{alignSelf:"center",width:130,height:42,marginTop:10,borderWidth:1,
    borderColor:"#3680E1",borderRadius:10,marginBottom:20
    
    }}>
        <Text style={{color:"#3680E1",textAlignVertical:"center",alignSelf:"center",flex:1,fontSize:14}}>Cancel</Text>
   
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{setShowPop(false)}} style={{backgroundColor:"#3680E1",alignSelf:"center",marginLeft:20,width:130, height:42,marginTop:10,borderWidth:1,
    borderColor:"#3680E1",borderRadius:10,marginBottom:20
    
    }}>
        <Text style={{color:"white",textAlignVertical:"center",alignSelf:"center",flex:1,fontSize:14}}>Done</Text>
   
    </TouchableOpacity>
</View>
</View>
             </View>
            
              </Pressable>
            </Modal>
          </View>
        );
      };


const firstColumn =[
    {
        skill :"Leadership Skill"
    },
    {
        skill :"Time Management"
    },
    {
        skill :"Adaptablity"
    },
    {
        skill :"Customer Service"
    },
    {
        skill :"Technical Proficency"
    },
    {
        skill :"Customer Focus"
    },
    {
        skill :"Public Speaking"
    },
    {
        skill :"Presentation Skill"
    },
    {
        skill :"Data Entry"
    },
]

const Candidate = [
    {
Name:'Abebe Kebede',
Job:"Customer service",
Skill :["Commnication","Adaptablity","Time Management"],
Sub:"Added on Oct 21/2023 2:30PM"

    },
    {
        Name:'Abebe Kebede',
        Job:"Customer service",
        Skill :["Commnication","Adaptablity","Time Management"],
        Sub:"Added on Oct 21/2023 2:30PM"
        
            },
            {
                Name:'Abebe Kebede',
                Job:"Customer service",
                Skill :["Commnication","Adaptablity","Time Management"],
                Sub:"Added on Oct 21/2023 2:30PM"
                
                    },
                    {
                        Name:'Abebe Kebede',
                        Job:"Customer service",
                        Skill :["Commnication","Adaptablity","Time Management"],
                        Sub:"Added on Oct 21/2023 2:30PM"
                        
                            },
]

const FirstMap =()=>{

    return firstColumn.map((skill , index)=>{

        return(
            <TouchableOpacity style={{width:119, height:34,borderWidth:1,borderRadius:20,borderColor:"#CDDFF7",marginBottom:12,marginLeft:20}}>
                <Text style={{flex:1,textAlignVertical:"center",alignSelf:"center",fontSize:12,color:"#30343F"}}>{skill.skill}</Text>
            </TouchableOpacity>
        )
    })
}
const FirstMapFull = ()=>{

    return(
        <View>
            {FirstMap()}
            <TouchableOpacity  onPress={()=>{setShowPop(true)}} style={{width:119, height:34,borderWidth:1,borderRadius:20,borderColor:"#CDDFF7",backgroundColor:"#3680E1",marginBottom:12,marginLeft:20}}>
                <Text style={{flex:1,textAlignVertical:"center",alignSelf:"center",fontSize:12,color:"white"}}>Add More</Text>
            </TouchableOpacity>
        </View>
    )
}

const SecondMap =()=>{

    return Candidate.map((cand , index)=>{

        return(
            <TouchableOpacity style={{width:207, height:153,borderWidth:1,borderRadius:10,borderColor:"#CDDFF7",marginBottom:12,marginLeft:20}}>
            <View style={{flex:1,flexDirection:"row"}}>
            <Image
                  style={
                    { width: 50, height: 50,marginLeft:12}
                  }
                  source={require("../assets/profile10.png")}
                />
                <View>
                <Text style={{marginTop:15,marginLeft:10}}>
                  {cand.Name} 
                </Text>
                 
                <Text style={{marginTop:5,marginLeft:10}}>
                  {cand.Job}
                </Text>
                </View>
                </View>  

                <View style={{flex:1,flexDirection:"row",marginLeft:12,marginTop:10}}>
                    <View>
                        <Text>Skills : </Text>
                    </View>
                    <View>
                        <Text style={{color:"#034DAE"}}>
                            {cand.Skill.map((skill , index)=>{
                                return(
                                    <Text>
                                        {skill}{'\n'}
                                    </Text>
                                )
                            })}
                        </Text>
                    </View>
                  
                </View>
                <Text style={{fontSize:10,color:"grey",marginVertical:10,marginLeft:12}}>{cand.Sub}</Text>
            </TouchableOpacity>
        )
    })
}

  
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{backgroundColor:"white"}} >
        <View style={{flexDirection:'row',marginTop:42}}>
        <TouchableOpacity onPress={()=>{nav.goBack()}}>
          <Image
                  style={
                    { width: 24, height: 24,marginLeft:20,marginTop:3}
                  }
                  source={require("../assets/arr.png")}
                />
          </TouchableOpacity>
          <Text style={{color:"#273469",fontSize:20,fontWeight:'500',marginLeft:10}}>Skill based  Matching</Text>
          
            </View>
            <View style={{width:screenWidth,height:2,backgroundColor:"#CDDFF7",marginTop:10}}></View>
            <View style={{flexDirection:"row",marginTop:12,marginLeft:20,marginBottom:12}}>
            <Text style={{color:"#30343F",fontSize:14,fontWeight:'700'}}>Skill</Text>
            <Text style={{color:"#30343F",fontSize:14,fontWeight:'700',marginLeft:120}}>Candidates</Text>
            </View>
        {/* {MainCont()}
        {FirstMap()} */}
        {/* {SecondMap()} */}
        <View style={{flexDirection:"row"}}>
            <View>
            {FirstMapFull()} 
            </View>
   <View>
   {SecondMap()}
   </View>
        
        </View>
        <TouchableOpacity  style={{backgroundColor:"#3680E1",alignSelf:"center",width:250, height:42,marginTop:10,borderWidth:1,
    borderColor:"#3680E1",borderRadius:10,marginBottom:20
    
    }}>
        <Text style={{color:"white",textAlignVertical:"center",alignSelf:"center",flex:1,fontSize:14}}>Finish</Text>
   
    </TouchableOpacity>
    {showpop && popUp()}
    </ScrollView>
    )
}