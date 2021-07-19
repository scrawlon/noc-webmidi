
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 12
  '2:10': [
    {
      'name': 'mod matrix 12 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'default': 0
    }
  ],
  '2:11': [
    {
      'name': 'mod matrix 12 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'default': 0
    }
  ],
  '2:13': [
    {
      'name': 'mod matrix 12 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'default': 64
    }
  ],
  '2:14': [
    {
      'name': 'mod matrix 12 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'default': 0
    }
  ]
};

module.exports = midiNRPNs;