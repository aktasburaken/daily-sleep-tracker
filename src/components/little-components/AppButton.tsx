import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'

interface AppTouchableOpacityProps extends TouchableOpacityProps {
    name: any
    click: any
}

export const AppButton = ({name, click, ...props}:AppTouchableOpacityProps) => (
    <TouchableOpacity {...props} style={props.style} onPress={click}> 
        <Text style={styles.text}>
            {name}
        </Text>
    </TouchableOpacity>
  )

AppButton.AddData = ({...props}:AppTouchableOpacityProps)  => (
    <AppButton {...props} style={styles.addData} />
)

AppButton.Sign = ({...props}:AppTouchableOpacityProps) => (
    <AppButton {...props} style={styles.button} />
)

const styles = StyleSheet.create({
    button: {
        width: '50%',
        height: 30,
        marginTop:17,
        borderRadius: 30,
        backgroundColor: '#3897f0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    },
    addData: {
        backgroundColor: '#469AE4',
        marginLeft: '70%',
        marginTop: 50,
        width: 55,
        height: 55,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})