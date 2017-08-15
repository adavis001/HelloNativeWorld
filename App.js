import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Aubergine.jpg'
    };
    return (
      <View style={styles.container}>
        <Text>Hello Taylor!</Text>
        <Text>Behold!  I made a phone app!</Text>
        <Text>I hope you are having a beautiful day!</Text>
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
