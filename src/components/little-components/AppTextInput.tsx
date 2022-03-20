import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

interface AppTextProps extends TextInputProps {
  placeHolder: string
  margin: boolean
  icon: any
}

export const AppTextInput = ({style, icon, margin, ...props}: AppTextProps) => {
  console.log(icon)
  return ( 
    <View style={styles.container}>
      {icon}
      <TextInput placeholder={props.placeHolder} style={[styles.textInput, style, margin && styles.margin ]} />
    </View>
  )
}

AppTextInput.username = ({style, icon, margin, ...props}: AppTextProps) => {
  return(
    <View style={styles.container}>
      {icon}
      <TextInput placeholder={props.placeHolder} style={[styles.textInput, style, margin && styles.margin]} />
    </View>
  )
}

AppTextInput.password = ({style, icon, margin, ...props}: AppTextProps) => {
  return(
    <View style={styles.container}>
      {icon}
      <TextInput placeholder={props.placeHolder} style={[styles.textInput, style, margin && styles.margin]} />
    </View>
  )
}

AppTextInput.email = ({style, icon, margin, ...props}: AppTextProps) => {
  return(
    <View style={styles.container}>
      {icon}
      <TextInput placeholder={props.placeHolder} style={[styles.textInput, style, margin && styles.margin]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems:'center'
  },
  textInput: {
    marginTop: 15,
    fontSize: 15,
    width: '70%',
    height: 40,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderRadius: 30,
  },
  margin: {
    marginTop: 20,
  }
})

