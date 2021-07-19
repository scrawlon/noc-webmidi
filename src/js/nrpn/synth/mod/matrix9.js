
const rangeValues = require('../../../range-values');;
const midiNRPNs = {

  // Mod Matrix 9
  '1:123': [
    {
      'name': 'mod matrix 9 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'default': 0
    }
  ],
  '1:124': [
    {
      'name': 'mod matrix 9 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'default': 0
    }
  ],
  '1:126': [
    {
      'name': 'mod matrix 9 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'default': 64
    }
  ],
  '1:127': [
    {
      'name': 'mod matrix 9 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'default': 0
    }
  ]
};

module.exports = midiNRPNs;