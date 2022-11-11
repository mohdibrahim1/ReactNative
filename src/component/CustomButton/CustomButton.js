import { Text, Button, View, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type="PRIMARY",bgColor,fgColor }) => {
  return (
    <Pressable style={[styles.container,styles[`container_${type}`],bgColor ? {backgroundColor:bgColor}:{}]} onPress={onPress}>
      <Text style={[styles.text,styles[`text_${type}`] , fgColor ? {color : fgColor} : {}]}>{text}</Text>
    </Pressable>
    // <Pressable onPress={onPress} style={styles.container}>
    //   <Text style={styles.text}>{text}</Text>
    // </Pressable>
    // <Button title='Save' style={styles.abcd} onPress={onPress}/>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  container_PRIMARY: {
    backgroundColor: '#3B71f3',
  },
  container_SECONDARY: {
    borderColor: '#3B71f3',
    borderWidth:5
  },
  container_TERTIARY: {

  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  text_TERTIARY: {
    color: 'gray'
  },
  text_SECONDARY: {
    color:'#3871F3',
  },
})
export default CustomButton