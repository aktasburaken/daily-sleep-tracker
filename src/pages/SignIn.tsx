import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/EvilIcons'

//Components
import {AppTextInput} from '../components/AppTextInput'
import {SignView} from '../components/SignView'
import {AppText} from '../components/AppText'
import { AppButton } from '../components/AppButton'

const SignIn = ({navigation}: any) => {

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>

      <SignView signUp={false}>
          <AppText.Title children='Sleepy Night' />
          
          <View style={styles.notCenter}>
          <AppTextInput.username icon={<Icon name="user" size={40} style={styles.marginTop}/>} placeHolder='username' margin />
          <AppTextInput.password icon={<Icon name="lock" size={40} style={styles.marginTop}/>} placeHolder='password' margin={false}/>
          </View>

          <AppButton.Sign name="Sign In" click={() => {
            navigation.navigate('HomePage')
          }}/>

          <AppText.IsHaveAccount children="Do you have an account?" margin/>

          <TouchableOpacity onPress={() => {
              navigation.navigate('SignUp')
          }}>
            <AppText.HaveorNot children="Create an account now!" />
          </TouchableOpacity>
      </SignView>

      <AppText.GoodNight children={`Good night, sleep tight, \ndon't let the bed bugs bite!`} />

    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  safeAreaView: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'white'
  }, 
  marginTop: {
    marginTop: 15
  },
  notCenter: {
    width: '80%'
  }

})