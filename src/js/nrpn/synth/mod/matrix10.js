
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 10
  '2:0': [
    {
      'name': 'mod matrix 10 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'default': 0
    }
  ],
  '2:1': [
    {
      'name': 'mod matrix 10 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'default': 0
    }
  ],
  '2:3': [
    {
      'name': 'mod matrix 10 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'default': 64
    }
  ],
  '2:4': [
    {
      'name': 'mod matrix 10 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'default': 0
    }
  ]
};

module.exports = midiNRPNs;