/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

/**
 *
 *       // Altbeacon searching
 *       // Current BlueBean UUID is 0xFF10
 *       // Current BlueBean UUID is 0xFF10
 *        var uuid = "A495FF10C5B14B44B5121370F02D74DE";
 *        RNABeacon.startMonitoring(uuid);
 */

/**
 * NativeModules.BluetoothModule.listDeviceCB(
 *    (msg) => {
 *        console.log(msg);
 *    },
 *    (deviceName) => {
 *        console.log("pairedDevice: " + deviceName);
 *    }
 *);
 */

/**
 * //        DeviceEventEmitter.addListener('startMonitoring', function(e: Event) {
 * //            console.log("startMonitoring!!!");
 *  //            console.log("Event:", e); // null
 *  //        });
 */


'use strict';

var SampleButton = require('./js/SampleButton');
var Button = require('./js/Button');

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
  DeviceEventEmitter,
} = React;

NativeModules.CustomizedModule.show("Hello!");
NativeModules.BluetoothModule.show("Bluetooth!");
//NativeModules.BluetoothModule.connect();

var BT = NativeModules.BeanTransceiver;

if (BT.hasBLE()) {
    BT.enableBLE();
}
BT.startDiscovery();

var BLEModule = React.createClass({
//  mixins: [responderMixin],             // use the mixin
    componentWillMount: function() {
    },
    componentDidMount: function() {
    },
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
        <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={this._handlePress}
        >
        Press Me!
        </Button>

        <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={this._handlePress}
        >
        Press Me!
        </Button>
      </View>
    );
  },

  _handlePress(event) {
    console.log('Pressed!');
  },
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