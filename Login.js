import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  }
  componentDidMount() {
    console.log('Component did mount of login');
  }
  
  
  componentWillUnmount() {
    console.log('component will unmount of Login');    
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button title="Go to Signup" onPress={() => this.props.navigation.navigate('SignUp')} />
      </View>
    )
  }
}

export default Login
