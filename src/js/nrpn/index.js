var session = require('./session');
var synth = require('./synth');

module.exports = {
  midiNRPNs: {
    'synth': synth.midiNRPNs,
    'session': session.midiNRPNs
  },
  nrpnComponents: {
    'synth 1': synth.midiComponents,
    'synth 2': synth.midiComponents,
    'session': session.midiComponents
  }
};