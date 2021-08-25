
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 7
  '1:113': [
    {
      'name': 'mod matrix 7 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  '1:114': [
    {
      'name': 'mod matrix 7 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  '1:116': [
    {
      'name': 'mod matrix 7 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  '1:117': [
    {
      'name': 'mod matrix 7 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

module.exports = midiNRPNs;