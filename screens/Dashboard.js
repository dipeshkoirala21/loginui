//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,Image,Button , ToastAndroid,AsyncStorage} from 'react-native';
// import all basic components
 
export default class Dashboard extends Component {

  handleLogout = async () => {
    try {
      await AsyncStorage.clear('token', '');
      this.props.navigation.navigate('Home');
    } catch (e) {
      ToastAndroid.show('Login Error!', ToastAndroid.SHORT);
      return;
    }
  }
  //Screen1 Component
  render() {
    return (
      
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Dashboard </Text>
        <Button
        title="Sign Out"
        onPress={this.handleLogout}>

        </Button>
      </View>
      
      
      
      
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});