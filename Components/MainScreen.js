import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Icon} from 'native-base';

export class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera-outline"  style={{paddingLeft: 10}} />,
    title: "Instagram",
    headerRight: <Icon name="ios-send-outline" style={{paddingRight: 10}}/>
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default MainScreen

