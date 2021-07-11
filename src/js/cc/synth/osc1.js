
const rangeValues = require('../../range-values.js');
const midiCCs = {

  // Section: Oscillator 1
  '19': {
    'name': 'osc 1 wave',
    'range': [0, rangeValues.synth.waveforms.length - 1],
    'rangeValues': rangeValues.synth.waveforms,
    'default': 2
  },
  '20': {
    'name': 'osc 1 wave interpolate',
    'range': [0, 127],
    'default': 0
  },
  '21': {
    'name': 'osc 1 pulse width index',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'default': 127
  },
  '22': {
    'name': 'osc 1 virtual sync depth',
    'range': [0, 127],
    'default': 0
  },
  '24': {
    'name': 'osc 1 density',
    'range': [0, 127],
    'default': 0
  },
  '25': {
    'name': 'osc 1 density detune',
    'range': [0, 127],
    'default': 0
  },
  '26': {
    'name': 'osc 1 semitones',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'default': 64
  },
  '27': {
    'name': 'osc 1 cents',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'default': 64
  },
  '28': {
    'name': 'osc 1 pitchbend',
    'range': [52, 76],
    'rangeValues': [-12, 12],
    'default': 76
  }
};

module.exports = midiCCs;