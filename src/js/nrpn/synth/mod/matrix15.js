
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 15
  '2:25': [
    {
      'name': 'mod matrix 15 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  '2:27': [
    {
      'name': 'mod matrix 15 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  '2:28': [
    {
      'name': 'mod matrix 15 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  '2:29': [
    {
      'name': 'mod matrix 15 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

module.exports = midiNRPNs;