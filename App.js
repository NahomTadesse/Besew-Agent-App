import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import LaunchScreen from './navigation/LaunchScreen';
import LogIn from './navigation/LogIn';
import SignUp from './navigation/SignUp'
import HomeScreen from './navigation/HomeScreen';
import DashBoard from './navigation/DashBoard'
import Profile from './navigation/Profile';
import Message from './navigation/Message'
import AgentSearch from './navigation/AgentSearch';
import Post from './navigation/Post';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   
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
      <Stack.Screen name="signup" component={SignUp}  options={{title:'Sign-Up'}} />
      <Stack.Screen name="home" component={HomeScreen}  options={{title:'Home'}} />
      <Stack.Screen name="dashboard" component={DashBoard}  options={{title:'Dashboard'}} />
      <Stack.Screen name="profile" component={Profile}  options={{title:'Profile'}}/>
      <Stack.Screen name="message" component={Message}  options={{title:'Message'}} />
      <Stack.Screen name="agentsearch" component={AgentSearch} options={{title:'Search'}} />
      <Stack.Screen name="post" component={Post} options={{title:'Post'}} />

      
    </Stack.Navigator>
  </NavigationContainer>
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
