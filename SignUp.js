import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

const SignUp  = (props) => {
  return (
    <View>
      <Text>Sign Up Form</Text>
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
      <Button title="Go to login" onPress={() => props.navigation.navigate('Login')} />
    </View>
  )
}

SignUp.navigationOptions = {
  title: 'Signup'
}

export default SignUp;
