
var rangeValues = require('../../range-values.js');
var midiCCs = {};
var midiComponents = {};

midiCCs = {

  // Section: Voice
  '3': {
    'name': 'Polyphony Mode',
    'range': [0, rangeValues.synth.polyphonyMode.length - 1],
    'rangeValues': rangeValues.synth.polyphonyMode,
    'default': 2
  },
  '5': {
    'name': 'Portamento Rate',
    'range': [0, 127],
    'default': 0
  },
  '9': {
    'name': 'Pre-Glide',
    'range': [52, 76],
    'rangeValues': [-12, 12],
    'default': 64
  },
  '13': {
    'name': 'Keyboard Octave',
    'range': [60, 68],
    'rangeValues': [-4, 4],
    'default': 64
  }
};

midiComponents = [
  '3',
  '5',
  '9',
  '13'
];

module.exports = {
  midiCCs: midiCCs,
  midiComponents: midiComponents
}