
const rangeValues = require('../../range-values.js');
const midiCCs = {

  // Section: Oscillator 2
  '29': {
    'name': 'osc 2 wave',
    'range': [0, rangeValues.synth.waveforms.length - 1],
    'rangeValues': rangeValues.synth.waveforms,
    'default': 2
  },
  '30': {
    'name': 'osc 2 wave interpolate',
    'range': [0, 127],
    'default': 0
  },
  '31': {
    'name': 'osc 2 pulse width index',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'default': 127
  },
  '33': {
    'name': 'osc 2 virtual sync depth',
    'range': [0, 127],
    'default': 0
  },
  '35': {
    'name': 'osc 2 density',
    'range': [0, 127],
    'default': 0
  },
  '36': {
    'name': 'osc 2 density detune',
    'range': [0, 127],
    'default': 0
  },
  '37': {
    'name': 'osc 2 semitones',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'default': 64
  },
  '39': {
    'name': 'osc 2 cents',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'default': 64
  },
  '40': {
    'name': 'osc 2 pitchbend',
    'range': [52, 76],
    'rangeValues': [-12, 12],
    'default': 76
  },
};


module.exports = midiCCs;