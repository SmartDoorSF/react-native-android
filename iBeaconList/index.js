'use strict';

const Noble = require('noble');

Noble.on('stateChange', function(state) {
  console.log("State is");
  if (state === 'poweredOn') {
      Noble.startScanning();
      console.log("Powerred On")
  } else {
      Noble.stopScanning();
      console.log("Powerred Off");
  }
});

Noble.on('discover', function (peripheral) {
  var macAddress = peripheral.uuid;
  var rss = peripheral.rssi;
  var localName = peripheral.advertisement.localName;
  console.log("found device: ", macAddress, ' ', rss + ' ');
});

// Bleacon.startScanning();
/*Bleacon.on('stateChange', (state) => {
  if (state === 'poweredOn') {
    Bleacon.startScanning();
  } else {
    Bleacon.stopScanning();
  }
});*/

console.log('0: Listening for iBeacons...');

