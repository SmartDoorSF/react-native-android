/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var SampleButton = require('./js/button');
// var SampleModule = require('./js/sample_module');

// Toast Example

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  NativeModules,
} = React;

NativeModules.CustomizedModule.show("Hello!");
NativeModules.BluetoothModule.show("Bluetooth!");

NativeModules.BluetoothModule.listDevice();

var BLEModule = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <SampleButton/>
      </View>
    );
  }
});


var styles = StyleSheet.create({
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

AppRegistry.registerComponent('BLEModule', () => BLEModule);