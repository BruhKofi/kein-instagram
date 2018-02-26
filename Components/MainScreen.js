import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Icon} from 'native-base';

import { TabNavigator } from "react-navigation";
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import HomeTab from './AppTabNavigator/HomeTab';
import LikesTab from './AppTabNavigator/LikesTab';
import SearchTab from './AppTabNavigator/SearchTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

export class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera-outline"  style={{paddingLeft: 10}} />,
    title: "Instagram",
    headerRight: <Icon name="ios-send-outline" style={{paddingRight: 10}}/>
  }
  render() {
    return (
      <AppTabNavigator/>
    )
  }
}

const AppTabNavigator = TabNavigator({
  HomeTab: {
    screen: HomeTab
  },
  SearchTab: {
    screen: SearchTab
  },
  AddMediaTab: {
    screen: AddMediaTab
  },
  LikesTab: {
    screen: LikesTab
  },
  ProfileTab: {
    screen: ProfileTab
  }
})

export default MainScreen

