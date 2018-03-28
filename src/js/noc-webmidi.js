(function() {
  "use strict";
  var synth = require('./novation-circuit-synth.js'),
    drum = require('./novation-circuit-drums.js'),
    session = require('./novation-circuit-session.js'),
    circuitMidiApp = require('./index.js');

  window.circuitMidiApp = circuitMidiApp;
})();
