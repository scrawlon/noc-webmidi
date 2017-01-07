var helpers = require('./helpers.js'),
  circuitMidi = require('./novation-circuit-midi.js');

circuitMidiApp = (function() {
  var midiCCs = circuitMidi.midiCCs,
    midiComponents = circuitMidi.midiComponents,
    midiDrumCCs = circuitMidi.midiDrumCCs,
    midiChannels = circuitMidi.midiChannels,
    getCircuitMidiCC = helpers.getCircuitMidiCC;

  return {
    midiCCs: midiCCs,
    midiComponents: midiComponents,
    midiDrumCCs: midiDrumCCs,
    midiChannels: midiChannels,
    getCircuitMidiCC: getCircuitMidiCC
  }
})();
