import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PrvNumber from '../../screens/whatsapp/PrvNumber';
import GoToWhatsApp from '../../screens/whatsapp/GoToWhatsApp';

const Tab = createBottomTabNavigator();
const WhatsAppTabs = () => {
    return (
        <Tab.Navigator initialRouteName='gotowhatsapp' 
        screenOptions={({route})=>({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'gotowhatsapp') {
                    iconName = focused
                        ? 'home'
                        : 'home';
                } else if (route.name === 'prvnumber') {
                    iconName = focused ? 'save' : 'save';
                }
                return <AntDesign name={iconName} size={size} color={color} />
            }
        })}>
            <Tab.Screen name="gotowhatsapp" component={GoToWhatsApp} options={{ headerShown: false }} />
            <Tab.Screen name="prvnumber" component={PrvNumber} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default WhatsAppTabs
