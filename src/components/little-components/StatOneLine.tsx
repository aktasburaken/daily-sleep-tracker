import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const StatOneLine = ({...props}:any) => {
  return (
    <View style={styles.oneLine}>
      <View style={styles.onePart}><Text>{props.TimeOfSleep}</Text></View>
      <View style={styles.onePart}><Text>{props.WakeUpTime}</Text></View>
      <View style={styles.onePart}><Text>{props.SleepDuration}</Text></View>
    </View>
  )
}

export default StatOneLine

const styles = StyleSheet.create({
  oneLine: {
    height: '15%',
    flexDirection: 'row',
    width: '70%',
  },
  onePart: {
    borderColor: '#808080',
    width: '33.33333%',
  }
})