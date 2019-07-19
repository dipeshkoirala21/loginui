import React from 'react';
import { 
  StyleSheet, 
  View,
  Image,
  Button,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Buttons from './Buttons';
import Login from './Login';
import SignUp from './SignUp';

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("./assets/image.png")}
        />
      </View>
      <Button onPress={() => props.navigation.navigate('Login')} title="goto login" />

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


// class Login extends React.Component {
//   render() {
//             return (
//                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Text>Login Screen</Text>
//       </View>
//     );
//   }
// }

const RootStack = createStackNavigator(
  {
    Home,
    Login,
    SignUp,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;