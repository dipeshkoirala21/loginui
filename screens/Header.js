import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Header extends Component {
  render() {
    return (
      <View style={{flexDirection:"row-reverse", paddingLeft:30}}>
        <Image
          style={{ width: 100, height: 100,margin:0 }}
          source={require("../assets/banner.png")}
        />
        </View>
    )
  }
}

export default Header

