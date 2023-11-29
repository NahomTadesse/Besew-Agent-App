import { StyleSheet, Text, View ,AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import LaunchScreen from './navigation/LaunchScreen';
import LogIn from './navigation/LogIn';
import SignUp from './navigation/SignUp'
import HomeScreen from './navigation/HomeScreen';
import DashBoard from './navigation/DashBoard'
import Profile from './navigation/Profile';
import Message from './navigation/Message'
import AgentSearch from './navigation/AgentSearch';
import Post from './navigation/Post';
import Boarding from './navigation/Boarding';
import AgentBoarding from './navigation/AgentBoarding';
import EditPro from './navigation/EditPro';
import EditPersonal from './navigation/EditPersonal'
import Notification from './navigation/Notification';
import Report from './navigation/Report';
import AddJobOpening from './navigation/AddJobOpening'
import AddCandidate from './navigation/AddCandidate'
import EditCandidate from './navigation/EditCandidate'
import Language from './navigation/Language';
import PostJob from './navigation/PostJob';
import PostType from './navigation/PostType' 
import Comission from './navigation/Comission';
import ReportEmployer from './navigation/ReportEmployer';
import NotificationRing from './navigation/NotificationRing';
import CandidatesList from './navigation/CandidatesList';
import BottomNav from './navigation/BottomNav';
import Match from './navigation/Match';
import MatchingSecond from './navigation/MatchingSecond';
import SeeCandidate from './navigation/SeeCandidates';
import FeedBack from './navigation/FeedBack';
import Filter from './navigation/Filter'
import MatchInterview from './navigation/MatchInterview';
import JobDetails from './navigation/JobDetails';
import Jobs from './navigation/Jobs';
import { NativeBaseProvider, Box } from "native-base";
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <View style={{ marginTop:Constants.statusBarHeight}}>
    <ApplicationProvider {...eva} theme={eva.light}> 
   
    <NavigationContainer >
    <StatusBar style="auto" />
    <Stack.Navigator  >
    <Stack.Screen name="lang" component={Language} options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
      <Stack.Screen name="launch" component={LaunchScreen}
           options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })}
      />
      <Stack.Screen name="login" component={LogIn}  options={{title:'Log-In'}}
     />
      <Stack.Screen name="signup" component={SignUp}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
      <Stack.Screen name="home" component={HomeScreen} options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
      <Stack.Screen name="dashboard" component={DashBoard}  options={{title:'Dashboard'}} />
      <Stack.Screen name="profile" component={Profile}   options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })}/>
      <Stack.Screen name="message" component={Message}  options={{title:'Message'}} />
      <Stack.Screen name="agentsearch" component={AgentSearch} options={{title:'Search'}} />
      <Stack.Screen name="post" component={Post} options={{title:'Post'}} />
      <Stack.Screen name="board" component={Boarding}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
            <Stack.Screen name="agboard" component={AgentBoarding}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
     <Stack.Screen name="not" component={Notification}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
<Stack.Screen name="editpersonal" component={EditPersonal}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
      <Stack.Screen name="editpro" component={EditPro}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />

<Stack.Screen name="addcandid" component={AddCandidate}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />

<Stack.Screen name="editcandid" component={EditCandidate}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
          <Stack.Screen name="report" component={Report}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />

          <Stack.Screen name="addjob" component={AddJobOpening}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
                <Stack.Screen name="postjob" component={PostJob}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />

<Stack.Screen name="posttype" component={PostType}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
          <Stack.Screen name="com" component={Comission}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
               <Stack.Screen name="reporte" component={ReportEmployer}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
                      <Stack.Screen name="notir" component={NotificationRing}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
                          <Stack.Screen name="bnav" component={BottomNav}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
                               <Stack.Screen name="match" component={Match}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
          <Stack.Screen name="matchsecond" component={MatchingSecond}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
                  <Stack.Screen name="seecand" component={SeeCandidate}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />

<Stack.Screen name="feedback" component={FeedBack}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />

<Stack.Screen name="job" component={Jobs}     options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />

<Stack.Screen name="filter" component={Filter} options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />

<Stack.Screen name="canlist" component={CandidatesList} options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />

<Stack.Screen name="matchint" component={MatchInterview} options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
          <Stack.Screen name="jobdetail" component={JobDetails} options={() => ({
            tabBarStyle: {
              display: "none",
            },
  
            tabBarButton: () => null,
            headerShown: false,
          })} />
              
    </Stack.Navigator>
  </NavigationContainer>

  </ApplicationProvider>

  );
}
AppRegistry.registerComponent(appName, () => App);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
