import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'

//Components
import {AppTextInput} from '../little-components/AppTextInput'
import {SignView} from '../little-components/SignView'
import {AppText} from '../little-components/AppText'
import {AppButton} from '../little-components/AppButton'

const SignUp = ({navigation}: any) => {

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={'lightblue'} barStyle={'dark-content'}/>

      <SignView signUp={true}>
          <AppText.Title children='Sleepy Night' />
          <AppTextInput placeHolder='username' margin />
          <AppTextInput placeHolder='password' margin={false}/>
          <AppTextInput placeHolder='e-mail' margin={false}/>

          <AppButton.Sign name="Sign Up" click={() => {
              navigation.navigate('SignIn')
          }}/>

          <AppText.IsHaveAccount children="Do you have an account?" margin/>

          <TouchableOpacity onPress={() => {
              navigation.navigate('SignIn')
          }}>
            <AppText.HaveorNot children="Sign in now!" />
          </TouchableOpacity>
      </SignView>

      <View style={styles.bed}>
        <Text style={styles.signButtons}>Google</Text>
        <Text style={styles.signButtons}>Facebook</Text>
      </View>

      <AppText.GoodNight children={`Good night, sleep tight, \ndon't let the bed bugs bite!`} />

    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  safeAreaView: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'lightblue'
  }, 
  bed: {
    justifyContent:'center',
    alignItems: 'center',
    padding: 15,
    marginTop: 5,
    height: 150,
    width: '80%',
    borderRadius: 30,
  },
  signButtons: {
    justifyContent:'center',
    textAlign: 'center',
    backgroundColor: '#3897f0',
    padding: 13,
    marginTop: 17,
    width: '95%',
    height: '40%',
    borderRadius: 20,
    color: 'white'
  },
})