import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/Navigation';
// import ConfirmEmailScreen from './src/screen/ConfirmEmailScreen';
// import ForgetPasswordScreen from './src/screen/ForgetPasswordScreen';
// import NewPasswordScreen from './src/screen/NewPasswordScreen/NewPasswordScreen';
// import SignInScreen from './src/screen/SignInScreen';
// import SignUpScreen from './src/screen/SignUpScreen/SignUpScreen';

const App = () => {

  return (
    <SafeAreaView style={styles.root}>
      {/* <SignInScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <ConfirmEmailScreen/> */}
      {/* <ForgetPasswordScreen/> */}
      {/* <NewPasswordScreen/> */}
      <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#F9FBFC'
  },
});

export default App;
