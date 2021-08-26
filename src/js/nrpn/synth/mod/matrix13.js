
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 13
  ' 2:15': [
    {
      'name': 'mod matrix 13 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:16': [
    {
      'name': 'mod matrix 13 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:18': [
    {
      'name': 'mod matrix 13 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 2:19': [
    {
      'name': 'mod matrix 13 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

module.exports = midiNRPNs;