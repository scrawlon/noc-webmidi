var addtionalControls = require('./additional-controls');
var delay = require('./delay');
var reverb = require('./reverb');
var sidechain = require('./sidechain');

module.exports = {
  midiNRPNs: {
    reverb: reverb.midiNRPNs,
    delay: delay.midiNRPNs,
    sidechain: sidechain.midiNRPNs,
    addtionalControls: addtionalControls.midiNRPNs
  },
  midiComponents: {
    reverb: reverb.midiComponents,
    delay: delay.midiComponents,
    sidechain: sidechain.midiComponents,
    addtionalControls: addtionalControls.midiComponents
  }
};