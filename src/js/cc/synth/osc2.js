
const rangeValues = require('../../range-values.js');
const midiCCs = {

  // Section: Oscillator 2
  ' 29': {
    'name': 'osc 2 wave',
    'range': [0, rangeValues.synth.waveforms.length - 1],
    'rangeValues': rangeValues.synth.waveforms,
    'defaultValue': 2
  },
  ' 30': {
    'name': 'osc 2 wave interpolate',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 31': {
    'name': 'osc 2 pulse width index',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'defaultValue': 127
  },
  ' 33': {
    'name': 'osc 2 virtual sync depth',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 35': {
    'name': 'osc 2 density',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 36': {
    'name': 'osc 2 density detune',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 37': {
    'name': 'osc 2 semitones',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'defaultValue': 64
  },
  ' 39': {
    'name': 'osc 2 cents',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'defaultValue': 64
  },
  ' 40': {
    'name': 'osc 2 pitchbend',
    'range': [52, 76],
    'rangeValues': [-12, 12],
    'defaultValue': 76
  },
};


module.exports = midiCCs;