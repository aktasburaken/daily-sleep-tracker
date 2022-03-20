import { View, Text, StyleSheet, Dimensions, DynamicColorIOS} from 'react-native'
import React from 'react'

//Components
import StatOneLine from './StatOneLine'
import { AppText } from './AppText'

const Stats = () => {
  return (
    <View style={styles.container}>

      <View style={styles.days}>
        <AppText.Days children="Mon"/>
        <AppText.Days children="Tue"/>
        <AppText.Days children="Wed"/>
        <AppText.Days children="Thu"/>
        <AppText.Days children="Fri"/>
        <AppText.Days children="Sat"/>
        <AppText.Days children="Sun"/>
      </View>

      <View style={styles.statsContainer}>
      <View style={styles.statTitles}>
          <AppText.Stats children="Time of Sleep"/>
          <AppText.Stats children="Wake up Time"/>
          <AppText.Stats children="Sleep Duration"/>
        </View>
        <View style={styles.stats}>
          <StatOneLine TimeofSleep="12:00" night="PM" WakeUpTime="23:45" day="PM"/>
          <StatOneLine TimeofSleep="23:00" night="PM" WakeUpTime="23:45" day="PM"/>
          <StatOneLine TimeofSleep="23:00" night="PM" WakeUpTime="05:45" day="AM"/>
          <StatOneLine TimeofSleep="12:00" night="PM" WakeUpTime="23:00" day="AM"/>
          <StatOneLine TimeofSleep="07:00" night="AM" WakeUpTime="09:45" day="AM"/>
          <StatOneLine TimeofSleep="09:00" night="AM" WakeUpTime="23:45" day="PM"/>
          <StatOneLine TimeofSleep="12:00" night="PM" WakeUpTime="23:45" day="PM"/>
        </View>
      </View>
        
     
    </View>
  )
}

export default Stats

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width * 85/100,
        flexDirection:'row',
        height: 250,
        backgroundColor: 'white',
        borderRadius: 16,
        marginTop: 40,
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical: 20,
    },
    stats: {
      width: '100%',
      height: '80%',
      backgroundColor: '#BFDDF9',
      borderRadius: 16,
    },
    statTitles: {
      flexDirection: 'row',
      width: '100%',
      justifyContent:'space-evenly',
      marginBottom: 3,
    },
    statsContainer: {
      width: '70%'
    },
    days: {
      marginTop: 20,
      marginRight: 10,
      justifyContent: 'space-evenly',
      alignItems: 'baseline',
      height: '80%',
      flexDirection: 'column',
    }
})