
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 8
  ' 1:118': [
    {
      'name': 'mod matrix 8 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:119': [
    {
      'name': 'mod matrix 8 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:121': [
    {
      'name': 'mod matrix 8 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 1:122': [
    {
      'name': 'mod matrix 8 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

module.exports = midiNRPNs;