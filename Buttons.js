import React from 'react';
import {StyleSheet,View,Button,Image,Text,TouchableOpacity} from 'react-native';
// import { bold } from 'ansi-colors';

export default function Buttons(props) {
    return (
      <View>
        <View style={styles.login}>
          <View style={styles.login}>
            <TouchableOpacity onPress={() => props.navigate('Login')}>
              <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',padding:30,justifyContent:"space-around",alignItems:"center",borderWidth:0.5,borderColor:'white',marginLeft:50,}}>LOGIN</Text>
          </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigate('SignUp')}>
              <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',padding:30,justifyContent:"space-around",alignItems:"center",borderWidth:0.5,borderColor:'white',marginRight:50,}}>SIGNUP</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.loginGmail}>
          <TouchableOpacity>
            <Text style={styles.text}>Login With Gmail</Text>
            
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    text: {
      fontSize:20,
      fontWeight:'bold',
      color:'#1284FF',
      padding:27,
      borderWidth: 1,
      borderColor: "white",
      backgroundColor: "#F6FCFF",
      alignItems:'center',
      bottom:0,
      textAlign:"center",
      
      
      
    },
    login:{
      flexDirection:"row",
      justifyContent:"space-around",
      




    },
    signup:{
      flexDirection:"row",
      justifyContent:"center",
      borderWidth: 1,
      borderColor: "white",
    },
    loginGmail:{

    },
    
  });