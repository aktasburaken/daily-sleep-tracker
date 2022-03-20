import { StyleSheet, Text, TextProps } from 'react-native'
import React from 'react'

interface AppTextProps extends TextProps {
    children: string
    margin?: boolean
}

export const AppText = ({style, ...props}: AppTextProps) => (
    <Text {...props} style={[styles.text, style]}>{props.children}</Text>
  )

AppText.Title = ({style, ...props}: AppTextProps) => (
    <AppText {...props} style={[styles.title, style]}/>
)

AppText.IsHaveAccount = ({style, ...props}: AppTextProps) => (
    <AppText {...props} style={[styles.isHaveAccount, style, props.margin && styles.margin]} />
)

AppText.HaveorNot = ({style, ...props}: AppTextProps) => (
    <AppText {...props} style={[styles.HaveorNot, style]} />
)

AppText.GoodNight = ({style, ...props}: AppTextProps) => (
    <AppText {...props} style={[styles.goodNight, style]} />
)

AppText.Stats = ({style, ...props}: AppTextProps) => (
    <AppText {...props} style={[styles.statTitle, style]} />
)

AppText.Days = ({style, ...props}: AppTextProps) => (
    <AppText {...props} style={[styles.days, style]} />
)

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    }, 
    isHaveAccount: {
        fontSize: 12,
    },
    HaveorNot: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    margin: {
        marginTop: 10,
    },
    goodNight: {
        fontSize: 23,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 25,
    },
    statTitle: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    days: {
        fontSize: 10,
        fontWeight: 'bold'
    }
})