var helpers = require('./helpers.js');
var circuitMidi = require('./novation-circuit-midi.js');

console.log('test');
module.exports = {
  midiCCs: circuitMidi.midiCCs,
  midiComponents: circuitMidi.midiComponents,
  midiDrumCCs: circuitMidi.midiDrumCCs,
  midiChannels: circuitMidi.midiChannels,
  getCircuitMidiCC: helpers.getCircuitMidiCC
}
