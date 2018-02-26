import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Icon} from 'native-base';

export class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="person" style={{color: tintColor}}/>
    )
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default ProfileTab
