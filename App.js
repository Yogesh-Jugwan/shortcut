import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home/Home';
import WhatsApp from './screens/whatsapp/WhatsApp';
import { NativeBaseProvider } from "native-base";

const screen = createNativeStackNavigator()
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <screen.Navigator initialRouteName='home'>
          <screen.Screen name='home' component={Home} options={{ title: '' }} />
          <screen.Screen name='whatsapp' component={WhatsApp} options={{ title: '' }} />
        </screen.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

