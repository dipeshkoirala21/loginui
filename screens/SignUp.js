import React, { Component } from 'react'
import { Text, View,Button,KeyboardAvoidingView,StyleSheet,Image,TextInput  } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import {ToastAndroid} from 'react-native';


export class SignUp extends Component {
  state={
        name:'',
        phone:'',
        password:'',
        lat:'',
        lon:''

      }
  
  static navigationOptions = {
    title: 'Signup',
  }

  handleChange = name =>  text => this.setState({[name]: text});

  handleSubmit = ()=>{
    console.log(this.state);
       axios.post('http://202.51.74.242:800/api/MobileRegistration/create', {
        Name: this.state.name,
        MobileNo: this.state.phone,
        password: this.state.password,
        Lat: this.state.lat,
        lon: this.state.lon,
      })
      .then(response => {
        console.log(response,'Success');
        var myObj=response.data;
        var x= myObj.result;
        
        if(x==true){

          this.props.navigation.navigate('Login')
          console.log('User created successfully!')
          ToastAndroid.show('User created successfully!', ToastAndroid.SHORT);
        }else{
          console.log('User created successfully!');
        }  
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <ScrollView style={{marginVertical:30}}>
      <KeyboardAvoidingView style={{flex:1,flexDirection:'column',justifyContent:'center'}} behavior="padding"enabled
      keyboardVerticalOffset={50}>
        <View style={{flexDirection:"row-reverse", paddingLeft:30}}>
        <Image
          style={{ width: 100, height: 100,margin:0 }}
          source={require("../assets/logo1.png")}
        />
        </View>
        <Text style={{color:'#1298DF',fontWeight:'bold',fontSize:25, marginHorizontal: 40,paddingHorizontal: 10,marginTop:10}}>Create Account</Text>
        <Text style={{color:'#1298DF',fontWeight:'bold',fontSize:15, marginHorizontal: 40,paddingHorizontal: 10,marginTop:40}}>What's your name?</Text>
        
        <TextInput
        style={
          {height: 40,
          marginTop: 20,
          backgroundColor:'#F6FCFF',
          marginHorizontal: 40,
          paddingHorizontal: 10,
          borderRadius: 5,
          borderWidth:2,
          borderColor:'#1298DF',
          color: '#1298DF'
        }
        }
        onChangeText={this.handleChange('name')}
        />

        <Text style={{color:'#1298DF',fontWeight:'bold',fontSize:15, marginHorizontal: 40,paddingHorizontal: 10,marginTop:20}}>What's your Contact No.?</Text>
       
        <TextInput
        style={
          {height: 40,
          marginTop: 20,
          backgroundColor:'#F6FCFF',
          marginHorizontal: 40,
          paddingHorizontal: 10,
          borderRadius: 5,
          borderWidth:2,
          borderColor:'#1298DF',
          color: '#1298DF'
        }
        }
        onChangeText={this.handleChange('phone')}

        />
        <Text style={{color:'#1298DF',fontWeight:'bold',fontSize:15, marginHorizontal: 40,paddingHorizontal: 10,marginTop:20}}>Pick a password</Text>
        
        <TextInput
        style={
          {height: 40,
          marginTop: 20,
          backgroundColor:'#F6FCFF',
          marginHorizontal: 40,
          paddingHorizontal: 10,
          borderRadius: 5,
          borderWidth:2,
          borderColor:'#1298DF',
          color: '#1298DF'
        }
        }
        secureTextEntry={true} 
        onChangeText={this.handleChange('password')} 

        />

        <Text style={{color:'#1298DF',fontWeight:'bold',fontSize:15, marginHorizontal: 40,paddingHorizontal: 10,marginTop:20}}>What's your Latitude?</Text>
        <TextInput
        style={
          {height: 40,
          marginTop: 20,
          backgroundColor:'#F6FCFF',
          marginHorizontal: 40,
          paddingHorizontal: 10,
          borderRadius: 5,
          borderWidth:2,
          borderColor:'#1298DF',
          color: '#1298DF'
        }
        }
        onChangeText={this.handleChange('lat')}

        />
        <Text style={{color:'#1298DF',fontWeight:'bold',fontSize:15, marginHorizontal: 40,paddingHorizontal: 10,marginTop:20}}>What's your Longitude?</Text>
        <TextInput
        style={
          {height: 40,
          marginTop: 20,
          backgroundColor:'#F6FCFF',
          marginHorizontal: 40,
          paddingHorizontal: 10,
          borderRadius: 5,
          borderWidth:2,
          borderColor:'#1298DF',
          color: '#1298DF'
        }
        }
        onChangeText={this.handleChange('lon')}

        />

        <View style={{marginHorizontal: 40,paddingHorizontal:10,marginTop:40}}>
        <Button 
        title="Sign Up" 
        onPress={this.handleSubmit} />
        </View>
        
      </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SignUp
