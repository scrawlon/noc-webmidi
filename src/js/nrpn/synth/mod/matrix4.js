
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 4
  ' 1:98': [
    {
      'name': 'mod matrix 4 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:99': [
    {
      'name': 'mod matrix 4 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:101': [
    {
      'name': 'mod matrix 4 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 1:102': [
    {
      'name': 'mod matrix 4 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

module.exports = midiNRPNs;