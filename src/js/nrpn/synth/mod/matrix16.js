
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 16
  ' 2:30': [
    {
      'name': 'mod matrix 16 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:32': [
    {
      'name': 'mod matrix 16 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:33': [
    {
      'name': 'mod matrix 16 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 2:34': [
    {
      'name': 'mod matrix 16 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

module.exports = midiNRPNs;