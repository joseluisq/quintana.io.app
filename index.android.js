/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'

export default class Quintana extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: 'https://quintana.io/me.jpg'}} />
        <Text style={styles.welcome}>
          José Luis Quintana
        </Text>
        <Text style={styles.instructions}>
          https://quintana.io
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  image: {
    width: 100,
    height: 100,
    margin: 15,
    borderRadius: 80
  }
})

AppRegistry.registerComponent('Quintana', () => Quintana)
