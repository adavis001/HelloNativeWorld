import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Greetings from './Greetings';
import Blink from './Blink';
import PizzaTranslator from './PizzaTranslator';

export default class App extends React.Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Aubergine.jpg'
    };
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 2, backgroundColor: 'powderblue'}} />
        <Greetings name='Megan!'/>
        <Text>I can translate text into PIZZA!</Text>
        <PizzaTranslator />
        <View style={{flex: 3, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
