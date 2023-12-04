import React, { useState } from "react";
import { View , Button ,Image ,ScrollView,TextInput,Dimensions,TouchableOpacity,Text,TouchableWithoutFeedback,StyleSheet } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { Table, Row, Rows } from 'react-native-table-component';
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
export default function CompaniesTab({navigation}){
const topTab =()=>{
    return(
        <View style={{flex:1,flexDirection:"row",alignSelf:"center",marginTop:10}}>
<TouchableOpacity style={{width:160 , height :33,backgroundColor:"#FFC000"}}>
    <Text style={{flex:1,textAlignVertical:"center",alignSelf:"center"}}>Favorite</Text>
</TouchableOpacity>
<TouchableOpacity  style={{width:160 , height :33,borderWidth:1,borderColor:"#FFC000",marginLeft:10}}>
    <Text style={{flex:1,textAlignVertical:"center",alignSelf:"center"}}>Frequent</Text>
</TouchableOpacity>
        </View>
    )
}
const tableData = {
    
    tableHead: ['Company', 'Date', '# of vacancies'],
    tableData: [
        ['Ethio-Telecom', '22/03/2022', '40'],
        ['Safaricom', '19/03/2022', '25'],
        ['EBS', '19/03/2022', '65'],
        ['Kana', '19/03/2022', '10'],
   
    ],
};

const table =()=>{
    const [data, setData] = useState(tableData);
    return(
        <View >
      <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 0,borderColor: 'teal' }}>
                <Row data={data.tableHead} style={styles.head} textStyle={styles.headText} />
                <Rows data={data.tableData} textStyle={styles.text} />
            </Table>
        </View>
        </View>
    )
}

    return(
        <View>
{topTab()}
{table()}
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1,justifyContent: 'center',marginTop:20 },
    head: { height: 40, backgroundColor: '#E9F1FB' },
    headText: { fontSize: 14, fontWeight: '500' , textAlign: 'center', color: '#30343F' },
    text: { margin: 6, fontSize: 14, fontWeight: '300' , textAlign: 'center',color: '#30343F' },
})