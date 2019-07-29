import React, { Component } from 'react';
import { View, Image, TouchableOpacity,SafeAreaView } from 'react-native';

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
 
import Dashboard from './Dashboard';
import Journal from './Journal';
import Ledger from './Ledger';
import Balance from './Balance';
import Profile from './Profile';
import Accounts from './Accounts';
import Settings from './Settings';
import Aboutus from './Aboutus';
import Header from './Header';
 
class Drawernavigation extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <SafeAreaView style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('../assets/drawer.png')}
            style={{ width: 40, height: 40, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
 

const FirstActivity_StackNavigator = createStackNavigator({
  
  First: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard',
      headerLeft: <Drawernavigation navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#000',
    }),
  },
});

const Journal_StackNavigator = createStackNavigator({
  
  Second: {
    screen: Journal,
    navigationOptions: ({ navigation }) => ({
      title: 'Journal',
      headerLeft: <Drawernavigation navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#000',
    }),
  },
});
 
const Ledger_StackNavigator = createStackNavigator({
 
  Third: {
    screen: Ledger,
    navigationOptions: ({ navigation }) => ({
      title: 'General Ledger',
      headerLeft: <Drawernavigation navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#000',
    }),
  },
});

const Balance_StackNavigator = createStackNavigator({
  
  Fourth: {
    screen: Balance,
    navigationOptions: ({ navigation }) => ({
      title: 'Trial Balance',
      headerLeft: <Drawernavigation navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#000',
    }),
  },
});

const Profile_StackNavigator = createStackNavigator({
  
  Fifth: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <Drawernavigation navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#000',
    }),
  },
});

const Accounts_StackNavigator = createStackNavigator({
  
  Sixth: {
    screen: Accounts,
    navigationOptions: ({ navigation }) => ({
      title: 'Accounts',
      headerLeft: <Drawernavigation navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#000',
    }),
  },
});

const Settings_StackNavigator = createStackNavigator({
  
  Seventh: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft: <Drawernavigation navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#000',
    }),
  },
});

const Aboutus_StackNavigator = createStackNavigator({
  
  Eighth: {
    screen: Aboutus,
    navigationOptions: ({ navigation }) => ({
      title: 'About Us',
      headerLeft: <Drawernavigation navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#000',
    }),
  },
});
const DrawerContent = () => (
  <View> 
      <Image
         
          source={require("../assets/banner.png")}
          style={{ width: 100, height:100, }}
        />   
  </View>
)

const DrawerNavigator = createDrawerNavigator({
 
  Dashboard: {
    
    screen: FirstActivity_StackNavigator,
    navigationOptions: {

      drawerLabel: 'Dashboard',

    },
  },
  Journal: {
    
    screen: Journal_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Journal',
    },
  },
  Ledger: {
   
    screen: Ledger_StackNavigator,
    navigationOptions: {
      drawerLabel: 'General Ledger',
  },
},
  Balance: {
    
    screen: Balance_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Trial Balance',
  },
},
  Profile: {
    
    screen: Profile_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Profile',
  },
},
  Accounts: {
    
    screen: Accounts_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Accounts',
  },
},
  Settings: {
   
    screen: Settings_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Settings',
  },
},
  Aboutus: {
    
    screen: Aboutus_StackNavigator,
    navigationOptions: {
    drawerLabel: 'About Us',
  },
  },
},
// {
//   contentComponent:DrawerContent,
// }
);


export default createAppContainer(DrawerNavigator);