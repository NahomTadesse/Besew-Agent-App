import React, { useState } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

import { IndexPath, Layout, Select, SelectItem ,Input} from '@ui-kitten/components';
import { Pressable } from "react-native";
import Constants from 'expo-constants';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
export default function ScheduleTab({navigation}){

   const cardData = [
    {
        name :'EBS',
        openings : '5',
        scheduled :'3',
        job1 :'sales',
        job2:'customer service'
    },
    {
        name :'Kana',
        openings : '5',
        scheduled :'3',
        job1 :'sales',
        job2:'customer service'
    },
   ]

   const card =()=>{

    return cardData.map((data,index)=>{
return(
    <View style={{width:342 , height:89 ,borderWidth:1,borderColor:"#CDDFF7",marginBottom:10,}}>
<View style={{flexDirection:"row",flex:1,justifyContent:"space-between",marginTop:10,marginHorizontal:10,maxHeight:30}}> 
    <Text> {data.name}</Text>
    <View style={{width:73,height:22,backgroundColor:"#D9D9D9",borderColor:"#D9D9D9",borderWidth:1,borderRadius:10}}>
        <Text style={{flex:1,textAlignVertical:"center",alignSelf:"center"}}>Weekly</Text>
    </View>
</View>
<Text style={{marginLeft:10}}>{data.openings} Job Openings</Text>
<View style={{flexDirection:"row",flex:1,justifyContent:"space-between",marginTop:5,marginHorizontal:10,maxHeight:30}}> 
    <Text>{data.scheduled} Scheduled jobs in</Text>
    <View style={{height:22,borderColor:"#CDDFF7",borderWidth:1,borderRadius:10}}>
        <Text style={{flex:1,textAlignVertical:"center",alignSelf:"center",marginHorizontal:10}}>{data.job1}</Text>
    </View>
    <View style={{height:22,borderColor:"#CDDFF7",borderWidth:1,borderRadius:10}}>
        <Text style={{flex:1,textAlignVertical:"center",alignSelf:"center",marginHorizontal:10}}>{data.job2}</Text>
    </View>
</View>
    </View>
)

    })
}
   
    return(
        <View style={{alignSelf:"center"}}>

{card()}
        </View>
    )
}