import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SocialSignInButton from '../../../SocialSignInButton';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const onSignIn = () => {
        console.warn("onRegisterPress")
    }
    const onSubmitPressed = () => {
        console.warn("onSubmitPressed")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset Your Password</Text>
                <CustomInput placeholder="code" value={code} setValue={setCode}/>
                <CustomInput placeholder="Enter Your New Password" value={newPassword} setValue={setNewPassword}/>
                <CustomButton onPress={onSubmitPressed} text="Submit" />
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
export default NewPasswordScreen