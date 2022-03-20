import { SafeAreaView, StyleSheet, View } from 'react-native'
import React, {useState} from 'react'

import {AppText} from '../components/AppText'
import {AppButton} from '../components/AppButton';
import LChart from '../components/LChart'
import Stats from '../components/Stats';

import Icon from 'react-native-vector-icons/Entypo'

const HomePage = ({navigation}:any) => {

  const [datas, setDatas]:any = useState([0,0,0,0,0,0,0])

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <AppText.Title children="Daily Sleep Chart" style={styles.title}/>
      
      <Stats />
      <LChart />
      
      <View style={styles.footer}>
      <AppButton.GoBack name={<Icon name='arrow-left' size={30}/> } click={() => {navigation.navigate('SignIn')}}/>
      <AppButton.AddData name={<Icon name='plus' size={40}/> } click={() => {alert('selam')}}/>
      </View>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
    safeAreaView: {
      flex:1,
      backgroundColor:'white',
      alignItems: 'center'
    }, 
    title: {
      marginTop: 50,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '75%'
    }
  })