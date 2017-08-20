import React from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, Image } from 'react-native';
import Greetings from './Greetings';
import Blink from './Blink';
import PizzaTranslator from './PizzaTranslator';
import ButtonBasics from './ButtonBasics';
import Touchables from './Touchables';


export default class App extends React.Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Aubergine.jpg'
    };
    return (
      <View>
      <View style={{
        paddingTop: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Greetings  name='Megan!' />
        <Text>I can translate text into PIZZA!</Text>
      </View>
      <ScrollView>
        <PizzaTranslator />
        <Touchables />
        <Touchables />
        <Touchables />
        <Touchables />
        <Touchables />
        <Touchables />
        <Touchables />
        <Touchables />
        <Touchables />
        <Touchables />
        <Touchables />
        <Touchables />
        <Touchables />
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
});
