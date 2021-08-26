
const rangeValues = require('../../range-values.js');
const midiCCs = {

  // Section: Voice
  ' 3': {
    'name': 'Polyphony Mode',
    'range': [0, rangeValues.synth.polyphonyMode.length - 1],
    'rangeValues': rangeValues.synth.polyphonyMode,
    'defaultValue': 2
  },
  ' 5': {
    'name': 'Portamento Rate',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 9': {
    'name': 'Pre-Glide',
    'range': [52, 76],
    'rangeValues': [-12, 12],
    'defaultValue': 64
  },
  ' 13': {
    'name': 'Keyboard Octave',
    'range': [60, 68],
    'rangeValues': [-4, 4],
    'defaultValue': 64
  }
};

module.exports = midiCCs;