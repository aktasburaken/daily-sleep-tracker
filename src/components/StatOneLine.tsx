import { View, Text, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import moment from 'moment';

const StatOneLine = ({...props}:any) => {

  const [timeofSleep, setTimeofSleep] = useState('')
  const [wakeUpTime, setWakeUpTime] = useState('')
  const [sleepDuration, setSleepDuration] = useState(0)

  // SleepDuration algorithm
  // :)
  useEffect(() => {
    
    setTimeofSleep(curr => curr = props.TimeofSleep)
    setWakeUpTime(curr => curr = props.WakeUpTime)

    setSleepDuration((curr):any => {
      let bed = moment.duration(timeofSleep, 'h')
      let wake = moment.duration(wakeUpTime, "h")

      return (
        props.night === "AM" && props.day === "AM" ? 
        curr = -bed.subtract(wake).hours() :
        props.night === "AM" && props.day === "PM" ?
        curr = -bed.subtract(wake).hours() :
        props.night === "PM" && props.day === "AM" ?
        (wake = wake.add(1, 'd'), curr = -bed.subtract(wake).hours()) :
        props.night === "PM" && props.day === "PM" ?
        curr = wake.subtract(bed).hours() : 0
        )
    } )
  }, [props, sleepDuration])

  return (
    <View style={styles.oneLine}>
      <View style={styles.onePart}><Text style={styles.text}>{props.TimeofSleep} {props.night}</Text></View>
      <View style={styles.onePart}><Text style={styles.text}>{props.WakeUpTime} {props.day}</Text></View>
      <View style={styles.onePart}><Text style={styles.text}>{sleepDuration} HRS</Text></View>
    </View>
  )
}

export default StatOneLine

const styles = StyleSheet.create({
  oneLine: {
    height: '14%',
    flexDirection: 'row',
    width: 210,
  },
  onePart: {
    borderColor: '#808080',
    width: '36%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
  }
})