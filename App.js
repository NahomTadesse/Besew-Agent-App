import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import LaunchScreen from './navigation/LaunchScreen';
import LogIn from './navigation/LogIn';
import SignUp from './navigation/SignUp'
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
      <Stack.Screen name="login" component={LogIn} />
      <Stack.Screen name="signup" component={SignUp} />
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
