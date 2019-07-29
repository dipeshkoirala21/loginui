import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Text, View, Button,KeyboardAvoidingView,StyleSheet ,Image,AsyncStorage,TextInput} from 'react-native'
import axios from 'axios';
import {ToastAndroid} from 'react-native';


export default class Login extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    username: '',
    password: '',
  };
  // constructor(props){
  //   super(props);
  //     this.state = {
  //       username: '',
  //       pass: '',
  //     };
  //   }
  // componentWillMount(){
  //   axios.post('http://202.51.74.242:800/api/MobileRegistration/login', {
  //     UserName: '9814306893',
  //     password: '1234'
  //   })
  //   .then(function (response) {
  //     console.warn(response);
  //   })
  //   .catch(function (error) {
  //     console.warn(error);
  //   });
  // }


  static navigationOptions = {
    title: 'Login',
  }
 
  handleChange = name =>  text => this.setState({[name]: text});

  handleSubmit = ()=>{
    console.log(this.state);
       axios.post('http://202.51.74.242:800/api/MobileRegistration/login', {
        UserName: this.state.username,
        password: this.state.password
      })
      .then(async response => {
        console.log(response,'Success');
        var myObj=response.data;
        var x= myObj.result;
        
        if(x==true) {
          try {
            await AsyncStorage.setItem('token', 'auth_token');
          } catch (e) {
            ToastAndroid.show('Login Error!', ToastAndroid.SHORT);
            return;
          }
          this.props.navigation.navigate('Drawernavigation')
          ToastAndroid.show('Login Successfull!', ToastAndroid.SHORT);
        } else {
          console.log('User Name or Password is Incorrect!');
          ToastAndroid.show('UserName or Password is Incorrect !', ToastAndroid.SHORT);
        }  
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <KeyboardAvoidingView style={{flex:1,flexDirection:'column', }} behavior="padding">
         <View style={{flexDirection:"row-reverse", paddingLeft:30}}>
        <Image
          style={{ width: 100, height: 100,margin:0 }}
          source={require("../assets/logo1.png")}
        />
        </View>

        <Text style={{color:'#1298DF',fontWeight:'bold',fontSize:25, marginHorizontal: 40,paddingHorizontal: 10,marginTop:20}}>Login</Text>
        <Text style={{color:'#1298DF',fontWeight:'bold',fontSize:15, marginHorizontal: 40,paddingHorizontal: 10,marginTop:50}}>Username</Text>
        <TextInput
        style={{height: 40,
          marginTop: 20,
          backgroundColor:'#F6FCFF',
          marginHorizontal: 40,
          paddingHorizontal: 10,
          borderRadius: 5,
          borderWidth:2,
          borderColor:'#1298DF',
          color: '#1298DF'
        }}
        value={this.state.username}
        onChangeText={this.handleChange('username')}
        />
        <Text style={{color:'#1298DF',fontWeight:'bold',fontSize:15, marginHorizontal: 40,paddingHorizontal: 10,marginTop:20}}>Password</Text>
        <TextInput
        style={{height: 40,
          marginTop: 20,
          backgroundColor:'#F6FCFF',
          marginHorizontal: 40,
          paddingHorizontal: 10,
          borderRadius: 5,
          borderWidth:2,
          borderColor:'#1298DF',
          color: '#1298DF'
        }}
        value={this.state.password}
        secureTextEntry={true}  
        onChangeText={this.handleChange('password')}
        />
        <Text style={{color:'#1298DF',fontSize:15, marginHorizontal: 40,paddingHorizontal:95,marginTop:20}}>Forgot Password?</Text>
        <View style={{marginHorizontal: 40,paddingHorizontal:10,marginTop:20}}>
        <Button 
        title="Login" 
        //onPress={() => this.props.navigation.navigate('Drawernavigation')}
        onPress={this.handleSubmit}
         />
        </View>
        
      </KeyboardAvoidingView>
    )
  }
}

// const instance = axios.create({
//   baseURL: 'http://202.51.74.242:800/api/MobileRegistration/login',
//   timeout: 1000,
//   headers: {'content-type': 'application/json'}
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

