import React from 'react';
import OnBoarding from '../Screens/OnBoardingScreen/OnBoarding';
import AppStack from './AppStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={OnBoarding} />
            <Stack.Screen name="Home" component={AppStack} />
        </Stack.Navigator>
    );
};

export default AuthStack;