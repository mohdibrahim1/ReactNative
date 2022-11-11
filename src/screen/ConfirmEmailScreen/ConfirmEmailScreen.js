import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SocialSignInButton from '../../../SocialSignInButton';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('')

    const onSignIn = () => {
        console.warn("onRegisterPress")
    }
    const onConfirmPressed = () => {
        console.warn("Sign-In")
    }
    const onResendCode = () => {
        console.warn("onTermsOfUse")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm Your Email</Text>
                <CustomInput placeholder="Enter your confirm code" value={code} setValue={setCode}   />
                <CustomButton onPress={onConfirmPressed} text="confirm" />
                <CustomButton onPress={onResendCode} text="Resend Code" type="SECONDARY" />
                <CustomButton onPress={onSignIn} text="Back To sign in" type="TERTIARY" />
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    link: {
        color: "#FDB075"
    },
    text: {
        color: "gray",
        marginVertical: 5
    }
})
export default ConfirmEmailScreen