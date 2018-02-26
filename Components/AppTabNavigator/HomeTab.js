import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import {Icon} from 'native-base';

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" style={{color: tintColor}}/>
    )
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
