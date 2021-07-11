
var rangeValues = require('../../range-values.js');
var midiCCs = {};
var midiComponents = {};

midiCCs = {

  // Section: Filter
  '60': {
    'name': 'routing',
    'range': [0, rangeValues.filter.routing.length - 1],
    'rangeValues': rangeValues.filter.routing,
    'default': 0
  },
  '63': {
    'name': 'drive',
    'range': [0, 127],
    'default': 0
  },
  '65': {
    'name': 'drive type',
    'range': [0, rangeValues.distortion.driveType.length - 1],
    'rangeValues': rangeValues.distortion.driveType,
    'default': 0
  },
  '68': {
    'name': 'type',
    'range': [0, rangeValues.filter.type.length - 1],
    'rangeValues': rangeValues.filter.type,
    'default': 1
  },
  '74': {
    'name': 'frequency',
    'range': [0, 127],
    'default': 127
  },
  '69': {
    'name': 'tracking',
    'range': [0, 127],
    'default': 127
  },
  '71': {
    'name': 'resonance',
    'range': [0, 127],
    'default': 0
  },
  '78': {
    'name': 'Q normalize',
    'range': [0, 127],
    'default': 64
  },
  '79': {
    'name': 'env 2 to frequency',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'default': 64
  }
};

midiComponents = [
  '60',
  '63',
  '65',
  '68',
  '74',
  '69',
  '71',
  '78',
  '79'
];

module.exports = {
  midiCCs: midiCCs,
  midiComponents: midiComponents
}