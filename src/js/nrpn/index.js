(function () {
  var session = require('./session.js');
  var synth = require('./synth.js');

  module.exports = {
    midiNRPNs: {
      session: session.midiNRPNs,
      synth: synth.midiNRPNs
    },
    midiComponents: {
      session: session.midiComponents,
      synth: synth.midiComponents
    }
  };
})();