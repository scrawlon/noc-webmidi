
var rangeValues = require('../../range-values.js');
var midiCCs = {};
var midiComponents = {};

midiCCs = {

  // Section: Oscillator
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
  },
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

midiComponents = {
  'osc 1': [
    '19',
    '20',
    '21',
    '22',
    '24',
    '25',
    '26',
    '27',
    '28'
  ],
  'osc 2': [
    '29',
    '30',
    '31',
    '33',
    '35',
    '36',
    '37',
    '39',
    '40'
  ]
};

module.exports = {
  midiCCs: midiCCs,
  midiComponents: midiComponents
}