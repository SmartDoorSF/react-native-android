/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Home = require('./app/components/Home');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  }
});


var TodoLite = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          title="TodoLite ReactNative Android"
          style={styles.toolbar}>
        </ToolbarAndroid>
        <Home/>
      </View>
    );
  }
});

AppRegistry.registerComponent('TodoLite-ReactNative-Android', () => TodoLite);