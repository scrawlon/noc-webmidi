var addtionalControls = require('./additional-controls');
var delay = require('./delay');
var reverb = require('./reverb');
var sidechain = require('./sidechain');

module.exports = {
  midiNRPNs: {
    ...reverb.midiNRPNs,
    ...delay.midiNRPNs,
    ...sidechain.midiNRPNs,
    ...addtionalControls.midiNRPNs
  },
  midiComponents: {
    'reverb': Object.keys(reverb.midiNRPNs),
    'delay': Object.keys(delay.midiNRPNs),
    'sidechain': Object.keys(sidechain.midiNRPNs),
    'addtional controls': Object.keys(addtionalControls.midiNRPNs)
  }
};