import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import {Icon, Container, Content} from 'native-base';
import CardComponent from '../CardComponent';


export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" style={{color: tintColor}}/>
    )
  }
  render() {
    return (
      <Container style={styles.container}>
      <Content>
      <CardComponent imageSource="1" likes="43"/>
      <CardComponent imageSource="3" likes="12"/>
      <CardComponent imageSource="2" likes="422"/>
      </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
