import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Greetings from './Greetings';

export default class App extends React.Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Aubergine.jpg'
    };
    return (
      <View style={styles.container}>
        <Greetings name='Alex' />
        <Greetings name='Michael' />
        <Greetings name='Jon' />
        <Greetings name='Vance' />
        <Image source={pic} style={{width: 193, height: 110}} />
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
