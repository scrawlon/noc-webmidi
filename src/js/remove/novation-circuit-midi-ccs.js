var synth = require('./novation-circuit-synth.js'),
  drum = require('./novation-circuit-drums.js'),
  session = require('./novation-circuit-session.js');

// (function() {
  var midiCCs = {
    'synth': synth.midiCCs,
    'drum': drum.midiCCs,
    'session': session.midiCCs
  };

  module.exports = {
    midiCCs: midiCCs
  }
// })();
