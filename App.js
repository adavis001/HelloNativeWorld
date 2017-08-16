import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Greetings from './Greetings';
import Blink from './Blink';

export default class App extends React.Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Aubergine.jpg'
    };
    return (
      <View style={styles.container}>
        <Blink text={<Greetings name='Alex'/>} />
        <Blink text={<Greetings name='Michael'/>} />
        <Blink text={<Greetings name='Jon'/>} />
        <Blink text={<Greetings name='Vance'/>} />
        <Greetings name='Alex'/>
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
