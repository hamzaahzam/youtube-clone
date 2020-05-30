import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import YouHome from './components/YouHome';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="LogIn" component={LogIn} />
        <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp} />
        <Stack.Screen options={{headerShown: false}} name="YouHome" component={YouHome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
