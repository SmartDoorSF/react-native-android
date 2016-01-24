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

//NativeModules.CustomizedModule.show("Hello!");
//NativeModules.BluetoothModule.show("Bluetooth!");
//NativeModules.BluetoothModule.connect();


'use strict';

var SampleButton = require('./js/SampleButton');
var Button = require('react-native-button');
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

// Native modules
var BT = NativeModules.BeanTransceiver;

var BLEModule = React.createClass({
//  mixins: [responderMixin],             // use the mixin
    componentWillMount: function() {
        this._bleHandler.init();
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
                onPress={this._bleHandler.enableBLE}
            >
            Enable BLE!
            </Button>

            <Button
                style={{fontSize: 20, color: 'green'}}
                styleDisabled={{color: 'red'}}
                onPress={this._bleHandler.disableBLE}
            >
            Disable BLE!
            </Button>
            <Button
                style={{fontSize: 20, color: 'green'}}
                styleDisabled={{color: 'red'}}
                onPress={this._bleHandler.startDiscovery}
            >
            Start Discovery
            </Button>
            <Button
                style={{fontSize: 20, color: 'green'}}
                styleDisabled={{color: 'red'}}
                onPress={this._bleHandler.cancelDiscovery}
            >
            Cancel Discovery
            </Button>
          </View>
        );
    },

    _handlePress(event) {
        console.log('Pressed!');
    },

    _bleHandler: BT,
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