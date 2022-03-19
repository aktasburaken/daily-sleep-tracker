import { View, Text, StyleSheet, Dimensions} from 'react-native'
import React from 'react'

//Components
import StatOneLine from './StatOneLine'

const Stats = () => {
  return (
    <View style={styles.container}>
        <View style={styles.stats}>
        <StatOneLine TimeOfSleep="50"/>
        <StatOneLine />
        <StatOneLine />
        <StatOneLine />
        <StatOneLine />
        <StatOneLine />
        </View>
    </View>
  )
}

export default Stats

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width * 85/100,
        height: 250,
        backgroundColor: 'white',
        borderRadius: 16,
        marginTop: 40,
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical: 20,
    },
    stats: {
        width: '65%',
        height: '80%',
        backgroundColor: '#BFDDF9',
        borderRadius: 16,
    }
})