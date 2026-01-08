(function() {
  "use strict";
  const circuitMidiApp = require('./index.js');

  window.circuitMidiApp = circuitMidiApp;
  // Ensure midiNRPNs is accessible
  window.circuitMidiApp.midiNRPNs = circuitMidiApp.midiNRPNs;
})();
