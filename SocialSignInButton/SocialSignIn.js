import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../src/component/CustomButton'

const SocialSignIn = () => {
    const SignInWithGoogle = () => {
        console.warn("Sign In With Google")
    }
    const SignInWithFacebook = () => {
        console.warn("Sign In With Facebook")
    }
    const SignInWithApple = () => {
        console.warn("Sign In With Apple")
    }
    return (
        <>
            <CustomButton onPress={SignInWithGoogle} text="Sign-In With Google" bgColor="#FAE9EA" fgColor="#DD4D44" />
            <CustomButton onPress={SignInWithFacebook} text="Sign-In With Facebook" bgcColor="#E7EAF4" fgColor="#4765A9" />
            <CustomButton onPress={SignInWithApple} text="Sign-In With Apple" bgcColor="#e3e3e3" fgColor="#363636" />
        </>
    )
}

export default SocialSignIn