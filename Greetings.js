import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Greetings extends Component {
  render() {
    return (
      <Text style={{paddingTop: 50}}>Hello {this.props.name}</Text>
    );
  }
}