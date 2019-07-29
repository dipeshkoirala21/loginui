import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  View,
  Image,
  Button,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import Buttons from './components/Buttons';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Drawernavigation from './screens/Drawernavigation';


function Home(props) {
  
  return (
    <View style={styles.container}>
      <View >
        <Image
          style={{ width: 100, height: 100 }}
          source={require("./assets/image.png")}
        />
      </View>

      <View style={styles.button}>
        <Buttons navigate={props.navigation.navigate} /> 
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A90C8',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"column",
    width:'100%'
    
  },
  image:{
    alignItems:'center',
    justifyContent:"center",
    flexDirection:'column',
    width: '100%',
    height: '80%', 
    backgroundColor: '#1A90C8'
  },
  button:{
    width: '100%', 
    height: '20%', 
    position:'absolute',
    bottom:0,
    

  } 
});

const Welcome = (props) => {

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token, 'token')
      if (token) {
        props.navigation.navigate('Drawernavigation');
      } else {
        console.log('reched here')
        props.navigation.navigate('Home');
      }
    } catch (e) {
    } 
  } 
  useEffect(() => {
    getToken();
  }, []);
  return <ActivityIndicator />;
}

const RootStack = createSwitchNavigator(
  {
    Welcome,
    Home:{
      screen: Home,
      navigationOptions: {
        header: null,
    }
    },
    Login:{
      screen:Drawernavigation,
      navigationOptions:{
        header:Login,
      }
    },
    SignUp:{
      screen:SignUp,
      navigationOptions:{
        header:SignUp,
      }
    },
    Drawernavigation:{
      screen:Drawernavigation,
      navigationOptions:{
        header:null,
      }
    }
  }
);

// const App = createSwitchNavigator(
//   { 
//     AuthLoading:AuthLoadingScreen,
//     App:App
//   }
// )


const AppContainer = createAppContainer(RootStack);

export default AppContainer;
