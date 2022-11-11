import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SocialSignInButton from '../../../SocialSignInButton';

const SignUpScreen = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatpPassword] = useState('')

    const onRegisterPress = () => {
        console.warn("onRegisterPress")
    }
    const onSignIn = () => {
        console.warn("Sign-In")
    }
    const onTermsOfUse = () => {
        console.warn("onTermsOfUse")
    }
    const onPrivacy = () => {
        console.warn("onPrivacy")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput placeholder="User Name" value={userName} setValue={setUserName} />
                <CustomInput placeholder="Email" value={email} setValue={setEmail} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
                <CustomInput placeholder="Repeat Password" value={repeatPassword} setValue={setRepeatpPassword} secureTextEntry={true} />
                <CustomButton onPress={onRegisterPress} text="Register" />
                <Text style={styles.text}>By registeration, you confirm that your accept our {''}<Text style={styles.link} onPress={onTermsOfUse}> Term of Use</Text> and <Text style={styles.link} onPress={onPrivacy}>Privacy Policy</Text></Text>
                <SocialSignInButton/>
                <CustomButton onPress={onSignIn} text="have an account ? Sign-In" type="TERTIARY" />
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
export default SignUpScreen