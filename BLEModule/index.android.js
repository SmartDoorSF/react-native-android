/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var SampleButton = require('./js/button');

//var Button = require('react-native-button');
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

//NativeModules.BluetoothModule.listDeviceCB(
//    (msg) => {
//        console.log(msg);
//    },
//    (deviceName) => {
//        console.log("pairedDevice: " + deviceName);
//    }
//);

// AltBeacon
//var RNABeacon = NativeModules.RNABeacon;
//console.log("loadNativeModule: ", RNABeacon);

var BeanTransceiver = NativeModules.BeanTransceiver;

if (BeanTransceiver.hasBLE()) {
    BeanTransceiver.enableBLE();
}
BeanTransceiver.discovery();

var BLEModule = React.createClass({
//  mixins: [responderMixin],             // use the mixin
    componentWillMount: function() {
//        DeviceEventEmitter.addListener('startMonitoring', function(e: Event) {
//            console.log("startMonitoring!!!");
//            console.log("Event:", e); // null
//        });
        DeviceEventEmitter.addListener('startMonitoring', function(data) {
            console.log('What data? ', data);
        });
    },
    componentDidMount: function() {
        // Altbeacon searching
        // Current BlueBean UUID is 0xFF10
        // Current BlueBean UUID is 0xFF10
//        var uuid = "A495FF10C5B14B44B5121370F02D74DE";
//        RNABeacon.startMonitoring(uuid);
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
//AppRegistry.registerComponent('BLEModule2',() => BLEModule2);