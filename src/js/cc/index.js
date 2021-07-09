(function () {
  var drums = require('./drums.js');
  var session = require('./session.js');
  var synth = require('./synth.js');

  module.exports = {
    midiCCs: {
      drums: drums.midiCCs,
      session: session.midiCCs,
      synth: synth.midiCCs
    },
    midiComponents: {
      drums: drums.midiComponents,
      session: session.midiComponents,
      synth: synth.midiComponents
    }
  };
})();