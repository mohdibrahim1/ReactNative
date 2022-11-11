import { Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfirmEmailScreen from '../screen/ConfirmEmailScreen';
import ForgetPasswordScreen from '../screen/ForgetPasswordScreen';
import NewPasswordScreen from '../screen/NewPasswordScreen/NewPasswordScreen';
import SignInScreen from '../screen/SignInScreen';
import SignUpScreen from '../screen/SignUpScreen/SignUpScreen';

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name ="Sign In" component={SignInScreen}/> */}
            </Stack.Navigator>
            <Text>Hello Ibrahim</Text>
        </NavigationContainer>
    )
}

export default Navigation