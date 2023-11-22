import { StyleSheet, Text, View } from 'react-native';
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
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}> 
    <NavigationContainer>
    <Stack.Navigator>
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
    </Stack.Navigator>
  </NavigationContainer>
  </ApplicationProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
