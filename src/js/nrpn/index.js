var session = require('./session');
var synth = require('./synth');

module.exports = {
  midiNRPNs: {
    synth: synth.midiNRPNs,
    session: session.midiNRPNs
  },
  midiComponents: {
    synth: synth.midiComponents,
    session: session.midiComponents
  }
};