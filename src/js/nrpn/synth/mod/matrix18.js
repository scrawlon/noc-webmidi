
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 18
  ' 2:40': [
    {
      'name': 'mod matrix 18 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:42': [
    {
      'name': 'mod matrix 18 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:43': [
    {
      'name': 'mod matrix 18 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 2:44': [
    {
      'name': 'mod matrix 18 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

module.exports = midiNRPNs;