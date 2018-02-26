import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import {Icon} from 'native-base';

class SearchTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-search" style={{color: tintColor}}/>
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

export default SearchTab;
