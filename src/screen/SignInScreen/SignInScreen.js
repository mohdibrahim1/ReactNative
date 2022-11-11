import { View, Text, Image, StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import logo from '../../../asset/images/doralLogo.png'
import React, { useState } from 'react'
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
import SocialSignInButton from '../../../SocialSignInButton';

const SignInScreen = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const { height } = useWindowDimensions();

    const onSignInPress = () => {
        console.warn("Hello Ibrahim You'r Successfuly Loging")
    }
    const onSignUpPress = () => {
        console.warn("Sign-Up")
    }
    const forgetPassWord = () => {
        console.warn("Hello Ibrahim Forget PassWord")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain"></Image>
            <CustomInput placeholder="User Name" value={userName} setValue={setUserName} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
            <CustomButton onPress={onSignInPress} text="sign in" />
            <CustomButton onPress={forgetPassWord} text="Forget PassWord" type="TERTIARY" />
            <SocialSignInButton/>
            <CustomButton onPress={onSignUpPress} text="Dont have an account ? Sign-Up" type="TERTIARY" />
        </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 100
    }
})
export default SignInScreen