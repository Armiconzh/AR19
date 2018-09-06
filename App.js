/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Image} from 'react-native';
import Judul from './Components/Judul';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Judul title="BIODATA"/>
        <Judul title="LOGIN"/>
        <Text style={styles.welcome}>
          Armico Nur Zul Haq
        </Text>
        <Text style={styles.welcome}>
          XI RPL 3 No.09
        </Text>
        <Image
         style={{ width: 250, height: 200 }}
         source={require('./1.jpg')}
        />
        <Image
         style={{ width: 300, height: 200 }}
         source={require('./2.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
