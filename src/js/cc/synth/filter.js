
const rangeValues = require('../../range-values.js');
const midiCCs = {

  // Section: Filter
  '60': {
    'name': 'routing',
    'range': [0, rangeValues.filter.routing.length - 1],
    'rangeValues': rangeValues.filter.routing,
    'defaultValue': 0
  },
  '63': {
    'name': 'drive',
    'range': [0, 127],
    'defaultValue': 0
  },
  '65': {
    'name': 'drive type',
    'range': [0, rangeValues.distortion.driveType.length - 1],
    'rangeValues': rangeValues.distortion.driveType,
    'defaultValue': 0
  },
  '68': {
    'name': 'type',
    'range': [0, rangeValues.filter.type.length - 1],
    'rangeValues': rangeValues.filter.type,
    'defaultValue': 1
  },
  '74': {
    'name': 'frequency',
    'range': [0, 127],
    'defaultValue': 127
  },
  '69': {
    'name': 'tracking',
    'range': [0, 127],
    'defaultValue': 127
  },
  '71': {
    'name': 'resonance',
    'range': [0, 127],
    'defaultValue': 0
  },
  '78': {
    'name': 'Q normalize',
    'range': [0, 127],
    'defaultValue': 64
  },
  '79': {
    'name': 'env 2 to frequency',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'defaultValue': 64
  }
};

module.exports = midiCCs;