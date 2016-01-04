'use strict';

const Bleacon = require('bleacon');

Bleacon.on('stateChange', function(state) {
  console.log("State is");
  if (state === 'poweredOn') {
      Bleacon.startScanning();
      console.log("Powerred On")
  } else {
      Bleacon.stopScanning();
      console.log("Powerred Off");
  }
});

Bleacon.on('discover', function (bleacon) {
  console.log("UUID: ", bleacon.uuid);
});
