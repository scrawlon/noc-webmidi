(function () {
  var session = require('./session.js');
  var synth = require('./synth.js');

  module.exports = {
    session: session.midiNRPNs,
    synth: synth.midiNRPNs
  };
})();