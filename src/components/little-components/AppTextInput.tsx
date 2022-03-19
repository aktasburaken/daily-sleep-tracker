import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import React from 'react'

interface AppTextProps extends TextInputProps {
  placeHolder: string
  margin: boolean
}

export const AppTextInput = ({style,margin, ...props}: AppTextProps) => {
  return (
    <TextInput placeholder={props.placeHolder} style={[styles.textInput, style, margin && styles.margin ]} />
  )
}

const styles = StyleSheet.create({
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

