import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base';

export class CardComponent extends Component {
  render() {

    const images = {

      "1": require('../assets/posts/valerie.jpg'),
      "2": require('../assets/posts/annie.jpg'),
      "3": require('../assets/posts/alex.jpg')
    }

    return (
      <Card>
      <CardItem>
      <Left>
      <Thumbnail source={require("../assets/icon.png")}/>
      <Body>
        <Text>Kofi</Text>
        <Text note>26 Feb 2018</Text>
      </Body>
      </Left>
      </CardItem>
      <CardItem cardBody>
      <Image source={images[this.props.imageSource]} style={{height: 200, width: null, flex:1}}/>
      </CardItem>
      <CardItem style={{height: 45}}>
      <Left>
      <Button transparent>
      <Icon name="ios-heart-outline" style={{color: 'black'}}/>
      </Button>
      <Button transparent>
      <Icon name="ios-chatbubbles-outline" style={{color: 'black'}}/>
      </Button>
      <Button transparent>
      <Icon name="ios-send-outline" style={{color: 'black'}}/>
      </Button>
      </Left>
      </CardItem>
      <CardItem style={{height: 20}}>
        <Text>{this.props.likes}</Text>
      </CardItem>
      <CardItem>
      <Body>
        <Text><Text style={{fontWeight: '800'}}>kofi </Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores soluta dolor eveniet fugiat rem ullam laudantium, quod accusamus autem numquam maxime tempora nisi commodi unde. Nisi repudiandae culpa omnis doloremque!</Text>
      </Body>
      </CardItem>
      </Card>
    )
  }
}

export default CardComponent
