import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Greetings extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    );
  }
}