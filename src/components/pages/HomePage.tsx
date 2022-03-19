import { SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import React, {useState} from 'react'

import {AppText} from '../little-components/AppText'
import {AppButton} from '../little-components/AppButton';
import LChart from '../little-components/LChart'
import Stats from '../little-components/Stats';

import Icon from 'react-native-vector-icons/Entypo'

const HomePage = () => {

  const [datas, setDatas]:any = useState([0,0,0,0,0,0,0])

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <AppText.Title children="Daily Sleep Chart" style={styles.title}/>
      
      <Stats />
      <LChart />
  
      <AppButton.AddData name={<Icon name='plus' size={40}/> } click={() => {alert('selam')}}/>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
    safeAreaView: {
      flex:1,
      backgroundColor:'lightblue',
      alignItems: 'center'
    }, 
    title: {
      marginTop: 50,
    },
  })