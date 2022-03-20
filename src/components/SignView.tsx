import { View, StyleSheet, ViewProps } from 'react-native'
import * as React from 'react'

interface SignViewProps extends ViewProps {
  children: JSX.Element|JSX.Element[];
  signUp: boolean
}

// signview.in and up dont work they push signview.

export const SignView = ({style, signUp, ...props}: SignViewProps) => {
  if(signUp) {
    return(
      <View {...props} style={[styles.signUp]}></View>
    )
  } else {
    return(
      <View {...props} style={[styles.signIn]}></View>
    )
  }
}

// SignView.In = ({style, ...props}: SignViewProps) => (
//   <SignView {...props} style={[styles.signIn, style, props.margin && styles.margin]} />
// )

// SignView.Up = ({style, ...props}: SignViewProps) => (
//   <SignView {...props} style={[styles.signUp, style]} />
// )

const styles = StyleSheet.create({
  signIn: {
    height: 300,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4FDD8',
    borderRadius: 15,
  },
  signUp: {
    height: 400,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4FDD8',
    borderRadius: 15,
  },
})